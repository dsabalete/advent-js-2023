function compile(code) {
  let result = 0
  let marker = 0
  let conditional = true

  for (let i = 0; i < code.length; i++) {
    const char = code[i]
    if (char === '+' && conditional) {
      result += 1
    }
    if (char === '-' && conditional) {
      result -= 1
    }
    if (char === '*' && conditional) {
      result *= 2
    }
    if (char === '%') {
      marker = i
    }
    if (char === '<' && marker !== 0) {
      // calculate value between marker and i
      for (let j = marker; j < i; j++) {
        const char = code[j]
        if (char === '+') {
          result += 1
        }
        if (char === '-') {
          result -= 1
        }
        if (char === '*') {
          result *= 2
        }
      }
    }
    if (char === '¿') {
      conditional = result > 0
    }
    if (char === '?') {
      conditional = true
    }
  }

  return result
}

module.exports = compile