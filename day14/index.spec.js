const maxGifts = require('./index')

describe('maxGifts', () => {

    it('should return 4 (4)', () => {
        expect(maxGifts([2, 4, 2])).toEqual(4)
    })

    it('should return 10 (5 + 5)', () => {
        expect(maxGifts([5, 1, 1, 5])).toEqual(10)
    })

    it('should return 9 (4 + 4 + 1)', () => {
        expect(maxGifts([4, 1, 1, 4, 2, 1])).toEqual(9)
    })

    it('should return 103 (3 + 100)', () => {
        expect(maxGifts([1, 3, 1, 3, 100])).toEqual(103)
    })

    it('should return 2 (1 + 1)', () => {
        expect(maxGifts([1, 1, 1, 1])).toEqual(2)
    })

    it('should return 4 (1 + 3)', () => {
        expect(maxGifts([1, 2, 3, 1])).toEqual(4)
    })
})
