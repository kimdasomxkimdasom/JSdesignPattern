var datastore = {
    process: function () {
        this.start();
        this.progress();
        this.end();
        return true;
    }
};

function inherit(proto) {
    var fun = function () { };
    fun.prototype = proto;
    return new fun();
}

function template() {
    var multipleTable = inherit(datastore);

    // implement template steps
    multipleTable.start = function () {
        console.log("구구단 : 시작");
    };

    multipleTable.progress = function () {
        console.log("구구단 : 진행 중");
        for(let x=1; x<10; x++){
                console.log(x+"단 은!")
            for(let y=1; y<10; y++){
                console.log(x+" x "+y+" = "+x*y);
            }
        }
    };

    multipleTable.end = function () {
        console.log("구구단 : 끝");
    };

    multipleTable.process();
}
