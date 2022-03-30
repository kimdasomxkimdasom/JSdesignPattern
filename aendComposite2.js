//Composite Pattern 예시 활용 (2)

//제로쵸 예제 참고 

  // 멤버
  var Member = (function() {
      function Member(name) {
        this.name = name; // 멤버 이름 
      }
      Member.prototype.getName = function() {
        return this.name;
      };
      Member.prototype.getNumber = function() {
        return 1; 
      }
      return Member;
  })();  

  // 팀
  var Team = (function() {
    function Team(name) {
      this.name = name; // 팀 이름
      this.members = []; // 팀에 멤버를 담는 배열 
    }
    Team.prototype.getName = function() {
      return this.name;
    };
    Team.prototype.getNumber = function() { // 멤버의 수
      var sum = 0;
      this.members.forEach(function(member) {
        sum += member.getNumber();
      });
      return sum;
    };
    Team.prototype.addMember = function(member) { 
      this.members.push(member); // 팀에 멤버 추가 
      return this;
    };
    return Team;
  })();

  // 회사
  var Company = (function() {
    function Company(name) {
      this.name = name; // 회사 이름
      this.teams= []; // 회사에 팀을 담는 배열 
    }
    Company.prototype.getName = function() {
      return this.name;
    };
    Company.prototype.getNumber = function() { // 팀의 수 
      var sum = 0;
      this.teams.forEach(function(team) {
        sum += team.getNumber();
      });
      return sum;
    }
    Company.prototype.addTeam = function(team) {
      this.teams.push(team); // 회사에 팀 추가 
      return this;
    };
    return Company;
  })();

  var member1 = new Member('김다솜');
  var member2 = new Member('유기정');
  var member3 = new Member('양찬진');
  var member4 = new Member('최선규');

  var team1 = new Team('백엔드');
  var team2 = new Team('프론트엔드');

  var company = new Company('에이엔드');

  team1.addMember(member1).addMember(member2).addMember(member3);
  team2.addMember(member4);
  company.addTeam(team1).addTeam(team2);
