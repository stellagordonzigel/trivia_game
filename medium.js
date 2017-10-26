$(document).ready(function() {

  var easyQuestions =
    { //q1
      question: "What actresses played Rachel's sisters?",
      possibleAnswers: [
        'a) Reese Witherspoon and Christina Applegate',
        'b) Julia Roberts and Reese Witherspoon',
        'c) Wynona Ryder and Christina Applegate',
        'd) Nicole Kidman and Wynona Ryder'
      ],
      flags: [true, false, false, false],
      answer: 'a) Reese Witherspoon and Christina Applegate'
    }

    { //q2
      question: "What is Joey's chair's name?",
      possibleAnswers: ['a) Stevie', 'b) Rosita', 'c) Chair', 'd) Hugsie'],
      flags: [false, true, false, false],
      answer: 'b) Rosita'
    }

    { //q3
      question: 'What slogan does Ross claim to have made up?',
      possibleAnswers: [
        'a) America Runs on Dunkin',
        'b) Got Milk?',
        "c) It's so easy a caveman could do it",
        'd) Just Do It'
      ],
      flags: [false, true, false, false],
      answer: 'b) Got Milk?'
    }

    { //q4
      question: "What was Monica's nickname when she was a field hockey goalie?",
      possibleAnswers: [
        'a) Big Fat Goalie',
        'b) Brick Wall',
        'c) Monica the Goalie',
        'd) Shot Blocker'
      ],
      flags: [true, false, false, false],
      answer: 'a) Big Fat Goalie'
    }

    { //q5
      question: "What was the original name Ross picked for his and Rachel's baby?",
      possibleAnswers: ['a) Isabella', 'b) Talula', 'c) Delilah', 'd) Emma'],
      flags: [true, false, false, false],
      answer: 'a) Isabella'
    }

    { //q6
      question: 'What does Ross sing to Emma to make her laugh?',
      possibleAnswers: [
        'a) Bootylicious',
        'b) Baby Got Back',
        'c) Just the Two of Us',
        'd) Hot in Herre'
      ],
      flags: [false, true, false, false],
      answer: 'b) Baby Got Back'
    }

    { //q7
      question: "What are Monica and Chandler's twins named?",
      possibleAnswers: [
        'a) Emma and Ben',
        'b) Jack and Judy',
        'c) Erica and Jack',
        'd) Hemmingway and Erica'
      ],
      flags: [false, false, true, false],
      answer: 'c) Erica and Jack'
    }

    { //q8
      question: 'Which of the following ways did Mike NOT propose to Phoebe?',
      possibleAnswers: [
        "a) In Barbados at Ross' conference",
        'b) On the Jumbotron at a New York Knicks game',
        'c) In Central Perk after Phoebe performed',
        'd) Hid the ring in a piece of cake at a restaurant'
      ],
      flags: [false, false, true, false],
      answer: 'c) In Central Perk after Phoebe performed'
    }

    { //q9
      question: "What did the adoption agency mistakenly think Monica and Chandler's jobs were?",
      possibleAnswers: [
        'a) Chef and Doctor',
        'b) Chef and Advertisor',
        'c) Priest and Data Analyst',
        'd) Priest and Doctor'
      ],
      flags: [false, false, false, true],
      answer: 'd) Priest and Doctor'
    }

    { //q10
      question: 'Which of the following actors DID NOT guest star on Friends?',
      possibleAnswers: [
        'a) George Clooney',
        'b) Brooke Shields',
        'c) Billy Crystal',
        'd) Nicole Kidman'
      ],
      flags: [false, false, false, true],
      answer: 'd) Nicole Kidman'
    }

    { //q11
      question: 'What soap opera award was Joey nominated for?',
      possibleAnswers: [
        'a) Soapie',
        'b) Soap Opera Digest Award',
        'c) Emmy',
        'd) Daytime Emmy'
      ],
      flags: [true, false, false, false],
      answer: 'a) Soapie'
    }

    { //q12
      question: 'What game show does Joey appear on?',
      possibleAnswers: [
        'a) Win, Lose, or Draw', //do commas matter?
        'b) Match Game',
        'c) Bamboozled',
        'd) Pyramid'
      ],
      flags: [false, false, false, true],
      answer: 'd) Pyramid'
    }

    { //q13
      question: 'Where does David move?',
      possibleAnswers: ['a) Yemen', 'b) Minsk', 'c) Moscow', 'd) Athens'],
      flags: [false, true, false, false],
      answer: 'b) Minsk'
    }

    { //q14
      question: "What is the name of Chandler's father's all-male burlesque?",
      possibleAnswers: [
        "a) It's Raining Men",
        'b) The Village People',
        'c) Mr. Garibaldi and the Fellows',
        'd) Viva Las Gaygas'
      ],
      flags: [false, false, false, true],
      answer: 'd) Viva Las Gaygas'
    }

    { //q15
      question: 'What is the name of the Gellar family newsletter?',
      possibleAnswers: [
        'a) The Geller Yeller',
        'b) The Geller Times',
        'c) The Yeller Geller',
        'd) The Geller Post'
      ],
      flags: [true, false, false, false],
      answer: 'a) The Geller Yeller'
    }
})
