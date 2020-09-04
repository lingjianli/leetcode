/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0
  let queue = [root], depth = 0

  // bfs
  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (!node.left && !node.right) {
        return depth + 1
      } else {
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
    depth++
  }
  return 0
};

var minDepth = function(root) {
  // dfs
  if (!root) return 0
  if (!root.left && !root.right) return 1
  let depth = Infinity
  if (root.left) {
    depth = Math.min(minDepth(root.left), depth)
  }

  if (root.right) {
    depth = Math.min(minDepth(root.right), depth)
  }
  
  return depth + 1
};