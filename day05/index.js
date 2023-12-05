function cyberReindeer(road, time) {
  let result = [road]
  let pos = road.indexOf('S')
  const closed = road.replace(/S/, '.')
  const open = closed.replace(/\|/g, '*')

  for (let i = 1; i < time; i++) {
    road = i < 5 ? closed : open

    if (road[pos + 1] !== '|') {
        if (i < 5) {
            road = closed.slice(0, pos + 1) + 'S' + closed.slice(pos + 2)
        } else {
            road = open.slice(0, pos + 1) + 'S' + open.slice(pos + 2)
        }
        pos++
    } else {
        road = road.slice(0, pos) + 'S' + road.slice(pos + 1)
    }

    result.push(road)
  }

  return result
}

// cyberReindeer('S..|...|..', 10)

module.exports = cyberReindeer
