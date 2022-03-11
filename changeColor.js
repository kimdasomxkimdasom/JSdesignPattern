var ChacngeColor = function () {
    
    this.createColor = function (type) {
        var color;

        if (type === "red") {
            color = new Red();
        } else if (type === "blue") {
            color = new Blue();
        } else if (type === "orange") {
            color = new Orage();
        } else if (type === "yellow") {
            color = new Yellow();
        } else {
            console.error("등록되어 있지 않은 색상입니다. 삐빅. 에러.");
        }

        color.type = type;

        color.change = function () {
            console.log(this.type + " 입력 받음. " + this.color + " 으로 변경 완료.");
        }

        return color;
    }
}

var Red = function () {
    this.color = "빨간색";
};

var Blue = function () {
    this.color = "파란색";
};

var Orage = function () {
    this.color = "주황색";
};

var Yellow = function () {
    this.color = "노란색";
};

function test() {

    var colors = [];
    var changeColor = new ChacngeColor();

    colors.push(changeColor.createColor("red"));
    colors.push(changeColor.createColor("blue"));
    colors.push(changeColor.createColor("orange"));
    colors.push(changeColor.createColor("yellow"));
    //colors.push(changeColor.createColor("ㅋㅋ"));
    
    for (var i = 0, len = colors.length; i < len; i++) {
        colors[i].change();
    }
}