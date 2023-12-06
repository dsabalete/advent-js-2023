const maxDistance = require('./index.js')

describe('maxDistance', () => {
  it('should return 2', () => {
    expect(maxDistance('>>*<')).toEqual(2)
  })

  it('should return 2 too', () => {
    expect(maxDistance('<<<>')).toEqual(2)
  })

  it('should return 5', () => {
    expect(maxDistance('>***>')).toEqual(5)
  })
})