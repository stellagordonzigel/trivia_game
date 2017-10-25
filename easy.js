$(document).ready(function() {

  function startTimer() {
    var sec = 3
    $('.timer').text(sec)

    var timer = setInterval(function() {
      sec--
      $('.timer').text(sec)
      if (sec === -1) {
        $('.timer').fadeOut('fast')
        clearInterval(timer)
        alert('game over')
      }
    }, 1000);
  }

  var q1 = {
    question: 'What soap opera did Joey star in?',
    possibleAnswers: [
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
    possibleAnswers: ['a) Emily', 'b) Phoebe', 'c) Rachel', 'd) Susan'],
    flags: [false, false, true, false],
    answer: 'c) Rachel'
  }

  var q3 = {
    question: "What is the name of Central Perk's barista?",
    possibleAnswers: ['a) Adam', 'b) Paolo', 'c) Mark', 'd) Gunther'],
    flags: [false, false, false, true],
    answer: 'd) Gunther'
  }

  var q4 = {
    question: "What is Joey's signature pick-up-line?",
    possibleAnswers: [
      'a) How are you doing?',
      'b) Have I seen you on tv?',
      "c) How's it going?",
      "d) How you doin'?"
    ],
    flags: [false, false, false, true],
    answer: "d) How you doin'?"
  }

  var q5 = {
    question: "What is Ross' profession?",
    possibleAnswers: [
      'a) Paleontologist',
      'b) Doctor',
      'c) Advertisor',
      'd) Actor'
    ],
    flags: [true, false, false, false],
    answer: 'a) Paleontologist'
  }

  var q6 = {
    question: 'Where does the show take place?',
    possibleAnswers: [
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
    possibleAnswers: ['a) 8', 'b) 7', 'c) 9', 'd) 10'],
    flags: [false, false, false, true],
    answer: 'd) 10'
  }

  var q8 = {
    question: 'How many Friends are there?',
    possibleAnswers: ['a) 6', 'b) 7', 'c) 5', 'd) 4'],
    flags: [true, false, false, false],
    answer: 'a) 6'
  }

  var q9 = {
    question: 'How many times has Ross been married?',
    possibleAnswers: ['a) 3', 'b) 0', 'c) 2', 'd) 1'],
    flags: [true, false, false, false],
    answer: 'a) 3'
  }

  var q10 = {
    question: 'What actress plays Rachel?',
    possibleAnswers: [
      'a) Jennifer Garner',
      'b) Jennifer Aniston',
      'c) Courteney Cox',
      'd) Lisa Kudrow'
    ],
    flags: [false, true, false, false],
    answer: 'b) Jennifer Aniston'
  }

  var q11 = {
    question: 'Where do the Friends always hang out?',
    possibleAnswers: [
      'a) Central Park',
      'b) Central Perk',
      'c) A Bar',
      "d) Phoebe's apartment"
    ],
    flags: [false, true, false, false],
    answer: 'b) Central Perk'
  }

  var q12 = {
    question: "What is Chandler's last name?",
    possibleAnswers: [
      'a) Geller',
      'b) Green',
      'c) Bing',
      'd) Tribbiani'
    ],
    flags: [false, false, true, false],
    answer: 'c) Bing'
  }

  var q13 = {
    question: "What is Phoebe's signature song?",
    possibleAnswers: [
      'a) Smelly Cat',
      'b) You Suck',
      'c) Stinky Dog',
      'd) Pervert Parade'
    ],
    flags: [true, false, false, false],
    answer: 'a) Smelly Cat'
  }

  var q14 = {
    question: 'Who does Monica marry?',
    possibleAnswers: [
      'a) Richard',
      'b) Fun Bobby',
      'c) Chandler',
      'd) Joey'
    ],
    flags: [false, false, true, false],
    answer: 'c) Chandler'
  }

  var q15 = {
    question: "Who was involved in the 'We Were On a Break' fight?",
    possibleAnswers: [
      'a) Monica and Chandler',
      'b) Phoebe and Mike',
      'c) Ross and Mona',
      'd) Ross and Rachel'
    ],
    flags: [false, false, false, true],
    answer: 'd) Ross and Rachel'
  }

  // var q16 = {
  //   question: 'Who does Joey play on Days of Our Lives?',
  //   possibleAnswers: [
  //     'a) Dr. Striker Ramore',
  //     'b) Dr. Drake Ramore',
  //     'c) Dr. Hans Ramore',
  //     'd) Dr. Anthony Ramore'
  //   ],
  //   flags: [false, true, false, false],
  //   answer: 'b) Dr. Drake Ramore'
  // }

  var arrayQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15]

  // function questionAppearsOnPage (deckSelection) {
  //   console.log(deckSelection)
  //   $('.question').html("<h3>" + arrayQuestions[deckSelection].question + "</h3")
  //   $('#buttonA').text(arrayQuestions[deckSelection].possibleAnswers[0]).show()
  //   $('#buttonB').text(arrayQuestions[deckSelection].possibleAnswers[1]).show()
  //   $('#buttonC').text(arrayQuestions[deckSelection].possibleAnswers[2]).show()
  //   $('#buttonD').text(arrayQuestions[deckSelection].possibleAnswers[3]).show()
  // }

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

  function correctAnswer() {
    index++
    alert('correct')
    console.log('correct')
  }

  function wrongAnswer() {
    index++
    alert('wrong')
    console.log('wrong')
  }

  function gameStart() {
    index = 0
    $('.question').append('<button class="level-button" id="easy-start">Easy</button>')
    $('#easy-start').on('click', function() {
      $(this).hide()
      startTimer()
      questionAppearsOnPage(index)
    })
  }

  function showAnswer() {
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

    $('.question').text('')
    $('#buttonA').text('')
    $('#buttonB').text('')
    $('#buttonC').text('')
    $('#buttonD').text('')
    index++

    if (index < arrayQuestions.length) {
      questionAppearsOnPage(index)
    } else {
      $('.answerChoice').hide()
    }
  })
})
