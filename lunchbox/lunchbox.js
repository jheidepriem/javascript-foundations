class LunchBox {
  constructor(fullBox) {
    this.owner = fullBox.owner;
    this.material = fullBox.madeOf;
    this.shape = fullBox.shape;
    this.color = fullBox.color;
    this.snacks = [];
  }

  acquireSnack(type) {
    this.snacks.push(type)
    type.isInLunchBox = true
  }

  findHealthySnacks() {
    
    
  }

}

module.exports = LunchBox;
