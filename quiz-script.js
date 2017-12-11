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
var opt5 = document.getElementById('opt5');
var opt6 = document.getElementById('opt6');
var opt7 = document.getElementById('opt7');
var opt8 = document.getElementById('opt8');
var opt9 = document.getElementById('opt9');
var opt10 = document.getElementById('opt10');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');



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
	
	if(questionIndex < 4){

		opt1.textContent = q.option1;
		opt2.textContent = q.option2;
		opt3.textContent = q.option3;
		opt4.textContent = q.option4;
		
	} else if(questionIndex >= 4 && questionIndex < 7){		
		opt5.textContent = q.option5;
		opt6.textContent = q.option6;
		opt7.textContent = q.option7;
		opt8.textContent = q.option8;
		opt9.textContent = q.option9;
	} else {
		opt10.textContent = q.option10;
	}
};

/*
function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};
*/

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
