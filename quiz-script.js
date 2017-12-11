var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length
//var totQuestions = questions1.length;  // NEW NEW NEW NEW NEW (questions1)



var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');





/*	// NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW
var container = document.getElementById('quizContainer1');
var questionEl1 = document.getElementById('question1');
var opt11 = document.getElementById('opt11');
var opt12 = document.getElementById('opt12');
var opt13 = document.getElementById('opt13');
var opt14 = document.getElementById('opt14');
var opt15 = document.getElementById('opt15');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
*/


	
/*  // NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW
function loadQuestion1 (questionIndex1) {
	var q1 = questions1[questionIndex1];
	questionEl.textContent = (questionIndex1 + 1) + '. ' + q1.question1;
	opt11.textContent = q1.option11;
	opt12.textContent = q1.option12;
	opt13.textContent = q1.option13;
	opt14.textContent = q1.option14;
	opt15.textContent = q1.option15;
};



	// NEW NEW NEW NEW NEW NEW
function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=checkbox]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions1[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion1(currentQuestion);
}

loadQuestion1(currentQuestion);
*/




function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
