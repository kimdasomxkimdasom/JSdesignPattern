var Node = function (name) {
    this.children = [];
    this.name = name;
}

Node.prototype = {
    add: function (child) {
        this.children.push(child);
    },

    remove: function (child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    },

    getChild: function (i) {
        return this.children[i];
    },

    hasChildren: function () {
        return this.children.length > 0;
    }
}

// recursively traverse a (sub)tree

function traverse(indent, node) {
    console.log(Array(indent++).join("--") + node.name);

    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}

function composite() {
    var tree = new Node("구구단을 외자! 구구단을 외자!");
    var one = new Node("1단")
    var two = new Node("2단");
    var three = new Node("3단");
    var four = new Node("4단");
    var five = new Node("5단");
    var six = new Node("6단");
    var seven = new Node("7단");
    var eight = new Node("8단");
    var nine = new Node("9단");


    //var oneResult = new Node("1 X 1 = 1");
    
    var oneResult = "";
    for(var i=1; i<10; i++){
        //console.log(i);
        oneResult = new Node("1 X "+i+" = "+1*i);
    }

    tree.add(one);
    tree.add(two);
    tree.remove(two);  // note: remove
    tree.add(two);
    tree.add(three);
    tree.add(four);
    tree.add(five);
    tree.add(six);
    tree.add(seven);
    tree.add(eight);
    tree.add(nine);
    
    one.add(oneResult);

    traverse(1, tree);
}