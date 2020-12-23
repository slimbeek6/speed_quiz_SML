var timeShown = document.getElementById("#timeRemaining");
var answerCheck = document.getElementById("right");
var startBtn = document.querySelector("#startGame");
var startDisplay = document.getElementById("#start-container")
var questDisplay = document.getElementById("#question-container");
var scoreDisplay = document.getElementById("#score-container");
var currentQuestion = document.getElementById("#question");
var finalScore = document.getElementById("finalScore");
var initials = document.getElementById("initialsInput");
var submitInitials = document.getElementById("submit-initials");
var answerList = document.querySelector("#answerOptions");
var answer1 = document.getElementById("answerOption1");
var answer2 = document.getElementById("answerOption2");
var answer3 = document.getElementById("answerOption3");
var answer4 = document.getElementById("answerOption4");
var goToHighScores = document.getElementById("goToHighScores");
var goBack = document.getElementById("goBack");
var clearScores = document.getElementById("clear-scores");
var scoreList = document.getElementById("#score-list");
var subScoreList = document.getElementById("#scoreList");
var startTime = 100;


// Create list of questions
var questionList = [
    {
        q: "Who made the number 7 shirt famous at Manchester United?",
        a1: "Wayne Rooney",
        a2: "David Beckham",
        a3: "Ruud van Nistelrooij",
        a4: "George Best",
        ca: "4"
    },
    {
        q: "What year was Manchester United founded?",
        a1: "1878",
        a2: "1872",
        a3: "1921",
        a4: "1888",
        ca: "1"
    },
    {
        q: "Who is the recordholder for goals scored for United?",
        a1: "Cristiano Ronaldo",
        a2: "Wayne Rooney",
        a3: "Paul Ince",
        a4: "Bobby Charlton",
        ca: "2"
    },
    {
        q: "How many first division titles does United have?",
        a1: "15",
        a2: "18",
        a3: "20",
        a4: "23",
        ca: "3"
    },
    {
        q: "What is the mascot of Manchester United?",
        a1: "Gunners",
        a2: "Red Devils",
        a3: "Falcons",
        a4: "Mean Machine",
        ca: "2"
    },
    {
        q: "Who is the current manager of United?",
        a1: "Sir Alex Ferguson",
        a2: "Wayne Rooney",
        a3: "Jose Mourinho",
        a4: "Ole Gunnar Solksjaer",
        ca: "4"
    }
];


var questionIndex = 0;
var timeLeft = 0;

// Define a function that displays the question and answer options, that is dynamic to choose questions and answers from a question array.
function displayQuestion(){
    currentQuestion.textContent = questionList[questionIndex].q;
    answer1.textContent = questionList[questionIndex].a1;
    answer2.textContent = questionList[questionIndex].a2;
    answer3.textContent = questionList[questionIndex].a3;
    answer4.textContent = questionList[questionIndex].a4;
}

// Create a function to contain and run the full quiz
function startGame (event) {
    event.stopPropagation();
    questionIndex = 0;
    timeLeft = startTime;
    questDisplay.setAttribute("style", "text-align: center; display: float;");
    startDisplay.setAttribute("style", "text-align: center; display: none;");

    // Start by showing the first question
        displayQuestion();

    // Create interval function to countdown the timer
    var timeInterval = setInterval(function() {
        timeShown.textContent = timeLeft;
        timeLeft--;

        // End game if time is 0 or the player has answered all of the questions
        if (timeLeft === 0 || questionIndex === questionList.length) {
            finalScore.textContent = timeLeft;
            clearInterval(timeInterval);
            questDisplay.setAttribute("style", "text-align: center; display: none;");
            scoreDisplay.setAttribute("style", "text-align: center; display: float;");
        }

    }, 1000);
}

// Create a listener to run the startGame function when the button is pressed

startBtn.addEventListener("click", startGame);

// Create a listener to select an answer

answerList.addEventListener("click", function(event){
    var answer = event.target.value;
    if (answer == questionList[questionIndex].ca) {
        answerCheck.textContent = "Correct!";
    }
    else {
        answerCheck.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
    }
    questionIndex++;
    displayQuestion();
});

// Create a listener to submit the user's initials

submitInitials.addEventListener("click", function(init) {
    init.stopPropagation();
    var newScore = document.createElement("li");
    localStorage.setItem("initials", initials.value);
    localStorage.setItem("score", timeLeft);
    newScore.textContent = localStorage.getItem("initials") + " -- " + localStorage.getItem("score");
    subScoreList.appendChild(newScore);
    showHighScores();
});

// Create a function to populate the high scores list on the highscores page.
function showHighScores () {
    // turn off all other sections
    startDisplay.setAttribute("style", "text-align: center; display: none;");
    questDisplay.setAttribute("style", "text-align: center; display: none;");
    scoreDisplay.setAttribute("style", "text-align: center; display: none;");

    // call up the saved scores page
    
    scoreList.setAttribute("style", "text-align: center; display: float;");
}


goToHighScores.addEventListener("click", showHighScores);

clearScores.addEventListener("click" , function(event) {
    event.stopPropagation();
    while (subScoreList.hasChildNodes()) {  
        subScoreList.removeChild(subScoreList.firstChild);
    }
});

goBack.addEventListener("click" , function(event) {
    event.stopPropagation();
    scoreList.setAttribute("style", "text-align: center; display: none;");
    startDisplay.setAttribute("style", "text-align: center; display: float;");
});