// Observer Pattern (Pub/Sub)
// 언제 쓰나: 어떤 사건이 발생했을 때 관심 있는 여러 구독자에게 알리고 싶을 때.
// 발행자는 구독자가 누구인지 몰라도 되고, 구독자는 필요할 때 등록/해제할 수 있다.
// 예시: 주문 생성 -> 재고 차감, 알림 발송, 로그 기록처럼 한 이벤트에 여러 동작이 붙을 때.

type Listener<T> = (payload: T) => void;

class EventBus<EventMap extends Record<string, unknown>> {
  private readonly listeners = new Map<keyof EventMap, Set<Listener<unknown>>>();

  on<K extends keyof EventMap>(event: K, listener: Listener<EventMap[K]>): () => void {
    const set = this.listeners.get(event) ?? new Set();
    set.add(listener as Listener<unknown>);
    this.listeners.set(event, set);
    // 구독 해제 함수를 반환 — 사용하는 쪽에서 간편하게 off 가능.
    return () => set.delete(listener as Listener<unknown>);
  }

  emit<K extends keyof EventMap>(event: K, payload: EventMap[K]): void {
    this.listeners.get(event)?.forEach((l) => (l as Listener<EventMap[K]>)(payload));
  }
}

// 실행 예제: 주문 이벤트 버스
// (EventBus 의 제네릭 제약 Record<string, unknown> 을 만족시키려면
//  interface 대신 type 별칭을 써야 한다. interface 는 선언 병합이 가능해
//  index signature 관점에서 열려있기 때문.)
type OrderEvents = {
  "order:created": { orderId: string; amount: number };
  "order:paid": { orderId: string };
};

function run() {
  const bus = new EventBus<OrderEvents>();

  const offStock = bus.on("order:created", (p) => {
    console.log(`[재고] ${p.orderId} 재고 예약 (${p.amount}원)`);
  });
  bus.on("order:created", (p) => {
    console.log(`[알림] ${p.orderId} 주문 접수 알림 발송`);
  });
  bus.on("order:paid", (p) => {
    console.log(`[정산] ${p.orderId} 결제 완료 처리`);
  });

  bus.emit("order:created", { orderId: "A-001", amount: 50000 });
  bus.emit("order:paid", { orderId: "A-001" });

  // 재고 구독 해제 후 다시 발행 — 재고 구독자만 빠짐.
  offStock();
  console.log("--- 재고 구독 해제 후 ---");
  bus.emit("order:created", { orderId: "A-002", amount: 30000 });
}

run();

export { EventBus };
