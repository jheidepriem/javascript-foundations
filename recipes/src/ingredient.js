class Ingredient {
  constructor(stuff) {
    this.name = stuff.name;
    this.amount = stuff.amount;
  }

  changeAmount(amount) {
    this.amount = amount
   }
}

module.exports = Ingredient;
