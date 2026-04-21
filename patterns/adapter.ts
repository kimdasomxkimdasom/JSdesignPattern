// Adapter Pattern
// 언제 쓰나: 외부 라이브러리/레거시 코드의 인터페이스가 내 앱의 표준과 달라서,
// 그 사이를 변환해주는 얇은 계층이 필요할 때.
// 예시: 레거시 SMS SDK 를 앱 전체에서 쓰는 Notifier 인터페이스로 통일.

// ── 앱에서 쓰고 싶은 표준 인터페이스 ──
interface Notifier {
  send(to: string, message: string): Promise<void>;
}

// ── 수정할 수 없는 외부(레거시) SDK 라고 가정 ──
class LegacySmsApi {
  sendSMS(params: {
    phoneNumber: string;
    text: string;
    region: string;
  }): Promise<{ ok: boolean; trackingId: string }> {
    console.log(`[Legacy SMS] (${params.region}) ${params.phoneNumber} <- "${params.text}"`);
    return Promise.resolve({ ok: true, trackingId: "SMS-123" });
  }
}

class LegacyEmailService {
  // 비동기인데 콜백 스타일이라고 가정.
  deliver(
    destination: string,
    subject: string,
    body: string,
    cb: (err: Error | null, messageId?: string) => void,
  ): void {
    console.log(`[Legacy Email] ${destination} <- [${subject}] ${body}`);
    setTimeout(() => cb(null, "MSG-456"), 20);
  }
}

// ── Adapter: 레거시 인터페이스 -> 표준 인터페이스 ──
class SmsNotifierAdapter implements Notifier {
  constructor(
    private readonly sms: LegacySmsApi,
    private readonly defaultRegion = "KR",
  ) {}

  async send(to: string, message: string): Promise<void> {
    const res = await this.sms.sendSMS({
      phoneNumber: to,
      text: message,
      region: this.defaultRegion,
    });
    if (!res.ok) throw new Error(`SMS 전송 실패 (trackingId=${res.trackingId})`);
  }
}

class EmailNotifierAdapter implements Notifier {
  constructor(
    private readonly email: LegacyEmailService,
    private readonly defaultSubject = "알림",
  ) {}

  send(to: string, message: string): Promise<void> {
    // 콜백 → Promise 변환도 어댑터가 흡수한다.
    return new Promise((resolve, reject) => {
      this.email.deliver(to, this.defaultSubject, message, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
}

// ── 앱 코드는 Notifier 만 알면 된다 ──
async function notifyAll(notifiers: Notifier[], to: string, message: string) {
  await Promise.all(notifiers.map((n) => n.send(to, message)));
}

// 실행 예제
async function run() {
  const notifiers: Notifier[] = [
    new SmsNotifierAdapter(new LegacySmsApi()),
    new EmailNotifierAdapter(new LegacyEmailService(), "AEND 공지"),
  ];
  await notifyAll(notifiers, "user@aend.co.kr", "시스템 점검 안내");
}

run();

export { SmsNotifierAdapter, EmailNotifierAdapter };
export type { Notifier };
