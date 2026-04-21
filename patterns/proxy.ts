// Proxy Pattern
// 언제 쓰나: 실제 객체에 대한 접근을 대리 객체가 감싸서 제어/지연/보호해야 할 때.
// Decorator 와 비슷해 보이지만, Proxy 는 "접근 제어/지연 로딩/보호"가 목적이고
// Decorator 는 "기능 추가/조합"이 목적이다.
// 예시: 무거운 리포트 쿼리의 캐싱 프록시, 권한 체크 프록시, lazy loading.

interface ReportData {
  rows: number[][];
  generatedAt: number;
}

interface ReportLoader {
  load(reportId: string): Promise<ReportData>;
}

// 무거운 실제 객체 — DB 쿼리 200ms 정도 걸린다고 가정.
class RealReportLoader implements ReportLoader {
  async load(reportId: string): Promise<ReportData> {
    console.log(`[Real] ${reportId} DB 쿼리 실행 중...`);
    await new Promise((r) => setTimeout(r, 200));
    return {
      rows: [
        [1, 2, 3],
        [4, 5, 6],
      ],
      generatedAt: Date.now(),
    };
  }
}

// 1) Caching Proxy — 같은 리포트는 TTL 동안 캐시해서 반환.
class CachingReportProxy implements ReportLoader {
  private readonly cache = new Map<string, ReportData>();

  constructor(
    private readonly real: ReportLoader,
    private readonly ttlMs = 1000,
  ) {}

  async load(reportId: string): Promise<ReportData> {
    const hit = this.cache.get(reportId);
    if (hit && Date.now() - hit.generatedAt < this.ttlMs) {
      console.log(`[Proxy] ${reportId} 캐시 적중`);
      return hit;
    }
    const fresh = await this.real.load(reportId);
    this.cache.set(reportId, fresh);
    return fresh;
  }
}

// 2) Protection Proxy — 권한 없는 사용자는 차단.
interface User {
  id: string;
  role: "admin" | "member" | "guest";
}

class PermissionReportProxy implements ReportLoader {
  constructor(
    private readonly real: ReportLoader,
    private readonly currentUser: User,
  ) {}

  async load(reportId: string): Promise<ReportData> {
    if (this.currentUser.role === "guest") {
      throw new Error(`[Proxy] ${this.currentUser.id} 는 리포트 조회 권한이 없습니다.`);
    }
    return this.real.load(reportId);
  }
}

// 실행 예제
async function run() {
  const admin: User = { id: "dasom", role: "admin" };
  const guest: User = { id: "visitor", role: "guest" };

  // 권한 프록시 + 캐싱 프록시를 함께 체이닝.
  const loader: ReportLoader = new CachingReportProxy(
    new PermissionReportProxy(new RealReportLoader(), admin),
  );

  console.time("첫 호출");
  await loader.load("sales-202604");
  console.timeEnd("첫 호출");

  console.time("두 번째 호출 (캐시)");
  await loader.load("sales-202604");
  console.timeEnd("두 번째 호출 (캐시)");

  // guest 로 바꿔서 권한 체크가 실제로 막는지 확인.
  const guarded = new PermissionReportProxy(new RealReportLoader(), guest);
  try {
    await guarded.load("sales-202604");
  } catch (err) {
    console.log((err as Error).message);
  }
}

run();

export { RealReportLoader, CachingReportProxy, PermissionReportProxy };
export type { ReportLoader, User };
