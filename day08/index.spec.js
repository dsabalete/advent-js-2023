const organizeGifts = require('./index.js')

describe('', () => {
  it('should organize gifts', () => {
    expect(organizeGifts('76a11b')).toEqual('[a]{a}{a}(aaaaaa){b}(b)')
  })
})
