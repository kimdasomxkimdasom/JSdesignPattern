// Singleton Pattern
// 언제 쓰나: 애플리케이션 전역에서 단 하나의 인스턴스만 존재해야 할 때.
// 예시: 설정 로더, 로거, DB 커넥션 풀 같은 공유 리소스.

class Config {
  private static instance: Config | null = null;
  private readonly values = new Map<string, string>();

  // 외부에서 new 로 인스턴스를 못 만들게 private 생성자.
  private constructor() {
    this.values.set("env", process.env.NODE_ENV ?? "development");
    this.values.set("appName", "AEND");
  }

  static getInstance(): Config {
    if (Config.instance === null) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  set(key: string, value: string): void {
    this.values.set(key, value);
  }

  get(key: string): string | undefined {
    return this.values.get(key);
  }
}

// 실행 예제
function run() {
  const a = Config.getInstance();
  a.set("apiUrl", "https://api.aend.co.kr");

  const b = Config.getInstance();
  console.log("같은 인스턴스인가?", a === b); // true
  console.log("b 에서 읽은 apiUrl:", b.get("apiUrl"));
  console.log("환경:", b.get("env"));
}

run();

export { Config };
