$(document).ready(function() {

  function startTimer() {
    var sec = 20
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

  function correctAnswer() {
    index
    alert('correct')
    console.log('correct')
  }

  function wrongAnswer() {
    index
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
