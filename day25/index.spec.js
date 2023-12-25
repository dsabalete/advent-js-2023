const travelDistance = require('./index')

describe('travelDistance', () => {
  it('should return 12', () => {
    const map = `.....1....
..S.......
..........
....3.....
......2...`
    expect(travelDistance(map)).toEqual(12)
  })

  it('should return 0', () => {
    const map2 = `..S.1...`
    expect(travelDistance(map2)).toEqual(2)
  })
})
