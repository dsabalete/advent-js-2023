const cyberReindeer = require('./index.js')

describe('cyberReindeer', () => {
  it('returns an array with the path', () => {
    const expectedResult = [
      'S..|...|..', // initial state
      '.S.|...|..', // sled advances on the road
      '..S|...|..', // sled advances on the road
      '..S|...|..', // sled stops at the barrier
      '..S|...|..', // sled stops at the barrier
      '...S...*..', // barrier opens, sled advances
      '...*S..*..', // sled advances on the road
      '...*.S.*..', // sled advances on the road
      '...*..S*..', // sled advances on the road
      '...*...S..', // passes through the open barrier
    ]
    expect(cyberReindeer('S..|...|..', 10)).toEqual(expectedResult)
  })
})
