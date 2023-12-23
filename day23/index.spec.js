const organizeChristmasDinner = require('./index')

describe('organizeChristmasDinner', () => {

  it('returns an array of dishes when passed an array of dishes', () => {
    const dishes = [
      ["christmas turkey", "turkey", "sauce", "herbs"],
      ["cake", "flour", "sugar", "egg"],
      ["hot chocolate", "chocolate", "milk", "sugar"],
      ["pizza", "sauce", "tomato", "cheese", "ham"],
    ]
    const expected = [
      ["sauce", "christmas turkey", "pizza"],
      ["sugar", "cake", "hot chocolate"]
    ]
    expect(organizeChristmasDinner(dishes)).toEqual(expected)
  })

  it('returns an empty array when there are no repeated ingredients', () => {
    const dishes = [
      ["christmas turkey", "turkey", "sauce", "herbs"],
      ["cake", "flour", "sugar", "egg"],
      ["hot chocolate", "chocolate", "milk", "stevia"],
    ]
    expect(organizeChristmasDinner(dishes)).toEqual([])
  })

  it('returns an array of dishes', () => {
    const dishes = [
      ["gingerbread", "flour", "ginger", "sugar"],
      ["glazed ham", "ham", "honey", "sugar", "vinegar"],
      ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
      ["vegetable soup", "carrot", "potato", "onion", "garlic"],
      ["fruit punch", "apple juice", "orange juice", "sugar"]
    ]
    const expected = [
      ["garlic", "roast chicken", "vegetable soup"],
      ["sugar", "fruit punch", "gingerbread", "glazed ham"]
    ]
    expect(organizeChristmasDinner(dishes)).toEqual(expected)
  })

})
