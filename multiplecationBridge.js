var Multiplecation = function (output) {
    this.output = output;

    this.multipleOne = function () { 
        this.output.one(); 
    }
    this.multipleTwo = function () { 
        this.output.two(); 
    }
    this.multipleThree = function () { 
        this.output.three(); 
    }
    this.multipleFour = function () { 
        this.output.four(); 
    }
};

var Square = function (output) {
    this.output = output;

    this.squareOne = function () { 
        this.output.one(); 
    }
    this.squareTwo = function () { 
        this.output.two(); 
    }
    this.squareThree = function () { 
        this.output.three(); 
    }
    this.squareFour = function () { 
        this.output.four(); 
    }
};

// output devices

var MultiplecationResult = function () {
    this.one = function () { 
        console.log("1단은!"); 
        for(let i=1; i<10; i++){
            console.log("1 x "+i+" = "+1*i);
        }
    }
    this.two = function () { 
        console.log("2단은!"); 
        for(let i=1; i<10; i++){
            console.log("2 x "+i+" = "+2*i);
        }
    }
    this.three = function () { 
        console.log("3단은!"); 
        for(let i=1; i<10; i++){
            console.log("3 x "+i+" = "+3*i);
        }
    }
    this.four = function () { 
        console.log("4단은!"); 
        for(let i=1; i<10; i++){
            console.log("4 x "+i+" = "+4*i);
        }
    }
};

var SquareResult = function () {
    this.one = function () { 
        console.log("1의 제곱은!"); 
        console.log("result = "+1*1); 
    }
    this.two = function () { 
        console.log("2의 제곱은!"); 
        console.log("result = "+2*2); 
    }
    this.three = function () { 
        console.log("3의 제곱은!"); 
        console.log("result = "+3*3); 
    }
    this.four = function () { 
        console.log("4의 제곱은!"); 
        console.log("result = "+4*4); 
    }
};

function bridge() {

    // 인터페이스가 하나 있고,
    // 구현체인 임플이 2개 있는 에제로 바꿔보자..

    var multiplecationResult = new MultiplecationResult(); // 임플
    var squareResult = new SquareResult(); // 임플

    var multiplecationTable = new Multiplecation(multiplecationResult); // 인터페이스
    var squares = new Square(squareResult); // 인터페이스 

    multiplecationTable.multipleOne();
    multiplecationTable.multipleThree();
    multiplecationTable.multipleFour();

    squares.squareTwo();
    squares.squareThree();
    squares.squareFour();
}