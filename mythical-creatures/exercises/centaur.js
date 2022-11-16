 class Centaur {
    constructor(horse) {
        this.name = horse.name;
        this.breed = horse.type;
        this.cranky = false;
        this.standing = true;
        this.bowShots = 0;
      
        

    }
shootBow() {
    if (this.bowShots >= 3) {
      this.cranky = true
    }
  return 'Twang!!!'
}
run() {
    return 'Clop clop clop clop!!!'
    }
}
 module.exports = Centaur;