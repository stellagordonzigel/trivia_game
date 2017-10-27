$(document).ready(function() {

  var questionSet = null
  var index = 0
  var score = 0
  var timer

  $('.answerChoice').hide()

  function startTimer() {
    var sec = 5
    $('.timer').show()
    $('.timer').text(sec)

    timer = setInterval(function() {
      sec--
      $('.timer').text(sec)
      if (sec === -1) {
        $('.timer').fadeOut('fast')
        stopTimer()
        // alert('Game over, you got ' + score + '/15!')
        clearCurrentGame()
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer)
    $('.timer').hide()
  }

  function questionsAppearOnPage(qAndA) {
    $('.question').html(
      '<h3>' + questionSet[qAndA].question + '</h3>'
    )
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
    // alert('correct')
    console.log(score)
  }

  function wrongAnswer() {
    index
    // alert('wrong')
    console.log('wrong')
  }

  function gameStart() {
    // $('.question').show()

    $('.question').append('<button class="level-button" id="easy-start">Easy</button>')
    $('.question').append('<button class="level-button" id="medium-start">Medium</button>')
    $('.question').append('<button class="level-button" id="hard-start">Hard</button>')

    $('.level-button').on('click', function () {

      var level = $(this).attr('id')
      if (level === 'easy-start') {
        questionSet = easyQuestions
        questionsAppearOnPage(index)
        startTimer()
      } else if (level === 'medium-start') {
        questionSet = mediumQuestions
        questionsAppearOnPage(index)
        startTimer()
      } else if (level === 'hard-start') {
        questionSet = hardQuestions
        questionsAppearOnPage(index)
        startTimer()
      }
    })
  }

  function showAnswer() {
    $('.answerChoice').on('click', function() {
      $('.question').text('')
      $('#buttonA').text('')
      $('#buttonB').text('')
      $('#buttonC').text('')
      $('#buttonD').text('')
    })
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

  gameStart()

  $('.answerChoice').on('click', function() {
    if (this.id === 'buttonA') {
      var answerSelected = 'a'
    } else if (this.id === 'buttonB') {
      answerSelected = 'b'
    } else if (this.id === 'buttonC') {
      answerSelected = 'c'
    } else if (this.id === 'buttonD') {
      answerSelected = 'd'
    }

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

    $('.question').text('')
    $('#buttonA').text('')
    $('#buttonB').text('')
    $('#buttonC').text('')
    $('#buttonD').text('')
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
