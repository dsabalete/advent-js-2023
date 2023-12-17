const optimizeIntervals = require('./index')

describe('optimizeIntervals', () => {
  it('returns an array of optimized ranges', () => {
    const actual = optimizeIntervals([
      [5, 8],
      [2, 7],
      [3, 4]
    ]) // [[2, 8]]
    expect(actual).toEqual([[2, 8]])
  })

  it('returns an array of optimized ranges', () => {
    const actual = optimizeIntervals([
      [1, 3],
      [8, 10],
      [2, 6]
    ]) // [[1, 6], [8, 10]]
    expect(actual).toEqual([[1, 6], [8, 10]])
  })

  it('returns an array of optimized ranges', () => {
    const actual = optimizeIntervals([
      [3, 4],
      [1, 2],
      [5, 6]
    ]) // [[1, 2], [3, 4], [5, 6]]
    expect(actual).toEqual([[1, 2], [3, 4], [5, 6]])
  })

})
