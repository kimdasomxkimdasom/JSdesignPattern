
//Iterator Pattern 예시 활용 

// 내부가 리스트, 큐, 트리 .. 든 뭘로 저장하든
// hasNext ,  getNext 가 있으면
// 내부가 뭐가 됐든 다 순회할 수 있는게 이터레이터 패턴의 장점

// 자판기로 예시를 들면
// 자판기에 유통기한 순인지, 역순인지는 모르지만
// 버튼을 누르면 음료수가 하나씩 나오는데 
// 안에 어떻게 되어있는지는 모르겠고(중요하지 않고) 
// 하나씩 하나씩 줘~ 

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

