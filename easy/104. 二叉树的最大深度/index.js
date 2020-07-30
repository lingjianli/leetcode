/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0
  // 只有一个节点
  if(!root.left && !root.right) return 1

  let left = maxDepth(root.left)
  let right = maxDepth(root.right)

  return Math.max([left, right]) + 1
};

var maxDepthByBfs = function(root) {
  if(root === null) return 0
  // 头节点进入队列
  let queue = [root], depth = 1
  while(queue.length > 0) {
    // 记录树第n层的节点数
    const len = queue.length
    for(let i = 0; i < len; i++) {
      // 从队头取出节点
      let tempNode = queue.shift()
      // 分别检查左右子树是否满足存在，存在则进队
      if(tempNode.left) queue.push(tempNode.left)
      if(tempNode.right) queue.push(tempNode.right)
    }
    if(queue.length) depth++
  }
  return depth
}
