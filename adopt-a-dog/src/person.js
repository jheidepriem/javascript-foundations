var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;
  };

  fillFoodBowl() {
    this.dog.hungry = false 
    // or this.dog.eat();
  };

  throwBall() {
    this.dog.fetchBall()
    return `${this.dog.name} loves playing fetch!`
  };

  introduceNewFriends(friend) {
    // this.dog.friends.push(friend.name)
     this.dog.makeNewFriend(friend)
  };

  adoptAPup(dogName, age) {
    if (!this.dog) {
    var newDog = new Dog({ name: dogName, age: age});
    this.dog = newDog
  } else {
    return `You can\'t adopt ${dogName}. You already have ${this.dog.name}!`
    }
  }
};

module.exports = Person;
