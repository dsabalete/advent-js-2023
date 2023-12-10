const createChristmasTree = require('./index.js')

describe('createChristmasTree', () => {
    it('creates a 4 height tree', () => {
        expect(createChristmasTree('123', 4)).toEqual('    1\n   2 3\n  1 2 3\n1 2 3 1 2\n    |\n')
    })

    it('creates a 3 height tree', () => {
        expect(createChristmasTree('*@o', 3)).toEqual('  *\n @ o\n* @ o\n  |\n')
    })
})