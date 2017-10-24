$(document).ready(function() {
  // let correct = 0
  // let wrong = 0

  var q1 = {
    question: 'What soap opera did Joey star in?',
    possibleAnswers:
      [
        'a) Days of Our Lives',
        'b) One Life to Live',
        'c) General Hospital',
        'd) Passions'
      ],
    flags: [true, false, false, false],
    answer: 'a) Days of Our Lives'
  }

  var q2 = {
    question: 'Whose name did Ross say at the altar?',
    possibleAnswers:
      [
        'a) Emily',
        'b) Phoebe',
        'c) Rachel',
        'd) Susan'
      ],
    flags: [false, false, true, false],
    answer: 'c) Rachel'
  }

  var q3 = {
    question: 'What is the name of Central Perks barista?', //how do you add a ' in the text?
    possibleAnswers:
      [
        'a) Adam',
        'b) Carlos',
        'c) Mark',
        'd) Gunther'
      ],
    flags: [false, false, false, true],
    answer: 'd) Gunther'
  }

  var q4 = {
    question: 'What was Monicas nickname when she was a field hockey goalie?', // ' in text
    possibleAnswers:
      [
        'a) Big fat goalie',
        'b) Brick wall',
        'c) Monica the goalie',
        'd) Shot blocker'
      ],
    flags: [true, false, false, false],
    answer: 'a) Big fat goalie'
  }

  var q5 = {
    question: 'What was the original name Ross picked for his and Rachels baby?',
    possibleAnswers:
      [
        'a) Isabella',
        'b) Talula',
        'c) Delilah',
        'd) Emma'
      ],
    flags: [true, false, false, false],
    answer: 'a) Isabella'
  }

  var q6 = {
    question: 'Where does the show take place?',
    possibleAnswers:
      [
        'a) New York City',
        'b) Los Angeles',
        'c) San Francisco',
        'd) Seattle'
      ],
    flags: [true, false, false, false],
    answer: 'a) New York City'
  }

  var q7 = {
    question: 'How many seasons of Friends are there?',
    possibleAnswers:
      [
        'a) 8',
        'b) 7',
        'c) 9',
        'd) 10'
      ],
    flags: [false, false, false, true],
  }

  var q8 = {
    question: 'Which of the following ways did Mike NOT propose to Phoebe?',
    possibleAnswers:
      [
        'a) In Barbados at Ross conference',
        'b) On the Jumbotron at a New York Knicks game',
        'c) In Central Perk after Phoebe performed',
        'd) Hid the ring in a piece of cake at a restaurant'
      ],
    flags: [false, false, true, false],
    answer: 'c) In Central Perk after Phoebe performed'
  }

  var q9 = {
    question: 'How many times has Ross been married?',
    possibleAnswers:
      [
        'a) 3',
        'b) 0',
        'c) 2',
        'd) 1'
      ],
    flags: [true, false, false, false],
    answer: 'a) 3'
  }

  var q10 = {
    question: 'Which of the following actors DID NOT guest star on Friends?',
    possibleAnswers:
      [
        'a) George Clooney',
        'b) Brooke Shields',
        'c) Billy Crystal',
        'd) Nicole Kidman'
      ],
    flags: [false, false, false, true],
    answer: 'd) Nicole Kidman'
  }
})
