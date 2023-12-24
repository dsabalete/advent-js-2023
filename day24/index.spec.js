const getStaircasePaths = require('./index')

describe('getStaircasePaths', () => {
  it('returns jump combination for 2 steps and maxStep 1', () => {
    expect(getStaircasePaths(2, 1)).toEqual([[1, 1]])
  })

  it('returns jump combination for 3 steps and maxStep 3', () => {
    expect(getStaircasePaths(3, 3)).toEqual([[1, 1, 1], [1, 2], [2, 1], [3]])
  })

  it('returns jump combination for 5 steps and maxStep 1', () => {
    expect(getStaircasePaths(5, 1)).toEqual([[1, 1, 1, 1, 1]])
  })

  it('returns jump combination for 5 steps and maxStep 2', () => {
    expect(getStaircasePaths(5, 2)).toEqual([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 2],
      [1, 1, 2, 1],
      [1, 2, 1, 1],
      [1, 2, 2],
      [2, 1, 1, 1],
      [2, 1, 2],
      [2, 2, 1]
    ])
  })

})