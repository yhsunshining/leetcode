/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let i = 0,
    len = preorder.length,
    root = null;

  if (len) {
    let val = preorder[0];
    root = new TreeNode(val);
    for (; i < len; i++) {
      if (inorder[i] == val) {
        break;
      }
    }
    root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
    root.right = buildTree(
      preorder.slice(i + 1, len),
      inorder.slice(i + 1, len)
    );
  }
  return root;
};
