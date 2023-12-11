const getIndexsForPalindrome = require('./index.js')

describe('getIndexsForPalindrome', () => {
  it('should return an empty array if it is already a palindrome', () => {
    expect(getIndexsForPalindrome('anna')).toEqual([])
    expect(getIndexsForPalindrome('aaaaaaaa')).toEqual([])
  })

  it('should return an array of indexes to be swapped', () => {
    expect(getIndexsForPalindrome('abab')).toEqual([0, 1])
    expect(getIndexsForPalindrome('aaababa')).toEqual([1, 3])
    expect(getIndexsForPalindrome('rotaratov')).toEqual([4, 8])
  })

  it('should return null if it is not possible', () => {
    expect(getIndexsForPalindrome('abac')).toEqual(null)
    expect(getIndexsForPalindrome('caababa')).toEqual(null)
  })

})
