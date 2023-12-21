const findBalancedSegment = require('./index')

describe('findBalancedSegment', () => {
  it('returns the longest segment', () => {
    expect(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])).toEqual([2, 5])
  })

  it('returns the longest segment', () => {
    expect(findBalancedSegment([1, 1, 0])).toEqual([1, 2])
  })

  it('returns an empty segment', () => {
    expect(findBalancedSegment([1, 1, 1])).toEqual([])
  })
})