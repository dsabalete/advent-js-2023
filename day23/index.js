function organizeChristmasDinner(dishes) {
  const ingredients = []
  const commonIngredients = []

  // get common ingredients
  for (const dish of dishes) {
    for (const dishIngredient of dish.slice(1)) {
      if (!ingredients.includes(dishIngredient)) {
        ingredients.push(dishIngredient)
      } else if (!commonIngredients.includes(dishIngredient)) {
        commonIngredients.push(dishIngredient)
      }
    }
  }
  const sharedIngredientsOnDishes = []

  // group dishes by common ingredients
  for (const ingredient of commonIngredients) {
    const dishesWithIngredient = []
    for (const dish of dishes) {
      if (dish.includes(ingredient)) {
        dishesWithIngredient.push(dish[0])
      }
    }

    // sort dishes alphabetically
    dishesWithIngredient.sort((a, b) => {
      if (a < b) {
        return -1
      }
      if (a > b) {
        return 1
      }
      return 0
    })
    sharedIngredientsOnDishes.push([ingredient, ...dishesWithIngredient])
  }

  // sort ingredients alphabetically
  sharedIngredientsOnDishes.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1
    }
    if (a[0] > b[0]) {
      return 1
    }
    return 0
  })

  return sharedIngredientsOnDishes
}

module.exports = organizeChristmasDinner