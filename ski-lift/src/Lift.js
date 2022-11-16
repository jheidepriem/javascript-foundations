var Skier = require('./Skier');

class Lift {
  constructor(numPeep) {
    this.inService = true;
    this.limit = numPeep;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  
  admitSkier(skiert, liftTicket) {
    var skier = new Skier(skiert, liftTicket)
    if (this.skiers.length < this.limit && liftTicket) {
      this.skiers.push(skier)
    } else if (!liftTicket) {
      return `Sorry, ${skiert}. You need a lift ticket!`
    } 

    return `Sorry, ${skiert}. Please wait for the next lift!`
    } 
  
  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = 'down'
    } else if (this.limit - this.skiers.length === 1) {
      return `We still need ${this.limit - this.skiers.length} more skier!`
    } else {
      return `We still need ${this.limit - this.skiers.length} more skiers!`
    }

  }
}

module.exports = Lift;