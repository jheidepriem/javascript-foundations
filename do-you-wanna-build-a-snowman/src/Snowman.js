class Snowman {
    constructor(snowmanDetails) {
        this.carrots = snowmanDetails.carrots;
        this.coal = snowmanDetails.coal;
        this.buttons = snowmanDetails.buttons;
        this.snowballs = snowmanDetails.snowballs;
        this.magicHat = false;
    }

    canWearMagicHat() {
        if (this.coal < 2) {
           return this.magicHat 
        }  
        if (this.buttons < 5) {
            return this.magicHat 
        }  
        if (this.carrots < 1) {
            return this.magicHat 
        }  
        if (this.snowballs < 2) {
            return this.magicHat 
        }
       return this.magicHat = true
      
        }
    }

module.exports = Snowman;