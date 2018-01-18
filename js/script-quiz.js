/* Code Adapté - Original Gary Carino CodeOpen */

(function() {
  var questions = [{
    question: "Which product isn't sold by Xiaomi?",
    choices: ['A smart mirror', 'A rice cooker', 'A smart flowerpot', 'A washing machine', 'A smart toothbrush'],
    correctAnswer: 0
  }, {
    question: "What is Xiaomi mascot?",
    choices: ['A cute cat called Mita', 'A bunny with a red star on its hat', 'A fierce panda with an orange  scarf', 'An adventurous raccoon'],
    correctAnswer: 1
  }, {
	question: "Which one of the following products is Xiaomi selling?",
	choices: ['A 3D printer', 'A small car', 'A smart toilet seat', 'A toaster'],
	correctAnswer: 2
  }, {
    question: "Xiaomi designs resemble a well known brand. Which one is it?",
    choices: ['Samsung', 'Nokia', 'Huawei', 'Apple'],
    correctAnswer: 3
  }, {
    question: "Which brand first launched a borderless phone?",
    choices: ['Sharp', 'Xiaomi', 'Apple', 'Samsung'],
    correctAnswer: 0
  }, {
    question: "How many Xiaomi products do you think the creator of this website owns?",
    choices: ['Less than 3 products', '3-5 products', '5-10 products', '10-15 products', 'More than 15 products'],
    correctAnswer: 3
  }];
  
  var questionCounter = 0; //Tracks question number
//   var mimixCounter = 0;
  var selections = []; //Array containing user choices
  var quiz = $('#quiz-1'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
      var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>', {id: 'question'});
    var numCorrect = 0;
      score.append("<h2 style='text-indent:0px;'>Your results:</h2>")
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
		score.append(questions[i].question + " <span style='color:green; opacity: 0.6;'>" + questions[i].choices[selections[i]] + '</span> ');
      }
	  else {
		score.append(questions[i].question + " <span style='color:red; opacity: 0.6;'>" + questions[i].choices[selections[i]] + '</span> ');
	  }
	  score.append("<br/>");
    }
	score.append('<br/><strong>You got ' + numCorrect + ' questions out of ' + questions.length + ' right</strong>');

    return score;
  }
})();
