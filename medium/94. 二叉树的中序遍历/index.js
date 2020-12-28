/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let result = []
  const inorder = root => {
    if (!root) return

    if (root.left) inorder(root.left)
    result.push(root.val)
    if (root.right) inorder(root.right)
  }

  return result
};