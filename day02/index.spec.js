const manufacture = require('./index.js')

/*
In Santa's workshop, the elves have a **gift** list they wish to make and a 
limited set of materials.

*Gifts are strings of text* and *materials are characters*. Your task is to 
write a function that, given a list of gifts and the available materials, 
returns a **list of the gifts that can be made**.

A gift can be made if we have all the necessary materials to make it.

```js
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
```
 */

describe('manufacture', () => {
  it('returns a list of gifts that can be made from "tronesa"', () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual(["tren", "oso"])
  })

  it('returns a list of gifts that can be made from "jlepuz"', () => {
    expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toEqual(["puzzle"])
  })

  it('returns a list of gifts that can be made from "psli"', () => {
    expect(manufacture(['libro', 'ps5'], 'psli')).toEqual([])
  })
})
