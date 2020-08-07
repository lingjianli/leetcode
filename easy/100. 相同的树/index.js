/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 递归的方法
var isSameTree = function(p, q) {
  if(p === null && q === null) return true
  if(p === null || q === null) return false
  if(p.val !== q.val) return false
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
};

// 广度优先算法
var isSameTreeByBfs = function(q, p) {
  if(q === null && p === null) return true
  if(q === null || p === null) return false
  let qQueue = [q], pQueue = [p]
  while(qQueue.length && pQueue.length) {
    // 每层节点数量不相等，直接返回false
    let qLen = qQueue.length, pLen = pQueue.length
    if(qLen !== pLen) return false
    for(let i = 0; i < qLen; i++) {
      let qCurr = qQueue.shift(), pCurr = pQueue.shift()
      // 值不相等，直接返回false
      if(qCurr.val !== pCurr.val) return false

      if((qCurr.left === null) ^ (pCurr.left === null) ) return false
      if((qCurr.right === null) ^ (pCurr.right === null)) return false
      if(qCurr.left) qQueue.push(qCurr.left)
      if(qCurr.right) qQueue.push(qCurr.right)
      if(pCurr.left) pQueue.push(pCurr.left)
      if(pCurr.right) pQueue.push(pCurr.right)
    }
  }
  return true
}