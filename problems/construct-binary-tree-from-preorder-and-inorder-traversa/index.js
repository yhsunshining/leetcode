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
 * 180ms
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

// optmize  72ms 91%
// var buildTree = function(preorder, inorder) {
//   var helper = function(pre_start, in_start, len) {
//     let root = null;
//     let i = 0;
//     if (len) {
//       let val = preorder[pre_start];
//       root = new TreeNode(val);
//       for (; i < len; i++) {
//         if (inorder[i + in_start] == val) {
//           break;
//         }
//       }
//       root.left = helper(pre_start + 1, in_start, i);
//       root.right = helper(pre_start + i + 1, in_start + i + 1, len - 1 - i);
//     }
//     return root;
//   };
//   return helper(0, 0, preorder.length);
// };
