function findBalancedSegment(message) {
  let maxLength = 0
  let segment = []

  for (let i = 0; i < message.length; i++) {
    let zeros = 0
    let ones = 0

    for (let j = i; j < message.length; j++) {
      if (message[j] === 1) {
        ones++
      } else {
        zeros++
      }

      if (zeros === ones && j - i + 1 > maxLength) {
        maxLength = j - i + 1
        segment = [i, j]
      }
    }
  }

  return segment
}

// findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])

module.exports = findBalancedSegment