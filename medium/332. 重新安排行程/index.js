/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  let result = ["JFK"], map = {};
  for (const ticket of tickets) {
    const [from, to] = ticket;
    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }

  for (const city in map) {
    map[city].sort();
  }

  const dfs = (city, used) => {
    if (used === tickets.length) return true;

    const nextCities = map[city];
    if (!nextCities || nextCities.length === 0) return false;

    for (let i = 0; i < nextCities.length; i++) {
      const next = nextCities[i];
      nextCities.splice(i, 1);
      result.push(next);
      if (dfs(next, used + 1)) {
        return true;
      } else {
        nextCities.splice(i, 0, next);
        result.pop();
      }
    }
  }

  dfs("JFK", 0)
  console.log(map, result)
  // while (pointer !== undefined) {
  //   let currentTicket = tickets[pointer],
  //     tempHead = currentTicket[0],
  //     tempTail = currentTicket[1]
  //   head[tempHead].splice(head[tempHead].indexOf(pointer), 1)
  //   tail[tempTail].splice(tail[tempTail].indexOf(pointer), 1)
  //   result.push(tempTail)
  //   pointer = head[tempTail] && head[tempTail][0]
  // }
  // console.log(result, head, tail)
  return result
};

findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]])