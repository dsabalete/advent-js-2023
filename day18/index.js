function drawClock(time) {
  const first = Number(time.charAt(0))
  const second = Number(time.charAt(1))
  const third = Number(time.charAt(3))
  const fourth = Number(time.charAt(4))

  const zero = [
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
  ]

  const one = [
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
  ]

  const two = [
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
    ['*', ' ', ' '],
    ['*', ' ', ' '],
    ['*', '*', '*'],
  ]

  const three = [
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
  ]

  const four = [
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
  ]

  const five = [
    ['*', '*', '*'],
    ['*', ' ', ' '],
    ['*', ' ', ' '],
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
  ]

  const six = [
    ['*', '*', '*'],
    ['*', ' ', ' '],
    ['*', ' ', ' '],
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
  ]

  const seven = [
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
  ]

  const eight = [
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
  ]

  const nine = [
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
  ]

  function getDigit(num) {
    switch (num) {
      case 0:
        return zero
      case 1:
        return one
      case 2:
        return two
      case 3:
        return three
      case 4:
        return four
      case 5:
        return five
      case 6:
        return six
      case 7:
        return seven
      case 8:
        return eight
      case 9:
        return nine
    }
  }

  const display = Array(7).fill(null).map(() => Array(17).fill(' '))
  display[2][8] = '*'
  display[4][8] = '*'

  for (let i = 0; i < display.length; i++) {
    for (let j = 0; j < 3; j++) {
      display[i][j] = getDigit(first)[i][j]
      display[i][j + 4] = getDigit(second)[i][j]
      display[i][j + 10] = getDigit(third)[i][j]
      display[i][j + 14] = getDigit(fourth)[i][j]
    }
  }

  return display
}

// drawClock('01:30')

module.exports = drawClock
