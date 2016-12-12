function check() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Bugatti Chiron") {
		correct++;
}
	if (question2 == "Porsche 918") {
		correct++;
}	
	if (question3 == "yes") {
		correct++;
	}
	
	var pictures = ["Aston.gif", "giphy.gif", ".gif"];
	var messages = ["Great job! You got all 3 correct! You know your cars!", "That's just okay try more", "You really need to do better, LEARN YOUR CARS"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	
{
document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}