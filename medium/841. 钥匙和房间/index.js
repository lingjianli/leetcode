/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  let visited = [0], map = {};
  for (let index = 0; index < rooms.length; index++) {
    if (map[index] === undefined) map[index] = []
  }
  return true
};

console.log(canVisitAllRooms([[2],[],[1]]))