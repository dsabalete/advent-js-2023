function distributeGifts(weights) {
  const rows = weights.length
  const cols = weights[0].length

  const matrix = []
  for (let i = 0; i < rows; i++) {
    matrix.push(new Array(cols).fill(0))
  }

  const neighbors = [[-1, 0], [0, -1], [0, 1], [1, 0]]
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let numNeighbors = (weights[i][j] !== null) ? 1 : 0
      let sum = weights[i][j]

      for (const [dx, dy] of neighbors) {
        const x = i + dx
        const y = j + dy
        if (x >= 0 && x < rows && y >= 0 && y < cols) {
          if (weights[x][y] !== null) {
            numNeighbors++
            sum += weights[x][y]
          }
        }
      }
      matrix[i][j] = Math.round(sum / numNeighbors)
    }
  }
  return matrix;
}

// const input = [
//   [4, 5],
//   [6, null]
// ]
// console.log(distributeGifts(input))
// [
//   [5, 5],
//   [5, 6]
// ]


module.exports = distributeGifts