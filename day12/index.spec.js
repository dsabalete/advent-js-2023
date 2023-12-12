const checkIsValidCopy = require('./index.js')

describe('checkIsValidCopy', () => {
  it('should return true if the copy is valid', () => {
    expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')).toBe(true)
    expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s')).toBe(true)
    expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toBe(true)
    expect(checkIsValidCopy('3 #egalos', '3 .+:# #:')).toBe(true)
  })

  it('should return false if the copy is not valid', () => {
    expect(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')).toBe(false)
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false)
  })
})
