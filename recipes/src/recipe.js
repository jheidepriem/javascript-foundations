class Recipe {
  constructor(recipeDeets) {
    this.name = recipeDeets.name;
    this.ingredients = recipeDeets.ingredients;
    this.attempted = false;
    this.rating = null;
  }

  rateRecipe(score) {
    if (this.attempted = true) {
      this.rating = score
    }
  }

  changeIngredientAmount(ingredientName, amount) {
    if (this.ingredients.includes(ingredientName)) {
      this.ingredients.ingredientName.push(amount)
    }
  }
}



module.exports = Recipe;
