var Pokemon = (function() {
    function Pokemon(name) { 
      this.name = name;
    }

    // 메모리를 아끼기 위해 
    // 나머지 메소드는 prototype 이용
    Pokemon.prototype.hp = 50;
    Pokemon.prototype.att = 5;
    Pokemon.prototype.attack = function(target) {
      console.log(this.name + '가 ' + target + '를 공격합니다.');
    };

    return Pokemon;
  })();

var pokemon1 = new Pokemon('피카츄');
var pokemon2 = new Pokemon('꼬부기');
var pokemon3 = new Pokemon('파이리');
pokemon3.att = 10;

console.log(pokemon1);
console.log(pokemon2);
console.log(pokemon3);
console.log(pokemon1.name);
console.log(pokemon1.hp);
console.log(pokemon1.att);
console.log(pokemon3.att);

console.log(pokemon1.attack(pokemon2.name));

//프로토타입을 공유하지만 pokemon3 att를 바꿔도 pokemon1 상관 없기 때문에 따로 att를 관리 할 수 있다. 
//메모리는 아끼면서, 특성도 관리 할 수 있다. 
//https://www.zerocho.com/category/JavaScript/post/57bbb0a3f6f59c170071d2e2