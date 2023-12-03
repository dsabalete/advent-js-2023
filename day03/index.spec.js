const findNaughtyStep = require('./index.js')

describe('findNaughtyStep', () => {
  it('should return the added naughty step', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toEqual('e')
  })

  it('should return the missing naughty step', () => {
    expect(findNaughtyStep('stepfor','stepor')).toEqual('f')
  })

  it('should return the an empty string', () => {
    expect(findNaughtyStep('abcde','abcde')).toEqual('')
  })
})
