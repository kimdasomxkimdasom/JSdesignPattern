
//Flyweight Pattern 예시 활용 

// 플라이웨잇은 불변하기 쉽거나, 공유하기 쉬운 값을 빼는데 의의가 있음.

// 예시로,
// 포켓몬 속성이 불속성과 풀속성이 있는데
// 불속성을 나타내는 객체가 메모리에 올리면 10mb이다.
// 그럴때 각 포켓몬 마다 new 불속성 new 물속성을 갖게하는게 아니고,
// 불속성과 물속성을 따로 빼두고
// 포켓몬 속성 = 이미 만들어진 불속성
// 이런식으로 구현하는게 더 좋을것 같음. 

var Pokemon = (function() {
    function Pokemon(name) { 
      this.name = name; // 포켓몬 이름 
    }

    // 메모리를 아끼기 위해 
    // 나머지 메소드는 prototype 이용
    Pokemon.prototype.hp = 50;
    Pokemon.prototype.att = "기본공격";
    Pokemon.prototype.attack = function(target) {
      console.log(this.name + '가 ' + target + '를 공격합니다.');
    };

    return Pokemon;
  })();

// 포켓몬 생성 
var pokemon1 = new Pokemon('피카츄');
var pokemon2 = new Pokemon('꼬부기');
var pokemon3 = new Pokemon('파이리');

//프로토타입을 공유하지만 pokemon3 hp를 바꿔도 
//pokemon1 상관 없기 때문에 따로 hp를 관리 할 수 있다. 
pokemon3.hp = 100;

console.log(pokemon1);
console.log(pokemon2);
console.log(pokemon3);
console.log(pokemon1.name);
console.log(pokemon1.hp);
console.log(pokemon1.att);
console.log(pokemon3.hp);

console.log(pokemon1.attack(pokemon2.name));
console.log(pokemon3.attack(pokemon1.name));

//메모리는 아끼면서, 특성도 관리 할 수 있다. 
//https://www.zerocho.com/category/JavaScript/post/57bbb0a3f6f59c170071d2e2