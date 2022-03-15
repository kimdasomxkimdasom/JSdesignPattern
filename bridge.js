
// 제스쳐가 브릿지
// 마우스, 스크린, 오디오 구현체

// 브릿지의 한 예시로
// 자바에서 인터페이스(서비스) 와 임플(서비스임플) 개념과 똑

// 인터페이스 = 브릿지
// 임플 = 구현체 

// 애니멀 : 인터페이스 
// 캣 , 도그 
// 캣.eatFood - console.log (캣 츄르)
// 도그.eatFood - console.log (도그 츄르)

var Gestures = function (output) {
    this.output = output;

    this.tap = function () { 
        this.output.click(); 
    }
    this.swipe = function () { 
        this.output.move(); 
    }
    this.pan = function () { 
        this.output.drag(); 
    }
    this.pinch = function () { 
        this.output.zoom(); 
    }
};

var Mouse = function (output) {
    this.output = output;

    this.click = function () { 
        this.output.click(); 
    }
    this.move = function () { 
        this.output.move(); 
    }
    this.down = function () { 
        this.output.drag(); 
    }
    this.wheel = function () { 
        this.output.zoom(); 
    }
};

// output devices

var Screen = function () {
    this.click = function () { 
        console.log("Screen select"); 
    }
    this.move = function () { 
        console.log("Screen move"); 
    }
    this.drag = function () { 
        console.log("Screen drag"); 
    }
    this.zoom = function () { 
        console.log("Screen zoom in"); 
    }
};

var Audio = function () {
    this.click = function () { 
        console.log("Sound oink"); 
    }
    this.move = function () { 
        console.log("Sound waves"); 
    }
    this.drag = function () { 
        console.log("Sound screetch"); 
    }
    this.zoom = function () { 
        console.log("Sound volume up"); 
    }
};

function bridge() {

    var screen = new Screen();
    var audio = new Audio();

    var hand = new Gestures(screen);
    var mouse = new Mouse(audio);

    hand.tap();
    hand.swipe();
    hand.pinch();

    mouse.click();
    mouse.move();
    mouse.wheel();
}
