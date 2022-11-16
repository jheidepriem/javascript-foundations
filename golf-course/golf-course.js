class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

    checkInGroup(group) {
     this.openings = 5
     this.currentlyPlaying = group
      
    }

}

module.exports = GolfCourse;
