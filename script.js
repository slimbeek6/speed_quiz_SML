var timeShown = document.getElementById("#timeRemaining");
var startBtn = document.querySelector("#startGame");
var startDisplay = document.getElementById("#start-container")
var questDisplay = document.getElementById("#question-container");
var scoreDisplay = document.getElementById("score-container");
var currentQuestion = document.getElementById("#question");
var finalScore = document.getElementById("finalScore");
var initials = document.getElementById("initialsInput");
var answer1 = document.getElementById("answerOption1");
var answer2 = document.getElementById("answerOption2");
var answer3 = document.getElementById("answerOption3");
var answer4 = document.getElementById("answerOption4");
var startTime = 10;
var questionCounter = 0;

// Create list of questions
var questionList = {
    question1: {
        q: "Who made the number 7 shirt famous at Manchester United?",
        a1: "Wayne Rooney",
        a2: "Cristiano Ronaldo",
        a3: "Ruud van Nistelrooij",
        a4: "George Best"
    },
    question2: {
        q: "What year was Manchester United founded?",
        a1: "1878",
        a2: "1872",
        a3: "1921",
        a4: "1888"
    }
};


console.log(questionList.question1);
console.log(questionList.question2);

currentQuestion.textContent = questionList.question1.q;
answer1.textContent = questionList.question1.a1;
answer2.textContent = questionList.question1.a2;
answer3.textContent = questionList.question1.a3;
answer4.textContent = questionList.question1.a4;


// Create a function to contain and run the full quiz
function startGame (event) {
    event.stopPropagation();
    var timeLeft = startTime;
    questDisplay.setAttribute("style", "text-align: center; display: float;");
    startDisplay.setAttribute("style", "text-align: center; display: none;");

    // Start showing questions, need to create a for loop around this to run through each question until we reach the end of the number of questions.
    for  (i = 1; i < questionList.length; i++){
        var questionNum = "question"+i
        currentQuestion.textContent = questionList.questionNum.q;
        answer1.textContent = questionList.question1.a1;
        answer2.textContent = questionList.question1.a2;
        answer3.textContent = questionList.question1.a3;
        answer4.textContent = questionList.question1.a4;
    };

    // Create interval function to countdown the timer
    var timeInterval = setInterval(function() {
        timeShown.textContent = timeLeft;
        timeLeft--;

        // End game if time is 0
        if (timeLeft === 0) {
            finalScore.textContent = timeLeft;
            clearInterval(timeInterval);
            questDisplay.setAttribute("style", "text-align: center; display: none;");
            scoreDisplay.setAttribute("style", "text-align: center; display: float;");
        }

    }, 1000);
}

console.log(localStorage.getItem("score"));

// Create a listener to run the startGame function when the button is pressed

startBtn.addEventListener("click", startGame);

// Create a listener to select an answer


// Create a listener to submit the user's initials

initials.addEventListener("submit", function(event) {
    event.stopPropagation();
    localStorage.setItem("initials", initials.textContent);
    localStorage.setItem("score", timeLeft);
})

// Create a function to populate the high scores list on the highscores page.
