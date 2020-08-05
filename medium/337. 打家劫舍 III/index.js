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
var rob = function(root) {
  // 选中当前节点
  let g = new Map()
  // 不选中当前节点
  let f = new Map()

  let dfs = (node) => {
    if(node === null) {
      return
    }
    dfs(node.left)
    dfs(node.right)
    // 选中该节点时，最大权值
    g.set(node, node.val + (f.get(node.left) || 0) + (f.get(node.right) || 0))
    // 没选中该节点，最大权值
    f.set(node, Math.max(f.get(node.left) || 0, g.get(node.left) || 0) + Math.max(f.get(node.right) || 0, g.get(node.right) || 0))
  }
  dfs(root)
  console.log(g, f)
  return Math.max(f.get(root) || 0, g.get(root) || 0)
};