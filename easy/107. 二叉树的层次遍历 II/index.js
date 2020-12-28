/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return []
  // bfs
  let queue = [root], result = []

  while (queue.length) {
    let levelLen = queue.length, temp = []
    for (let i = 0; i < levelLen; i++) {
      const node = queue.shift()
      temp.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    temp.length && result.unshift(temp)
  }
  return result
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.right = new TreeNode(7)
root.right.left = new TreeNode(15)
levelOrderBottom(root)

