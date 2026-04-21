# JS Design Pattern Study

자바스크립트 디자인 패턴 학습용 예제 모음. 2022년에 ES5 스타일 JS로 시작한 학습 기록을, TypeScript + ES2022 스타일로 자주 쓰이는 패턴을 추가해보았다.

## 구성

패턴별로 폴더를 나눴다. 기존 JS 예제와 신규 TS 예제가 같은 패턴 폴더 안에 공존할 수 있도록 `patterns/<패턴>/` 구조로 통합했다.

```
aend_js_study/
├── patterns/
│   ├── composite/          # composite.js, aendComposite.js, aendComposite2.js
│   ├── flyweight/          # flyweight.js, aendFlyweight.js, pokemonFlyweight.js
│   ├── bridge/             # bridge.js, multiplecationBridge.js
│   ├── factory-method/     # factoryMethod.js(+html), multipleTableFactory.js, changeColor.js
│   ├── iterator/           # iterator.js, multipleTableIterator.js
│   ├── template-method/    # multipleTableTemplate.js
│   ├── singleton/          # singleton.ts
│   ├── observer/           # observer.ts
│   ├── strategy/           # strategy.ts
│   ├── decorator/          # decorator.ts
│   ├── adapter/            # adapter.ts
│   └── proxy/              # proxy.ts
├── demo/                   # 여러 패턴 JS 를 한 번에 로드하는 통합 테스트 HTML
│   ├── example.html
│   └── test.html
├── tsconfig.json
└── package.json
```

## 기존 학습 (2022.03, ES5 JS)

| 패턴            | 쓰임                                                  | 위치                           |
| --------------- | ----------------------------------------------------- | ------------------------------ |
| Composite       | 트리 구조(부모-자식)를 동일 인터페이스로 다룰 때      | `patterns/composite/`          |
| Flyweight       | 공유 가능한 불변 데이터를 분리해 메모리를 절약할 때   | `patterns/flyweight/`          |
| Bridge          | 추상(인터페이스)과 구현을 분리해 독립적으로 확장할 때 | `patterns/bridge/`             |
| Factory Method  | 조건에 따라 서로 다른 객체 생성을 캡슐화할 때         | `patterns/factory-method/`     |
| Iterator        | 컬렉션의 내부 구조와 무관하게 순회 방식을 제공할 때   | `patterns/iterator/`           |
| Template Method | 알고리즘 뼈대는 고정하고 일부 단계만 하위에서 바꿀 때 | `patterns/template-method/`    |

### 예제 네이밍 규칙

- `aend*` — 회사/팀 도메인에 맞춰 응용한 예제 (예: `aendComposite.js` = AEND 조직도)
- `multipleTable*` — 구구단 출력이라는 동일 주제를 여러 패턴(Factory / Iterator / Template Method / Bridge)으로 비교 구현
- `pokemon*` — 포켓몬 속성 공유로 Flyweight 개념 연습

## 신규 학습 (TypeScript)

실무에서 자주 쓰이는 6개 패턴을 실용적인 예제로 구성했다.

| 패턴               | 쓰임                                                     | 예제 주제                                   | 위치                    |
| ------------------ | -------------------------------------------------------- | ------------------------------------------- | ----------------------- |
| Singleton          | 전역에서 단 하나의 인스턴스만 존재해야 할 때             | 앱 설정 로더                                | `patterns/singleton/`   |
| Observer (Pub/Sub) | 사건 발생 시 여러 구독자에게 알려야 할 때                | 주문 이벤트 버스                            | `patterns/observer/`    |
| Strategy           | 같은 목적에 여러 알고리즘이 있고 런타임 교체가 필요할 때 | 결제 수단 (카드 / 계좌이체 / 간편결제)      | `patterns/strategy/`    |
| Decorator          | 인터페이스는 유지한 채 기능을 겉에서 덧붙일 때           | HTTP 클라이언트에 로깅 / 캐싱 / 재시도 쌓기 | `patterns/decorator/`   |
| Adapter            | 외부/레거시 인터페이스를 앱 표준으로 변환할 때           | 레거시 SMS / Email SDK → 공통 `Notifier`    | `patterns/adapter/`     |
| Proxy              | 접근 제어 / 지연 로딩 / 캐싱처럼 대리 객체가 필요할 때   | 리포트 조회에 캐싱 + 권한 프록시            | `patterns/proxy/`       |

## 실행 방법

### 기존 JS 예제

```bash
node patterns/composite/composite.js
node patterns/flyweight/pokemonFlyweight.js
```

통합 테스트 HTML은 브라우저에서 직접 연다:

- `demo/example.html` — `aend*`, `multipleTable*` 응용 예제 모음 로드
- `demo/test.html` — 원본 참고 예제 모음 로드
- `patterns/factory-method/factoryMethod.html` — 단독 동작 예제

### TypeScript 예제

최초 1회 설치:

```bash
npm install
```

패턴별 실행:

```bash
npm run singleton
npm run observer
npm run strategy
npm run decorator
npm run adapter
npm run proxy
```

타입만 체크:

```bash
npm run typecheck
```

## 학습 포인트

### 기존 JS

- **Flyweight**: 인스턴스마다 중복되는 값은 `prototype`으로 공유, 개별로 달라져야 하는 값만 인스턴스 프로퍼티로.
- **Bridge**: 자바의 `interface` / `impl` 관계와 유사. 제스처(추상) ↔ 출력장치(구현) 처럼 두 축을 독립적으로 조합.
- **Factory Method**: 생성 로직을 팩토리 한 곳에 모아두면 클라이언트가 구체 타입을 몰라도 된다.
- **Iterator**: `first` / `next` / `hasNext` 인터페이스로 내부 구조와 무관하게 순회.

### 신규 TS

- **Singleton**: `private constructor` + `static getInstance` 로 외부에서 `new` 를 막는다. 테스트에선 오히려 불편할 수 있으므로 실제 운영 코드에선 DI 를 먼저 고려.
- **Observer**: 구독자가 발행자를 모르고, 반대도 마찬가지 — **느슨한 결합**이 핵심. TypeScript 의 매핑 타입으로 이벤트 이름과 payload 타입을 함께 검증할 수 있다.
- **Strategy**: 가장 쉬운 "리팩터링 출발점" — 길어지는 `if / else` 분기를 전략 객체로 바꾸면 테스트와 확장이 쉬워진다.
- **Decorator vs Proxy**: 구조는 비슷하지만 의도가 다르다. Decorator 는 **기능 조합**, Proxy 는 **접근 제어 / 지연 / 캐싱**.
- **Adapter**: 외부 코드 수정 없이 표준화가 가능해 레거시 통합이나 라이브러리 교체 시 쓸모가 크다. 콜백 → Promise 변환도 어댑터가 흡수.

## 참고 자료

- [ZeroCho - JavaScript 디자인 패턴](https://www.zerocho.com/category/JavaScript/post/57bbb0a3f6f59c170071d2e2)
- 각 파일 상단 주석에 개념 설명과 참고 링크를 함께 남겨두었다.
