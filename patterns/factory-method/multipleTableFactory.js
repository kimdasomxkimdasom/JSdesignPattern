var Factory = function () {

    this.create = function (type) {
        var num;

        if (type === "1단") {
            num = new one();
        } else if (type === "2단") {
            num = new two();
        } else if (type === "3단") {
            num = new three();
        } else if (type === "4단") {
            num = new four();
        } else if (type === "5단") {
            num = new five();
        } else if (type === "6단") {
            num = new six();
        } else if (type === "7단") {
            num = new seven();
        } else if (type === "8단") {
            num = new eight();
        } else if (type === "9단") {
            num = new nine();
        } else {
            console.error("삐빅! 에러입니다!");
        }

        console.log(num);
        num.type = type;
        console.log(type);

        num.say = function () {
            console.log("구구단을 외자! 구구단을 외자!")
            console.log(this.type + " 은!");

            for(var i=1; i<10; i++){
                console.log(this.number + " x " + i + " = " + this.number * i);
            }
        
        }

        console.log(num);
        return num;
    }
}

var one = function () {
    this.number = 1;
};

var two = function () {
    this.number = 2;
};

var three = function () {
    this.number = 3;
};

var four = function () {
    this.number = 4;
};

var five = function () {
    this.number = 5;
};

//Factory Pattern 예시 활용 

var six = function () {
    this.number = 6;
};

var seven = function () {
    this.number = 7;
};

var eight = function () {
    this.number = 8;
};

var nine = function () {
    this.number = 9;
};


function mutipleFactory() {

    var result = [];
    var factory = new Factory();

    result.push(factory.create("2단"));
    console.log(result);
    result.push(factory.create("4단"));
    result.push(factory.create("6단"));
    result.push(factory.create("8단"));
    console.log(result);

    for (var i = 0, len = result.length; i < len; i++) {
        result[i].say();
    }
    
	//var err_result = [];
    
    //err_result .push(factory.create("10단")); //에러 발생
}