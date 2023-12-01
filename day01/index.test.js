const findFirstRepeated = require('./index.js')

describe('findFirstRepeated', () => {
    it('should return 3', () => {
        expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toEqual(3)
    })
    
    it('should return 5', () => {
        expect(findFirstRepeated([5, 1, 5, 1])).toEqual(5)
    })
    
    it('should return -1', () => {
        expect(findFirstRepeated([1, 2, 3, 4])).toEqual(-1)
    })
})
