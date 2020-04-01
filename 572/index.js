function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/* 
const S = new TreeNode(3);
S.left = new TreeNode(4);
S.right = new TreeNode(5);
S.left.left = new TreeNode(1);
S.left.right = new TreeNode(2);
S.left.left.left = new TreeNode(0);

const T = new TreeNode(4);
T.left = new TreeNode(1);
T.right = new TreeNode(2);
*/

/*  
const S = new TreeNode(1);
S.left = new TreeNode(1);

const T = new TreeNode(1); 
*/

const S = new TreeNode(3);
S.left = new TreeNode(4);
S.right = new TreeNode(5);
S.left.left = new TreeNode(1);
S.left.right = new TreeNode(2);

const T = new TreeNode(3);
T.left = new TreeNode(1);
T.right = new TreeNode(2);

function isSame(s, t) {
    if (s === null && t === null) return true;
    if (s === null || t === null) return false;
    if(s.val === t.val) return isSame(s.left, t.left) && isSame(s.right, t.right);
    return false;
}

var isSubtree = function(s, t) {
  let result = false;
  
  if (s === null && t === null) return true;
  if (s === null || t === null) return false;

  if (isSame(s, t)) {
    result = isSubtree(s.left, t.left) && isSubtree(s.right, t.right);
  }

  if (!result) {
    result = isSubtree(s.left, t) || isSubtree(s.right, t);
  }

  return result;
};

window.onload = function() {
  console.log(isSubtree(S, T));
};
