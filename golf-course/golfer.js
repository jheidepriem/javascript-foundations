class Golfer {
  constructor(golferDeets) {
    this.name = golferDeets.name;
    this.handicap = golferDeets.handicap;
    this.frustration = 0
    this.confidence = 0
   

  }

    calculateAvg(par) {
      par += this.handicap
      return `I usually shoot a ${par} on average.`
  }
   
    playRound(golfCourse) {
      if (golfCourse.difficulty === 'hard') {
        this.frustration = 500
      } else if (golfCourse.difficulty === 'moderate') {
        this.frustration = 100
      }
  }

  hitTheRange() {
    this.confidence += 10
  }

  marvel(golfCourse) {
    if (golfCourse.features.includes('great views', 'wildlife')) {
    return `I love the great views and wildlife on this course!`
    } else if (golfCourse.features.includes('undulating greens', 'creative layout')) {
      return `I love the undulating greens and creative layout on this course!`
    }
  }

  whatYaShoot(score) {
  if (score === 0) {
    this.frustration = 10;
    return `Booyah!`;
  } else if (score >= 0) {
    this.frustration += 20;
    return `Doh!`;
 } else if (score <= 0) {
    this.frustration = 0
    return `I AM THE GREATEST GOLFER ALIVE!`
 }
    }
  }


module.exports = Golfer;
