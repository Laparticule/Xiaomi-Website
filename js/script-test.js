/* Code Adapté - Original Gary Carino CodeOpen */

(function() {
  var questions2 = [{
    question2: "How much can you afford to spend on a smartphone?",
    choices2: ['It does not really matter as long as it is under $1000', 'A reasonable amount, I do not want to go crazy', 'If I can get it for free with a contract, I would rather do that'],
    answer2: [['mimix2', 'mi6'], ['mimax2', 'mia1', 'mi5c' ], ['redmi5', 'redmi5a', 'redmi4x', 'redminote4', 'redmi3s']],
    weight2: 5
  }, {
    question2: "What is your preferred screen size?",
    choices2: ['6" or more', '5.5"', '5" or less'],
    answer2: [['mimax2', 'mimix2'], ['mia1', 'redminote4', 'redmi5', 'mi5c', 'mi6'], ['redmi5a', 'redmi3s', 'redmi4x']],
    weight2: 2
  }, {
	question2: "Is battery life important?",
	choices2: ['Yes, I use my smartphone several hours a day', 'Not really'],
	answer2: [['mimix2', 'mimax2', 'redmi4x', 'redminote4', 'redmi3s'], ['mia1', 'mi5c', 'mi6', 'redmi5', 'redmi5a']],
    weight2: 2
  }, {
    question2: "Do you take photos with your smartphone?",
    choices2: ['Everytime!', 'Occasionally'],
    answer2: [['mimix2', 'mia1', 'mimax2', 'mi6'], ['mi5c', 'redmi5', 'redmi5a', 'redmi4x', 'redminote4', 'redmi4x']],
    weight2: 1
  }, {
    question2: "Will you need a lot of RAM? (Are you playing games or using apps?)",
    choices2: ['Yes! Yes! Yes!', 'A little bit', 'Not really...'],
    answer2: [['mimix2', 'mi6'], ['mia1', 'mimax2', 'redmi4x', 'redminote4'], ['mi5c', 'redmi5', 'redmi5a', 'redmi3s']],
    weight2: 2
  }, {
    question2: "What about CPUs?",
    choices2: ['I want the best', 'I just want something that works'],
    answer2: [['mimix2', 'mi6'], ['mia1', 'mimax2', 'mi5c', 'redmi5', 'redmi5a', 'redmi4x', 'redminote4', 'redmi3s']],
    weight2: 3
  }, {
    question2: "Is internal memory important?",
    choices2: ['Definitly', 'Not really, but there is a minimum', 'I do not care about internal memory, there needs to be a microSD card slot'],
    answer2: [['mimix2','mia1', 'mimax2', 'mi6'], ['mi5c', 'redmi4x', 'redminote4'], ['redmi3s', 'redminote4', 'redmi4x', 'redmi5a', 'redmi5', 'mimax2', 'mia1']],
    weight2: 2
  }]
  var answerTab2 = {mimix2:0, mia1:0, mimax2:0, mi6:0, mi5c:0, redmi5:0, redmi5a:0, redmi4x:0, redminote4:0, redmi3s:0};
  var questionCounter2 = 0; //Tracks question number
  var selections2 = []; //Array containing user choices
  var quiz2 = $('#quiz-2'); //Quiz div object
  
  // Display initial question
  displayNext2();
  
  // Click handler for the 'next' button
  $('#next2').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz2.is(':animated')) {        
      return false;
    }
    choose2();
    
    // If no user selection, progress is stopped
    if (isNaN(selections2[questionCounter2])) {
      alert('Please make a selection!');
    } else {
      questionCounter2++;
      displayNext2();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev2').on('click', function (e) {
    e.preventDefault();
    
    if(quiz2.is(':animated')) {
      return false;
    }
    choose2();
    questionCounter2--;
    displayNext2();
  });
  
  // Click handler for the 'Start Over' button
  $('#start2').on('click', function (e) {
    e.preventDefault();
    
    if(quiz2.is(':animated')) {
      return false;
    }
    questionCounter2 = 0;
    selections2 = [];
    displayNext2();
    $('#start2').hide();
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
  function createQuestionElement2(index2) {
      var qElement2 = $('<div>', {
      id: 'question2'
    });
    
    var header2 = $('<h2>Question ' + (index2 + 1) + ':</h2>');
    qElement2.append(header2);
    
    var question2 = $('<p>').append(questions2[index2].question2);
    qElement2.append(question2);
    
    var radioButtons2 = createRadios2(index2);
    qElement2.append(radioButtons2);
    
    return qElement2;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios2(index2) {
    var radioList2 = $('<ul>');
    var item2;
    var input2 = '';
    for (var i = 0; i < questions2[index2].choices2.length; i++) {
      item2 = $('<li>');
      input2 = '<input type="radio" name="answer2" value=' + i + ' />';
      input2 += questions2[index2].choices2[i];
      item2.append(input2);
      radioList2.append(item2);
    }
    return radioList2;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose2() {
    selections2[questionCounter2] = +$('input[name="answer2"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext2() {
    quiz2.fadeOut(function() {
      $('#question2').remove();
      
      if(questionCounter2 < questions2.length){
        var nextQuestion2 = createQuestionElement2(questionCounter2);
        quiz2.append(nextQuestion2).fadeIn();
        if (!(isNaN(selections2[questionCounter2]))) {
          $('input[value='+selections2[questionCounter2]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter2 === 1){
          $('#prev2').show();
        } else if(questionCounter2 === 0){
          
          $('#prev2').hide();
          $('#next2').show();
        }
      }else {
        var scoreElem2 = displayScore2();
        quiz2.append(scoreElem2).fadeIn();
        $('#next2').hide();
        $('#prev2').hide();
        $('#start2').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore2() {
    var score2 = $('<p>', {id: 'question2'});
    var numCorrect2 = 0;
      score2.append("<h2 style='text-indent:0px;'>Your results:</h2>")
    for (var i = 0; i < selections2.length; i++) {
      var tabIncrement = questions2[i]['answer2'][selections2[i]];
      for (var j = 0; j < tabIncrement.length; j++) {
          answerTab2[tabIncrement[j]] += questions2[i]['weight2'];
      }
    }
    var bestSmartphone = {name: "", value: 0};
    for (var key in answerTab2) {
        if (answerTab2[key] > bestSmartphone['value']) {
            bestSmartphone['name'] = key;
            bestSmartphone['value'] = answerTab2[key];
        }
    }
	score2.append('<br/><strong>Thinking about buying a new smartphone? ' + bestSmartphone['name'] + ' is the one you were waiting for!</strong><br/><br/>More details:<br/>');
    for (key in answerTab2) {
        score2.append(key + ' got ' + answerTab2[key] + ' points.<br/>');
    }
    return score2;
  }
})();
