const revealSabotage = require('./index')

describe('revealSabotage', () => {
  it('should return a matrix with num of saboted toys', () => {
    const store = [
      ['*', ' ', ' ', ' '],
      [' ', ' ', '*', ' '],
      [' ', ' ', ' ', ' '],
      ['*', ' ', ' ', ' ']
    ]

    const expected = [
      ['*', '2', '1', '1'],
      ['1', '2', '*', '1'],
      ['1', '2', '1', '1'],
      ['*', '1', ' ', ' ']
    ]
    expect(revealSabotage(store)).toEqual(expected)
  })

  it('should return a small matrix with num of saboted toys', () => {
    const store = [
      [' ', ' ', ' '],
      [' ', ' ', '*']
    ]

    const expected = [
      [' ', '1', '1'],
      [' ', '1', '*']
    ]
    expect(revealSabotage(store)).toEqual(expected)
  })
})
