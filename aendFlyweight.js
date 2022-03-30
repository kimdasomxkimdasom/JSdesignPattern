//Flyweight Pattern 예시 활용 

var Company = (function() {
    function Company(name) { 
      this.name = name;
    }

    // 메모리를 아끼기 위해 
    // 나머지 메소드는 prototype 이용
    Company.prototype.position = "선임";
    Company.prototype.team = "백엔드";
    Company.prototype.companyName = "에이엔드";

    return Company;
})();

function flyweight() {

  var member1 = new Company('김다솜');
  var member2 = new Company('유기정');
  var member3 = new Company('양찬진');
  var member4 = new Company('최선규');
  member4.team = "프론트엔드";
  
  console.log(member1);
  console.log(member2);
  console.log(member3);
  console.log(member4);
  
  console.log(member1.name);
  console.log(member1.position);
  console.log(member1.team);
  console.log(member1.companyName);
  console.log(member4.name);
  console.log(member4.position);
  console.log(member4.team);
  console.log(member4.companyName);

}

