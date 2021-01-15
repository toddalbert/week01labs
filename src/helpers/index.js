const coffeeList = require('../../data/coffee.json')

exports.getRecipe = function (coffeeName) {
  return coffeeList.find(coffee => coffee.title === coffeeName).ingredients
}

exports.printRecipe = (coffeeName, ingredientList) => {
  console.log(coffeeName + ': ')
  ingredientList.forEach(ingredient => console.log(ingredient))
}
