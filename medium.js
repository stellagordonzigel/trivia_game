$(document).ready(function() {
  // let correct = 0
  // let wrong = 0

  var q1 = {
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

  var q2 = {
    question: "What is Joey's chair's name?",
    possibleAnswers: ['a) Stevie', 'b) Rosita', 'c) Chair', 'd) Hugsie'],
    flags: [false, true, false, false],
    answer: 'b) Rosita'
  }

  var q3 = {
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

  var q4 = {
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

  var q5 = {
    question: "What was the original name Ross picked for his and Rachel's baby?",
    possibleAnswers: ['a) Isabella', 'b) Talula', 'c) Delilah', 'd) Emma'],
    flags: [true, false, false, false],
    answer: 'a) Isabella'
  }

  var q6 = {
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

  var q7 = {
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

  var q8 = {
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

  var q9 = {
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

  var q10 = {
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

  var q11 = {
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

  var q12 = {
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

  var q13 = {
    question: 'Where does David move?',
    possibleAnswers: ['a) Yemen', 'b) Minsk', 'c) Moscow', 'd) Athens'],
    flags: [false, true, false, false],
    answer: 'b) Minsk'
  }

  var q14 = {
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

  var q15 = {
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

  var arrayQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15]

  function questionAppearsOnPage(answerSelection) {
    console.log(answerSelection)
    $('.question').html(
      '<h3>' + arrayQuestions[answerSelection].question + '</h3>'
    )
    $('#buttonA')
      .text(arrayQuestions[answerSelection].possibleAnswers[0])
      .show()
    $('#buttonB')
      .text(arrayQuestions[answerSelection].possibleAnswers[1])
      .show()
    $('#buttonC')
      .text(arrayQuestions[answerSelection].possibleAnswers[2])
      .show()
    $('#buttonD')
      .text(arrayQuestions[answerSelection].possibleAnswers[3])
      .show()
  }

  function gameStart() {
    index = 0
    // $('.question').append('<button id="start-button"><img src="friends-group-photo.jpg">Start Game</button>')
    $('.question').append('<button class="level-button" id="medium-start">Medium</button>')
    $('#medium-start').on('click', function() {
      $(this).hide()
      questionAppearsOnPage(index)
    })
  }

  function getAnswer() {
    $('.answerChoice').on('click', function() {
      $('.question').text('')
      $('#buttonA').text('')
      $('#buttonB').text('')
      $('#buttonC').text('')
      $('#buttonD').text('')
      questionAppearsOnPage()
    })
  }

  gameStart()
  $('.answerChoice').on('click', function() {
    if (this.id === 'buttonA') {
      var answerChosen = 'a'
    } else if (this.id === 'buttonB') {
      answerChosen = 'b'
    } else if (this.id === 'buttonC') {
      answerChosen = 'c'
    } else if (this.id === 'buttonD') {
      answerChosen = 'd'
    }

    if (answerChosen === 'a' && arrayQuestions[index].flags[0] === true) {
      correctAnswer()
    } else if (answerChosen === 'a') {
      wrongAnswer()
    }

    if (answerChosen === 'b' && arrayQuestions[index].flags[1] === true) {
      correctAnswer()
    } else if (answerChosen === 'b') {
      wrongAnswer()
    }

    if (answerChosen === 'c' && arrayQuestions[index].flags[2] === true) {
      correctAnswer()
    } else if (answerChosen === 'c') {
      wrongAnswer()
    }

    if (answerChosen === 'd' && arrayQuestions[index].flags[3] === true) {
      correctAnswer()
    } else if (answerChosen === 'd') {
      wrongAnswer()
    }
  })
})
