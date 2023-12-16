const transformTree = require('./index')

describe('transformTree', () => {
  it('should return an object', () => {
    const tree = [1]
    expect(typeof transformTree(tree)).toEqual('object')
  })

  it('should return the tree', () => {
    const tree = [3, 1, 0, 8, 12, null, 1]
    const expected = {
      value: 3,
      left: {
        value: 1,
        left: {
          value: 8,
          left: null,
          right: null
        },
        right: {
          value: 12,
          left: null,
          right: null
        }
      },
      right: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null
        }
      }
    }
    expect(transformTree(tree)).toEqual(expected)
  })
})