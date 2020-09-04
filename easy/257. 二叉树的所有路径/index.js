/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return []

  let dfsPaths = []

  // dfs
  const dfs = (root, path) => {
    if (!root) return
    // 叶子节点
    if (!root.left && !root.right) {
      path += root.val
      dfsPaths.push(path)
    } else {
      path += root.val + "->"
      if (root.left) dfs(root.left, path)
      if (root.right) dfs(root.right, path)
    }
  }
  dfs(root, "")

  let nodeQueue = [root], bfsPath = [root.val.toString()], bfsPaths = []
  // bfs
  while (nodeQueue.length) {
    let curNode = nodeQueue.shift()
    let curPath = bfsPath.shift()
    if (!curNode.left && !curNode.right ) {
      bfsPaths.push(curPath)
    } else {
      if (curNode.left) {
        nodeQueue.push(curNode.left)
        bfsPath.push(curPath + "->" + curNode.left.val)
      }
      if (curNode.right) {
        nodeQueue.push(curNode.right)
        bfsPath.push(curPath + "->"+ curNode.right.val)
      }
    }
  }

  console.log(dfsPaths, bfsPaths)
};
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const root = new TreeNode(2)
root.right = new TreeNode(1)
root.left = new TreeNode(6)
root.left.left = new TreeNode(5)
root.left.left.left = new TreeNode(4)
root.left.left.left.left = new TreeNode(3)


binaryTreePaths(root)
