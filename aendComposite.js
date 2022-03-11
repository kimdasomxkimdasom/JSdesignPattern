var Test = function (name) {
    this.children = [];
    this.name = name;
}

Test.prototype = {
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

function aend() {
    var tree = new Test("AEND 조직도");
    var left = new Test("front-end")
    var mid = new Test("back-end")
    var right = new Test("app");
    var leftleft = new Test("senior");
    var midleft = new Test("senior-one")
    var midright = new Test("senior-two")
    var rightleft = new Test("IOS");
    var rightright = new Test("ANDROID");
    var leftleftbottom = new Test("junior")

    tree.add(left);
    tree.add(right);
    tree.remove(right);  // note: remove
    tree.add(mid);
    tree.add(right);

    left.add(leftleft);

    mid.add(midleft);
    mid.add(midright);

    right.add(rightleft);
    right.add(rightright);

    leftleft.add(leftleftbottom);

    traverse(1, tree);
}