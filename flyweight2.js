var Legionary = (function() {
    function Legionary(name) { // 이름 만 
      this.name = name;
    }
    // 메모리를 아끼기 위해 
    // 나머지 메소드는 prototype 
    Legionary.prototype.hp = 50;
    Legionary.prototype.att = 5;
    Legionary.prototype.attack = function(target) {
      console.log(this.name + '가 ' + target + '를 공격합니다');
    };
    return Legionary;
  })();

var soldier1 = new Legionary('Marcus');
var soldier2 = new Legionary('Tiberius');
var soldier3 = new Legionary('Zero');

console.log(soldier1);
console.log(soldier1.name);
console.log(soldier1.hp);
console.log(soldier1.att);

console.log(soldier1.attack(soldier3.name));

//프로토타입을 공유하지만 solider1의 hp를 바꿔도 solider2와는 상관 없기 때문에 따로 hp를 관리 할 수 있다. 
//메모리는 아끼면서, 특성도 관리 할 수 있다. 
//https://www.zerocho.com/category/JavaScript/post/57bbb0a3f6f59c170071d2e2