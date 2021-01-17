const { getRecipe, printRecipe } = require('./helpers')
const myCoffee = process.argv[2] || 'Latte'
const myRecipe = getRecipe(myCoffee)
printRecipe(myCoffee, myRecipe)
