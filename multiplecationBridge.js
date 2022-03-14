var Mutiplication = function (output) {
    this.output = output;

    this.mutipleOne = function () { 
        this.output.one(); 
    }
    this.mutipleTwo = function () { 
        this.output.two(); 
    }
    this.mutipleThree = function () { 
        this.output.three(); 
    }
    this.mutipleFour = function () { 
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

var MutiplicaionResult = function () {
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

    var mutiplicaionResult = new MutiplicaionResult();
    var squareResult = new SquareResult();

    var mutiplicationTable = new Mutiplication(mutiplicaionResult);
    var squares = new Square(squareResult);

    mutiplicationTable.mutipleOne();
    mutiplicationTable.mutipleThree();
    mutiplicationTable.mutipleFour();

    squares.squareTwo();
    squares.squareThree();
    squares.squareFour();
}