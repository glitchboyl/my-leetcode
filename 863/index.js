function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

TreeNode.prototype.insertLeft = function (val) {
  if (!this.left || typeof this.left.val !== "number") {
    this.left = new TreeNode(val);
  } else {
    this.left.val = val;
  }
};

TreeNode.prototype.insertRight = function (val) {
  if (!this.right || typeof this.right.val !== "number") {
    this.right = new TreeNode(val);
  } else {
    this.right.val = val;
  }
};

// var R = new TreeNode(3);
// R.insertLeft(5);
// R.insertRight(1);
// R.left.insertLeft(6);
// R.left.insertRight(2);
// R.left.right.insertLeft(7);
// R.left.right.insertRight(4);
// R.right.insertLeft(0);
// R.right.insertRight(8);

// var R = new TreeNode(0);
// R.insertLeft(1);
// R.left.insertLeft(3);
// R.left.insertRight(2);

var R = new TreeNode(0);
R.insertLeft(1);
R.insertRight(2);
R.left.insertRight(3);
R.left.right.insertLeft(4);
R.right.insertRight(5);

var distanceK = function (root, target, K) {
  var findTarget = false;
  var result = [];
  var paths = [];

  //  先 DFS 获取到目标节点.
  function findTargetNode(_root) {
    if (!!findTarget || !_root || typeof _root.val !== "number") return;
    if (_root.val === target.val) findTarget = true;
    if (!findTarget) {
      if (_root.left && typeof _root.left.val === "number") {
        _root.left.parent = _root;
        findTargetNode(_root.left);
      }
      if (_root.right && typeof _root.right.val === "number") {
        _root.right.parent = _root;
        findTargetNode(_root.right);
      }
    }
  }

  //  向下 DFS. 获取到 node 的距离为 k 的所有节点.
  function getKFromNode(node, k) {
    if (!node || typeof node.val !== "number") return;
    if (k > 0) {
      paths.push(node);
      getKFromNode(node.left, k - 1);
      getKFromNode(node.right, k - 1);
    } else {
      if (!!node && !paths.includes(node) && typeof node.val === "number")
        result.push(node.val);
    }
  }

  findTargetNode(root);

  var _K = K;
  var targetNode = target;
  while (_K > -1) {
    getKFromNode(targetNode, _K);
    paths.push(targetNode);
    _K--;
    if (!!targetNode.parent) {
      targetNode = targetNode.parent;
    } else {
      _K = -1;
    }
  }

  return result;
};

window.onload = function () {
  console.log(distanceK(R, R.left.right, 3));
};
