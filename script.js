$(document).ready(function() {

  var questionSet = null
  var index = 0
  var score = 0
  var timer

  $('.answerChoice').hide() // This can also be done in CSS

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
  // Make sure to get rid of all commented out code in Production branch.  You probably don't want `console.log` as well, as I imagine that was just used for testing purposes. Also, not sure if `index` here is doing anything, in which case, you may just be able to get rid of `wrongAnswer() unless you want to expand upon your project. `
  function wrongAnswer() {
    index
    // alert('wrong')
    console.log('wrong')
  }

  function gameStart() {
    $('.question').append('<button class="level-button" id="easy-start">Easy</button>')
    $('.question').append('<button class="level-button" id="medium-start">Medium</button>')
    $('.question').append('<button class="level-button" id="hard-start">Hard</button>')
    // You may just want to hard code these into your html as the level choices are there from the get-go

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

  gameStart() // As this is the function call that kicks the game off, I would put this at the very end of your script file.

  $('.answerChoice').on('click', function() {
    var answerSelected // This is slightly cleaner/ more obvious
    if (this.id === 'buttonA') {
      answerSelected = 'a'
      if (questionSet[index].flags[0] === true) { correctAnswer() } // Something like this could help clean shorten the code in this area.
    } else if (this.id === 'buttonB') {
      answerSelected = 'b'
    } else if (this.id === 'buttonC') {
      answerSelected = 'c'
    } else if (this.id === 'buttonD') {
      answerSelected = 'd'
    }
    // Some of the logic in this area could be condensed, and for ultimately better practice, but into a seperate function.  Something like `handleClickChoice`, that way the `gameStart` function is more clear whats going on on a high level.
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

    $('.question').text('') // Game seems to work fine with out this line, except for the end.  I'd just move this line into `setUpNewGame()`
    // $('#buttonA').text('')
    // $('#buttonB').text('')
    // $('#buttonC').text('')
    // $('#buttonD').text('')
    // These don't really seem necessary since your immediately changing to another question.
    index++

    if (index < questionSet.length) {
      questionsAppearOnPage(index)
    } else {
      stopTimer()
      alert('Game over, you got ' + score + '/15!')
      // Try appending an element for score, or add an element in your HTML file and just adding in the score as text.  You could also have more than one message display depending on how high the user scored.
      setUpNewGame()
    }
  })
})

// Great job on this!  You made a really well designed game that plays very smoothly.  Your code is clean and well organized.  Really like how you seperated the questions into different files.
// Your approach to functional programming is pretty solid, and none of your functions are too large.  There are a couple spots that I mentioned above that could be cleaned up a little but overall this is solid.
// Besides cleaning up/condensing I'd say the biggest improvement that could be made would be replacing the `alert`s with just appending the score in the HTML file.
