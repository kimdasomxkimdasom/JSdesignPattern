var Member = (function() {
    function Member(name) {
      this.name = name;
    }
    Member.prototype.getName = function() {
      return this.name;
    };
    Member.prototype.getNumber = function() {
      return 1; 
    }
    return Member;
  })();

  var Team = (function() {
    function Team(name) {
      this.name = name;
      this.members = [];
    }
    Team.prototype.getName = function() {
      return this.name;
    };
    Team.prototype.getNumber = function() {
      var sum = 0;
      this.members.forEach(function(member) {
        sum += member.getNumber();
      });
      return sum;
    };
    Team.prototype.addMember = function(member) {
      this.members.push(member);
      return this;
    };
    return Team;
  })();

  var Company = (function() {
    function Company(name) {
      this.name = name;
      this.teams= [];
    }
    Company.prototype.getName = function() {
      return this.name;
    };
    Company.prototype.getNumber = function() {
      var sum = 0;
      this.teams.forEach(function(team) {
        sum += team.getNumber();
      });
      return sum;
    }
    Company.prototype.addTeam = function(team) {
      this.teams.push(team);
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
