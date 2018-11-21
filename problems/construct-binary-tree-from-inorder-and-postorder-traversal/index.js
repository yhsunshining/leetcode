/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  var helper = function(post_start, in_start, len) {
    let root = null;
    let i = 0;
    if (len) {
      let val = postorder[post_start + len - 1];
      root = new TreeNode(val);
      for (; i < len; i++) {
        if (inorder[i + in_start] == val) {
          break;
        }
      }
      root.left = helper(post_start, in_start, i);
      root.right = helper(post_start + i, in_start + i + 1, len - 1 - i);
    }
    return root;
  };
  return helper(0, 0, inorder.length);
};
