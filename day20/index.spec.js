const distributeGifts = require('./index')

describe('distributeGifts', () => {
  it('should return an array of arrays when given an array of arrays', () => {
    const input = [
      [4, 5, 1],
      [6, null, 3],
      [8, null, 4]
    ]
    const output = [
      [5, 3, 3],
      [6, 5, 3],
      [7, 6, 4]
    ]
    expect(distributeGifts(input)).toEqual(output)
  })

  it('should return an array of arrays when given an array of arrays', () => {
    const input = [
      [4, 5],
      [6, null]
    ]
    const output = [
      [5, 5],
      [5, 6]
    ]
    expect(distributeGifts(input)).toEqual(output)
  })
})
