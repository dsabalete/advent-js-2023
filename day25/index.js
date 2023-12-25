function travelDistance(map) {
  const rows = map.trim().split('\n')
  const width = rows[0].length
  const height = rows.length
  let result = 0

  const findLocation = (target) => {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (rows[y][x] === target) {
          return [x, y]
        }
      }
    }
    return null
  }

  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1)
  }

  let currLocation = findLocation('S')

  for (let i = 1; i <= 9; i++) {
    const nextLocation = findLocation(i.toString())
    if (nextLocation) {
      const [currX, currY] = currLocation
      const [nextX, nextY] = nextLocation
      const distance = calculateDistance(currX, currY, nextX, nextY)
      result += distance
      currLocation = nextLocation
    } else {
      break
    }
  }

  return result
}

module.exports = travelDistance