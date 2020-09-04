/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
// var canVisitAllRooms = function(rooms) {
//   // 队列 BFS
//   let visited = new Set(), queue = [];

//   visited.add(0);
//   queue.push(0);

//   while (queue.length) {
//     const nextRoom = rooms[queue.shift()];
//     for (let i = 0; i < nextRoom.length; i++) {
//       let key =nextRoom[i]
//       if (!visited.has(key)) {
//         visited.add(key)
//         queue.push(key)
//       }
//     }
//   }

  
//   return visited.size === rooms.length
// };

// 递归 dfs深度优先
var canVisitAllRooms = function(rooms) {
  let visited = new Set();

  const dfs = curRoom => {
    visited.add(curRoom);
    const nextRoom = rooms[curRoom]
    for (let i = 0; i < nextRoom.length; i++) {
      if (!visited.has(nextRoom[i])) {
        dfs(nextRoom[i])
      }
    }
  }

  dfs(0)
  
  return visited.size === rooms.length
};

// var canVisitAllRooms = function(rooms) {
//   let visited = [], keys = [];

//   for (let i = 0, room = 0; i < rooms.length; i++) {
//     if (visited.includes(room)) continue
//     if (i !== 0 && !keys.includes(room)) break;

//     visited.push(room)
    
//     let index = rooms[room].indexOf(0)
//     index !== -1  && rooms[room].splice(index, 1)
//     let curRoomKey = rooms[room]
//     curRoomKey.length !== 0 && (keys = Array.from(new Set([...keys, ...curRoomKey])))
//     if ( i >= keys.length) break;
//     room = keys[i]
//   }

//   return visited.length === rooms.length
// };

console.log(canVisitAllRooms([[1],[2],[3],[]]))
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))
