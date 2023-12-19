function revealSabotage(store) {
  const rows = store.length
  const cols = store[0].length

  const matrix = []
  for (let i = 0; i < rows; i++) {
    matrix.push(new Array(cols).fill(' '))
  }

  const neighbors = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ]
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (store[i][j] === '*') {
        matrix[i][j] = '*'
        continue
      }

      let count = 0

      for (const [dx, dy] of neighbors) {
        const x = i + dx
        const y = j + dy
        const isValid = x >= 0 && x < rows && y >= 0 && y < cols
        if (isValid && store[x][y] === '*') {
          count++
        }
      }

      matrix[i][j] = count ? count.toString() : ' '
    }
  }

  return matrix;
}

// console.log(revealSabotage(store))

module.exports = revealSabotage