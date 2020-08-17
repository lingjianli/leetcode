/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function height(root) {
      if(root === null) return 0
      let leftHeight = height(root.left)
      let rightHeight = height(root.right)

      if(leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
        return -1
      } else {
        return Math.max(leftHeight, rightHeight) + 1
      }
    }

    return height >= 0
};