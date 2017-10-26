$(document).ready(function() {

  var hardQuestions =
    { //q1
      question: "How many states did Joey get in 'Chandler's dumb states game'?",
      possibleAnswers: ['a) 14', 'b) 48', 'c) 56', 'd) 30'],
      flags: [false, false, true, false],
      answer: 'c) 56'
    }

    { //q2
      question: 'Ross made up a fake boyfriend for Phoebe, what was his name and profession?',
      possibleAnswers: [
        'a) Gary, Cop',
        'b) David, Scientist',
        'c) Vikram, Kite Designer',
        'd) Duncan, Ice Dancer'
      ],
      flags: [false, false, true, false],
      answer: 'c) Vikram, Kite Designer'
    }

    { //q3
      question: 'Whose son did Monica invite to Thanksgiving?',
      possibleAnswers: ['a) Richard', 'b) Paulo', 'c) Ross', 'd) Gunther'],
      flags: [true, false, false, false],
      answer: 'a) Richard'
    }

    { //q4
      question: "What does Erica suggest to Chander the baby's name should be if it's a boy?",
      possibleAnswers: [
        'a) Jiminy Billy Bob',
        'b) Shovely Joe',
        'c) Billy Bob',
        'd) Bing-a-ling Bing'
      ],
      flags: [true, false, false, false],
      answer: 'a) Jiminy Billy Bob'
    }

    { //q5
      question: 'What soap opera star did Rachel go on a date with?',
      possibleAnswers: [
        'a) David Canary',
        'b) Stuart Damon',
        'c) Kash Ford',
        'd) Jonathan Jackson'
      ],
      flags: [false, false, true, false],
      answer: 'c) Kash Ford'
    }

    { //q6
      question: "Phoebe sets Rachel up on a blind date, what is the date's profession?",
      possibleAnswers: [
        'a) Sells silk screen t-shirts',
        'b) Owns a restaurant',
        'c) Kite Designer',
        'd) Ice Dancer'
      ],
      flags: [true, false, false, false],
      answer: 'a) Sells silk screen t-shirts'
    }

    { //q7
      question: "What is Ross's comic book called?",
      possibleAnswers: [
        'a) Dino Boy',
        'b) Science Boy',
        'c) Science Man',
        'd) Science Kid'
      ],
      flags: [false, true, false, false],
      answer: 'b) Science Boy'
    }

    { //q8
      question: "In 'The One That Could Have Been', where does Phoebe work?",
      possibleAnswers: [
        'a) Morgan Stanley',
        'b) Ernst and Young',
        'c) JP Morgan Chase',
        'd) Merrill Lynch'
      ],
      flags: [false, false, false, true],
      answer: 'd) Merrill Lynch'
    }

    { //q9
      question: 'What does Parker (Alec Baldwin) call the Long Island Expressway?',
      possibleAnswers: [
        'a) A Concrete Miracle',
        'b) A Concrete Jungle',
        'c) The Great Expressway',
        'd) A Winding Miracle'
      ],
      flags: [true, false, false, false],
      answer: 'a) A Concrete Miracle'
    }

    { //q10
      question: "Complete this sentence, 'Gum would be...'",
      possibleAnswers: [
        'a) Awesome',
        'b) Great',
        'c) Perfection',
        'd) Perfect'
      ],
      flags: [false, false, true, false],
      answer: 'c) Perfection'
    }

    { //q11
      question: 'What did Joey read to Emma on her 1st birthday?',
      possibleAnswers: [
        'a) Love You Forever by Robert Munsch',
        'b) The Velvateen Rabit by Margery Williams',
        'c) The Very Hungary Caterpillar by Eric Carle',
        'd) Where the Wild Things Are by Maurice Sendak'
      ],
      flags: [true, false, false, false],
      answer: 'a) Love You Forever by Robert Munsch'
    }

    { //q12
      question: "What is Joey's Cabbage Patch Kid Doll named?",
      possibleAnswers: [
        'a) Alicia-May Emory',
        'b) Cassidy-May Emory',
        'c) Hugsie',
        'd) Original Hugsie'
      ],
      flags: [true, false, false, false],
      answer: 'a) Alicia-May Emory'
    }

    { //q13
      question: 'Who is Chandler stuck in an ATM vestibule with?',
      possibleAnswers: [
        'a) Jill Goodacre',
        'b) Elle McPhearson',
        'c) Yasmine Bleeth',
        'd) Christie Brinkley'
      ],
      flags: [true, false, false, false],
      answer: 'a) Jill Goodacre'
    }

    { //q14
      question: "What did Rachel sing at Barry and Mindy's wedding?",
      possibleAnswers: [
        'a) Sweet Caroline',
        'b) The Copacabana',
        'c) Brown Eyed Girl',
        'd) Afternoon Delight'
      ],
      flags: [false, true, false, false],
      answer: 'b) The Copacabana'
    }

    { //q15
      question: "What song does Monica sing at Mike's piano bar?",
      possibleAnswers: [
        'a) We Are the Champions',
        'b) Joy to the World',
        'c) Delta Dawn',
        'd) Sweet Caroline'
      ],
      flags: [false, false, true, false],
      answer: 'c) Delta Dawn'
    }
})
