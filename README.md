# JS Design Pattern Study

자바스크립트 디자인 패턴 학습용 예제 모음 (2022.03). 각 패턴별로 참고 예제와 직접 구성한 응용 예제(`aend*`, `multipleTable*`, `pokemon*` 등)가 함께 들어있다.

## 다루는 패턴

| 패턴 | 쓰임 | 파일 |
|---|---|---|
| Composite | 트리 구조(부모-자식)를 동일 인터페이스로 다룰 때 | `composite.js`, `aendComposite.js`, `aendComposite2.js` |
| Flyweight | 공유 가능한 불변 데이터를 분리해 메모리를 절약할 때 | `flyweight.js`, `aendFlyweight.js`, `pokemonFlyweight.js` |
| Bridge | 추상(인터페이스)과 구현을 분리해 독립적으로 확장할 때 | `bridge.js`, `multiplecationBridge.js` |
| Factory Method | 조건에 따라 서로 다른 객체 생성을 캡슐화할 때 | `factoryMethod.js`, `factoryMethod.html`, `multipleTableFactory.js` |
| Iterator | 컬렉션의 내부 구조와 무관하게 순회 방식을 제공할 때 | `iterator.js`, `multipleTableIterator.js` |
| Template Method | 알고리즘 뼈대는 고정하고 일부 단계만 하위에서 바꿀 때 | `multipleTableTemplate.js` |
| 기타 예제 | — | `changeColor.js`, `example.html`, `test.html` |

## 예제 네이밍 규칙

- `aend*` — 회사/팀 도메인에 맞춰 응용한 예제 (예: `aendComposite.js`는 AEND 조직도를 Composite으로 구현)
- `multipleTable*` — 동일한 주제(구구단 출력)를 Factory / Iterator / Template Method / Bridge 로 각각 구현해 **같은 문제를 패턴별로 어떻게 다르게 푸는지** 비교한 시리즈
- `pokemon*` — 포켓몬 속성(불/물)을 공유 객체로 다루며 Flyweight 개념을 익힌 예제

## 실행 방법

Node.js가 설치되어 있다면 개별 파일 단위로 실행:

```bash
node composite.js
node pokemonFlyweight.js
```

브라우저에서 확인할 파일은 HTML을 직접 열면 된다 (`factoryMethod.html`, `example.html` 등).

## 학습 포인트

- **Flyweight**: 인스턴스마다 중복되는 값은 `prototype`으로 공유, 개별로 달라져야 하는 값만 인스턴스 프로퍼티로 둔다.
- **Bridge**: 자바의 `interface` / `impl` 관계와 유사. 제스처(추상) ↔ 출력장치(구현) 처럼 두 축을 독립적으로 조합할 수 있게 설계.
- **Factory Method**: 생성 로직을 팩토리 한 곳에 모아두면 클라이언트 코드가 구체 타입을 몰라도 된다.
- **Iterator**: `first` / `next` / `hasNext` 인터페이스를 통해 배열이든 커스텀 컬렉션이든 동일한 순회 코드로 다룰 수 있게 한다.

## 참고 자료

- [ZeroCho - JavaScript 디자인 패턴](https://www.zerocho.com/category/JavaScript/post/57bbb0a3f6f59c170071d2e2)
- 각 파일 상단 주석에 개념 설명과 참고 링크를 함께 남겨두었다.
