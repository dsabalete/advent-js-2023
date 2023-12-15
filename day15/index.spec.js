const autonomousDrive = require('./index')

describe('autonomousDrive', () => {
  it('should return the store', () => {
    const store = ['..!....', '...*.*.']
    const movements = ['R', 'R', 'D', 'L']
    expect(autonomousDrive(store, movements)).toEqual(store)
  })
})