const adjustLights = require('./index.js')

describe('adjustLights', () => {
  it('you change the fourth light to 🔴', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toEqual(1)
  })

  it('you change the second light to 🟢 and the third to 🔴', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toEqual(2)
  })

  it('they are already alternating', ()=> {
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toEqual(0)
  })

  it('you change the second light to 🟢', () => {
    expect(adjustLights(['🔴', '🔴', '🔴'])).toEqual(1)
  })
})
