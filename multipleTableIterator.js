//Iterator Pattern 예시 활용 

var MultipleTable = (function() {

    function MultipleTable(numList){
        this.numList = numList;
        this.index = 0;
    }

    MultipleTable.prototype.next = function(){
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

    return MultipleTable;
})();

var multipleTable = new MultipleTable([1,2,3,4,5,6,7,8,9]);

//다음 구구단으로 
multipleTable.next();