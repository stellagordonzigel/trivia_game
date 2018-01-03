$(document).ready(function() {

  var questionSet = null
  var index = 0
  var score = 0
  var timer

  $('.checkMark').hide()
  $('.xMark').hide()

  // hiding four answer choice buttons when game starts, before level-button is clicked
  $('.answerChoice').hide()

  gameStart()

  function startTimer() {
    var sec = 60
    $('.timer').show()
    $('.timer').text(sec)

    timer = setInterval(function() {
      sec--
      $('.timer').text(sec)
      if (sec === -1) {
        $('.timer').fadeOut('fast')
        stopTimer()
        clearCurrentGame()
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer)
    $('.timer').hide()
  }

  //questions and possibleAnswers are appearing on the page
  function questionsAppearOnPage(qAndA) {
    //adding the question to the question div
    $('.question').html(
      '<h3>' + questionSet[qAndA].question + '</h3>'
    )
    //adding possibleAnswers to each button (A, B, C, D)
    $('#buttonA')
      .text(questionSet[qAndA].possibleAnswers[0])
      .show()
    $('#buttonB')
      .text(questionSet[qAndA].possibleAnswers[1])
      .show()
    $('#buttonC')
      .text(questionSet[qAndA].possibleAnswers[2])
      .show()
    $('#buttonD')
      .text(questionSet[qAndA].possibleAnswers[3])
      .show()
  }

  function correctAnswer() {
    index
    score++
    $('.checkMark').show().delay(200).fadeOut()
    // setTimeout(function(){
    //
    // }, 500)
    // alert('correct')
    console.log(score)
  }

  function wrongAnswer() {
    index
    $('.xMark').show().delay(200).fadeOut()
    // alert('wrong')
    console.log('wrong')
  }

  function gameStart() {
    //easy, medium, and hard buttons are appended into the question div
    $('.question').append('<button class="level-button" id="easy-start">Easy</button>')
    $('.question').append('<button class="level-button" id="medium-start">Medium</button>')
    $('.question').append('<button class="level-button" id="hard-start">Hard</button>')

    //click event: when easy, medium, or hard button is clicked
    $('.level-button').on('click', function () {

      //level = the level button's id (easy-start, medium-start, hard-start)
      var level = $(this).attr('id')
      //if level = easy-start, questionSet = easyQuestions(see easy.js)
      if (level === 'easy-start') {
        questionSet = easyQuestions
        questionsAppearOnPage(index)
        startTimer()
      //if level = medium-start, questionSet = mediumQuestions(see medium.js)
      } else if (level === 'medium-start') {
        questionSet = mediumQuestions
        questionsAppearOnPage(index)
        startTimer()
      //if level = hard-start, questionSet = hardQuestions(see hard.js)
      } else if (level === 'hard-start') {
        questionSet = hardQuestions
        questionsAppearOnPage(index)
        startTimer()
      }
    })
  }

  function showAnswer() {
    //when an answer choice (a, b, c, d buttons) is clicked
    $('.answerChoice').on('click', function() {
      answersAppear()
    })
  }

  function answersAppear() {
    $('.question').text('')
    //next question's answers will appear in buttons
    $('#buttonA').text('')
    $('#buttonB').text('')
    $('#buttonC').text('')
    $('#buttonD').text('')
  }

  function setUpNewGame() {
    index = 0
    score = 0
    $('.answerChoice').hide()
    gameStart()
  }

  function clearCurrentGame() {
    alert('Game over, you got ' + score + '/15!')
    $('.question').empty()
    $('.answerChoice').hide()
    index = 0
    score = 0
    gameStart()
  }

  // gameStart()

  //answerChoice click event
  $('.answerChoice').on('click', function() {
    //if answerChoice id = buttonA, then answerSelected was a (so on for each choice)
    if (this.id === 'buttonA') {
      var answerSelected = 'a'
    } else if (this.id === 'buttonB') {
      answerSelected = 'b'
    } else if (this.id === 'buttonC') {
      answerSelected = 'c'
    } else if (this.id === 'buttonD') {
      answerSelected = 'd'
    }

    //if answerSelected = a and the flag at the 0th index = true
    if (answerSelected === 'a' && questionSet[index].flags[0] === true) {
      correctAnswer()
    } else if (answerSelected === 'a') {
      wrongAnswer()
    }

    if (answerSelected === 'b' && questionSet[index].flags[1] === true) {
      correctAnswer()
    } else if (answerSelected === 'b') {
      wrongAnswer()
    }

    if (answerSelected === 'c' && questionSet[index].flags[2] === true) {
      correctAnswer()
    } else if (answerSelected === 'c') {
      wrongAnswer()
    }

    if (answerSelected === 'd' && questionSet[index].flags[3] === true) {
      correctAnswer()
    } else if (answerSelected === 'd') {
      wrongAnswer()
    }

    answersAppear()
    index++

    if (index < questionSet.length) {
      questionsAppearOnPage(index)
    } else {
      stopTimer()
      alert('Game over, you got ' + score + '/15!')
      setUpNewGame()
    }
  })
})

//organize files
//organize gameStart function, move if statements to a different function = setUPGame, then call that function in gameStart()
//comment on functions to describe them
//use jquery to display how many guesses out of how many questions (adding text to html)
