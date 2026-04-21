// Decorator Pattern
// 언제 쓰나: 기존 객체의 인터페이스는 유지하면서 기능을 "겉에서" 덧씌우고 싶을 때.
// 서브클래싱 대신 감싸기 방식을 쓰면 여러 기능을 조합해 쌓을 수 있다.
// 예시: HTTP 클라이언트에 로깅 / 캐싱 / 재시도를 원하는 조합으로 덧씌우기.

interface HttpClient {
  get(url: string): Promise<string>;
}

// 실제로 네트워크를 치는 기본 구현 (예제용 mock).
class BaseHttpClient implements HttpClient {
  async get(url: string): Promise<string> {
    // 실무에서는 fetch(url).then(r => r.text()) 같은 호출.
    await new Promise((r) => setTimeout(r, 50));
    return `<<body from ${url}>>`;
  }
}

// 로깅 데코레이터 — 호출 전후 로그를 남긴다.
class LoggingHttpClient implements HttpClient {
  constructor(private readonly wrapped: HttpClient) {}

  async get(url: string): Promise<string> {
    console.log(`[HTTP] -> GET ${url}`);
    const started = Date.now();
    const result = await this.wrapped.get(url);
    console.log(`[HTTP] <- ${url} (${Date.now() - started}ms, ${result.length}자)`);
    return result;
  }
}

// 캐싱 데코레이터 — 동일 URL 응답을 메모리에 기억한다.
class CachingHttpClient implements HttpClient {
  private readonly cache = new Map<string, string>();

  constructor(private readonly wrapped: HttpClient) {}

  async get(url: string): Promise<string> {
    const cached = this.cache.get(url);
    if (cached !== undefined) {
      console.log(`[CACHE] 적중: ${url}`);
      return cached;
    }
    const result = await this.wrapped.get(url);
    this.cache.set(url, result);
    return result;
  }
}

// 재시도 데코레이터 — 실패 시 몇 번 더 시도한다.
class RetryingHttpClient implements HttpClient {
  constructor(private readonly wrapped: HttpClient, private readonly maxRetries = 2) {}

  async get(url: string): Promise<string> {
    let lastErr: unknown;
    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        return await this.wrapped.get(url);
      } catch (err) {
        lastErr = err;
        console.log(`[RETRY] ${url} 시도 ${attempt + 1} 실패`);
      }
    }
    throw lastErr;
  }
}

// 실행 예제: 기본 → 재시도 → 캐싱 → 로깅 순으로 감싼다.
async function run() {
  const client: HttpClient = new LoggingHttpClient(
    new CachingHttpClient(new RetryingHttpClient(new BaseHttpClient()))
  );

  await client.get("/api/users/1");
  await client.get("/api/users/1"); // 두 번째는 캐시에서 나옴.
  await client.get("/api/users/2");
}

run();

export { BaseHttpClient, LoggingHttpClient, CachingHttpClient, RetryingHttpClient };
export type { HttpClient };
