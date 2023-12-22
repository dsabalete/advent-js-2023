const compile = require('./index')

describe('compile', () => {
  it('returns 3', () => {
    expect(compile('++*-')).toEqual(3) // (1 + 1) * 2 - 1 = 3
  })

  it('returns 6', () => {
    expect(compile('++%++<')).toEqual(6) // 1 + 1 + 1 + 1 + 1 + 1 = 6
  })

  it('returns 0', () => {
    expect(compile('++<--')).toEqual(0) // 1 + 1 - 1 - 1 = 0
  })

  it('returns 3', () => {
    expect(compile('++¿+?')).toEqual(3) // 1 + 1 + 1 = 3
  })

  it('returns -2', () => {
    expect(compile('--¿+++?')).toEqual(-2) // - 1 - 1 = -2
  })
})