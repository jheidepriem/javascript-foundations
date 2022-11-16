class Craft {
  constructor(craftDetails) {
    this.name = craftDetails.type
    this.materials = craftDetails.materials;
    this.completed = false
    this.totalCost = 0

  }

  completeCraft() {
    this.completed = true
    return `All done! It looks great!`
  }
  calculateProjectTotal() {
    for (var i = 0; i < this.materials.length; i++) {
      this.totalCost += this.materials[i].calculateMaterialCost()
    }
      return this.totalCost
  }
}

module.exports = Craft;
