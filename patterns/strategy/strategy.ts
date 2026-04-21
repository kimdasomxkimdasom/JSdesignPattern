// Strategy Pattern
// 언제 쓰나: 동일한 목적(예: 결제 처리)을 달성하는 방법이 여러 개이고,
// 런타임에 교체할 수 있어야 할 때. if/else 로 타입 분기하는 대신 전략 객체로 교체한다.
// 예시: 결제 수단(카드/계좌이체/간편결제), 정렬 알고리즘, 배송비 계산 방식.

interface PaymentResult {
  success: boolean;
  receiptId: string;
  method: string;
}

interface PaymentStrategy {
  pay(amount: number): Promise<PaymentResult>;
}

class CardPayment implements PaymentStrategy {
  constructor(private readonly cardNumber: string) {}

  async pay(amount: number): Promise<PaymentResult> {
    const masked = this.cardNumber.slice(-4).padStart(this.cardNumber.length, "*");
    console.log(`[카드] ${masked} 로 ${amount}원 결제`);
    return { success: true, receiptId: `CARD-${Date.now()}`, method: "card" };
  }
}

class BankTransferPayment implements PaymentStrategy {
  constructor(private readonly accountNumber: string) {}

  async pay(amount: number): Promise<PaymentResult> {
    console.log(`[계좌이체] ${this.accountNumber} 로 ${amount}원 이체`);
    return { success: true, receiptId: `BANK-${Date.now()}`, method: "bank" };
  }
}

class KakaoPayPayment implements PaymentStrategy {
  async pay(amount: number): Promise<PaymentResult> {
    console.log(`[카카오페이] 간편결제 ${amount}원`);
    return { success: true, receiptId: `KAKAO-${Date.now()}`, method: "kakao" };
  }
}

class Checkout {
  constructor(private strategy: PaymentStrategy) {}

  // 런타임에 전략을 바꿀 수도 있다.
  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  async process(amount: number): Promise<PaymentResult> {
    return this.strategy.pay(amount);
  }
}

// 실행 예제
async function run() {
  const checkout = new Checkout(new CardPayment("1234-5678-9012-3456"));
  console.log(await checkout.process(15000));

  checkout.setStrategy(new KakaoPayPayment());
  console.log(await checkout.process(8000));

  checkout.setStrategy(new BankTransferPayment("110-123-456789"));
  console.log(await checkout.process(200000));
}

run();

export { Checkout, CardPayment, BankTransferPayment, KakaoPayPayment };
export type { PaymentStrategy };
