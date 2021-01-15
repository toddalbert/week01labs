const { getRecipe, printRecipe } = require('./helpers')
const myCoffee = 'Latte'
const myRecipe = getRecipe(myCoffee)
printRecipe(myCoffee, myRecipe)
