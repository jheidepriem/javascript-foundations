class Dog {
  constructor(dogDeets) {
    this.name = dogDeets.name;
    this.age = dogDeets.age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
  };

  eat() {
 if (!this.hungry) {
  return 'I refuse to eat.'
 } else {
  this.hungry = false;
  return 'Yum!'
  }
};

 fetchBall() {
  if (this.energyLevel > 3) {
    this.energyLevel -= 1
    return 'This is fun!'
  } 
    return 'Nah, I\'m going to sleep instead.'
  };

  sleep() {
    if (this.energyLevel < 10) {
      this.energyLevel++
    } else {
      return 'I have too much energy to rest. I\'m going to chew something instead.'
     }
  };

  makeNewFriend(friend) {
    this.friends.push(friend.name)
   }
};

module.exports = Dog;
