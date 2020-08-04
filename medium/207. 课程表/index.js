/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 广度优先搜索
var canFinish = function(numCourses, prerequisites) {
  // 初始化每个节点的入度值为0
  let inDegree = new Array(numCourses).fill(0)
  // 邻接矩阵
  let map = {}
  // 遍历图
  for(let i = 0; i < prerequisites.length; i++) {
    // 求出每个节点实际的入度值
    inDegree[prerequisites[i][0]]++
    // 求出每个节点的邻接矩阵
    if(map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0])
    } else { // 当前课程不存在于邻接表中
      map[prerequisites[i][1]] = [prerequisites[i][0]]
    }
  }
  let queue = []

  // 将所有入度为0的节点
  for(let i = 0; i < inDegree.length; i++) {
    if(inDegree[i] === 0) queue.push(i)
  }
  let visited = 0
  while(queue.length) {
    // 取出当前节点
    const current = queue.shift()
    visited++
    // 当前节点的邻接数组
    const currentMap = map[current]
    if(currentMap && currentMap.length) {
      for(let j = 0; j < currentMap.length; j++) {
        inDegree[currentMap[j]]-- // 对取出的节点相关的入度进行删除
        if(inDegree[currentMap[j]] === 0) { // 入度为 0 时，进入队列
          queue.push(currentMap[j])
        }
      }
    }

  }
  return visited === numCourses
};

// console.log(canFinish(2, [[1, 0],[0, 1]]))
// console.log(canFinish(6, [[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]]))
console.log(canFinish(5, [[2, 1], [2, 0], [3, 1], [1, 3], [4, 2], [4, 3]]))