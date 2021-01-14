const coffees = require('./coffee.json')

coffees.forEach(recipe => {
  if(recipe.ingredients.includes('Steamed Milk') 
      || recipe.ingredients.includes('1oz Steamed Milk') 
      || recipe.ingredients.includes('Milk') 
      || recipe.ingredients.includes('Cream')) {
    console.log(recipe.id, recipe.title)
  }
})
