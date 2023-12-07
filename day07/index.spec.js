const drawGift = require('./index.js')

describe('drawGift', () => {
    it('should return a figure of 4 #-edge', () => {
        expect(drawGift(4, '+')).toEqual("   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n")
    })

    it('should return a figure of 5 #-edge', () => {
        expect(drawGift(5, '*')).toEqual("    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n")
    })

    it('should return a figure of 1 #-edge', () => {
        expect(drawGift(1, '^')).toEqual("#\n")
    })
})