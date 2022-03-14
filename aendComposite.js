var Composite = function (name) {
    this.children = [];
    this.name = name;
}

Composite.prototype = {
    add: function (child) {
        this.children.push(child);
    },

    getChild: function (i) {
        return this.children[i];
    },

    hasChildren: function () {
        return this.children.length > 0;
    }
}

function traverse(indent, node) {
    console.log(Array(indent++).join("--") + node.name);

    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}

function aend() {
    var tree = new Composite("AEND 조직도");
    var left = new Composite("front-end")
    var mid = new Composite("back-end")
    var right = new Composite("app");
    var leftleft = new Composite("senior");
    var midleft = new Composite("senior-one")
    var midright = new Composite("senior-two")
    var rightleft = new Composite("IOS");
    var rightright = new Composite("ANDROID");
    var leftleftbottom = new Composite("junior")

    tree.add(left);
    tree.add(mid);
    tree.add(right);

    left.add(leftleft);

    mid.add(midleft);
    mid.add(midright);

    right.add(rightleft);
    right.add(rightright);

    leftleft.add(leftleftbottom);

    console.log(tree.hasChildren());

    traverse(1, tree);
}