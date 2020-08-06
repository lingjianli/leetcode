/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  // 前序遍历
  const preOrder = (root, list) => {
    if(root === null) return
    list.push(root)
    preOrder(root.left, list)
    preOrder(root.right, list)
  }
  let orderList = []
  preOrder(root, orderList)
  for(let i = 1; i < orderList.length; i++) {
    const prev = orderList[i - 1], curr = orderList[i];
    prev.left = null
    prev.right = curr
  }
};