$(document).ready(function() {

  var questionSet = null
  var index = 0
  var score = 0
  var timer

  $('.answerChoice').hide()

  function startTimer() {
    var sec = 60000
    $('.timer').text(sec)

    timer = setInterval(function() {
      sec--
      $('.timer').text(sec)
      if (sec === -1) {
        $('.timer').fadeOut('fast')
        stopTimer()
        alert('game over, you got ' + score + '/15')
        // $('.show-score').text(score + '/15')
      }
      // if ((sec === -1) || (questionSet = 0)) {
      //   $('.show-score').text(score + '/15')
      // }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer)
  }

  function questionsAppearOnPage(answerSelection) {
    // console.log(answerSelection)
    $('.question').html(
      '<h3>' + questionSet[answerSelection].question + '</h3>'
    )
    $('#buttonA')
      .text(questionSet[answerSelection].possibleAnswers[0])
      .show()
    $('#buttonB')
      .text(questionSet[answerSelection].possibleAnswers[1])
      .show()
    $('#buttonC')
      .text(questionSet[answerSelection].possibleAnswers[2])
      .show()
    $('#buttonD')
      .text(questionSet[answerSelection].possibleAnswers[3])
      .show()
  }

  function correctAnswer() {
    index
    // $('.correct').text('correct')
    alert('correct')
    console.log(score)
  }

  function wrongAnswer() {
    index
    alert('wrong')
    console.log('wrong')
  }

  function gameStart() {
    // index = 0
    $('.question').append('<button class="level-button" id="easy-start">Easy</button>')
    $('.question').append('<button class="level-button" id="medium-start">Medium</button>')
    $('.question').append('<button class="level-button" id="hard-start">Hard</button>')

    $('.level-button').on('click', function () {

      let level = $(this).attr('id')
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

      easyQuestionsAppearOnPage()
      mediumQuestionsAppearOnPage()
      hardQuestionsAppearOnPage()
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

    if (answerChosen === 'a' && questionSet[index].flags[0] === true) {
      correctAnswer()
      score++
    } else if (answerChosen === 'a') {
      wrongAnswer()
    }

    if (answerChosen === 'b' && questionSet[index].flags[1] === true) {
      correctAnswer()
      score++
    } else if (answerChosen === 'b') {
      wrongAnswer()
    }

    if (answerChosen === 'c' && questionSet[index].flags[2] === true) {
      correctAnswer()
      score++
    } else if (answerChosen === 'c') {
      wrongAnswer()
    }

    if (answerChosen === 'd' && questionSet[index].flags[3] === true) {
      correctAnswer()
      score++
    } else if (answerChosen === 'd') {
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
      alert("you won!")
      $('.answerChoice').hide()
      declareWinner()
    }
  })
})
