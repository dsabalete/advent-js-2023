function drawGift(size, symbol) {
  let result = []
  let line = ''
  for (let i = 0; i < size; i++) {
    const space = Math.abs(size - i - 1)
    const side = i > 1 ? symbol.repeat(i - 1) : ''
    const ending = i > 0 ? side + '#' : ''
    if (i === 0 || i === size - 1) {
      line = ' '.repeat(space) + '#'.repeat(size) + ending + '\n'
    } else {
      const front = '#' + symbol.repeat(size - 2) + '#'
      line = ' '.repeat(space) + front + ending + '\n'
    }
    result.push(line)
  }
  for (let i = size - 2; i >= 0; i--) {
    const side = i > 1 ? symbol.repeat(i - 1) : ''
    const ending = i > 0 ? side + '#' : ''

    if (i === 0 || i === size - 1) {
      line = '#'.repeat(size) + ending + '\n'
    } else {
      line = '#' + symbol.repeat(size - 2) + '#' + ending + '\n'
    }

    result.push(line)
  }

  return result.join('')
}

// console.log(drawGift(4, '+'))
// console.log(drawGift(5, '+'))
// console.log(drawGift(6, '+'))

module.exports = drawGift