var MutipleTable = (function() {
    function MutipleTable(numList){
        this.numList = numList;
        this.index = 0;
    }

MutipleTable.prototype.next = function(){

        var index = this.numList[this.index++]

        if(index === undefined){
            console.log("구구단 끝! !! !");
        }else{
    
            console.log(index + "단 은!");
            for(var i=1; i<10; i++){
                console.log(index+" X "+i+" = "+index*i);
            }

        }
    }
    MutipleTable.prototype.done = function() {
        return this.numList.length === this.index;
      };

    return MutipleTable;
})();

var mutipleTable = new MutipleTable([1,2,3,4,5,6,7,8,9]);

//다음 으로!
//mutipleTable.next();

//한번에 싹-
while (!mutipleTable.done()) {
    mutipleTable.next();
}