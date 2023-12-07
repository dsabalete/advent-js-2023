function drawGift(size, symbol) {
  let result = []
  let line = ''

  function drawLine(size, symbol, i) {
    const side = i > 1 ? symbol.repeat(i - 1) : ''
    const ending = i > 0 ? side + '#' : ''
    const isBorder = i === 0 || i === size - 1
    let front
    if (isBorder) {
      front = '#'.repeat(size)
    } else {
      front = '#' + symbol.repeat(size - 2) + '#'
    }
    return front + ending + '\n'
  }

  for (let i = 0; i < size; i++) {
    const space = Math.abs(size - i - 1)
    line = ' '.repeat(space) + drawLine(size, symbol, i)
    result.push(line)
  }
  for (let i = size - 2; i >= 0; i--) {
    result.push(drawLine(size, symbol, i))
  }
  return result.join('')
}

// console.log(drawGift(4, '+'))
// console.log(drawGift(5, '+'))
// console.log(drawGift(6, '+'))

module.exports = drawGift