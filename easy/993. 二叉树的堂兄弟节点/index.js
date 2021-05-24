/**
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。
 * 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。
 * 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。
 * 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。
 */

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let xParent = null, xDepth = null, xFound = false;
  let yParent = null, yDepth = null, yFound = false;
  
  // 深度优先搜索
  const dfs = (node, depth, parent) => {
    if (!node) {
      return;
    }

    if (node.val === x) {
      [xParent, xDepth, xFound] = [parent, depth + 1, true];
    } else if (node.val === y) {
      [yParent, yDepth, yFound] = [parent, depth + 1, true];
    }

    if (xFound && yFound) {
      return;
    }

    dfs(node.left, depth + 1, node);
    
    if (xFound && yFound) {
      return;
    }
    dfs(node.right, depth + 1, node);

  };

  // dfs(root, 0, null);

  const bfs = (node, depth, parent) => {
    if (!node) {
      return;
    }

    if (node.val === x) {
      [xParent, xDepth, xFound] = [parent, depth + 1, true];
    } else if (node.val === y) {
      [yParent, yDepth, yFound] = [parent, depth + 1, true];
    }
  }

  const queue = [[root, 0]];

  bfs(root, 0, null);

  while (queue.length) {
    let [node, depth] = queue.shift();
    
    if (node.left) {
      queue.push([node.left, depth + 1]);
      bfs(node.left, depth + 1, node);
    }

    if (node.right) {
      queue.push([node.right, depth + 1]);
      bfs(node.right, depth + 1, node);
    }

    if (xFound && yFound) {
      break;
    }
  }

  return xFound && yFound && xDepth === yDepth && xParent !== yParent;
};
