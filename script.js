var timeShown = document.getElementById("#timeRemaining");
var startBtn = document.querySelector("#startGame");
var startDisplay = document.getElementById("#start-container")
var questDisplay = document.getElementById("#question-container");
var scoreDisplay = document.getElementById("score-container");
var startTime = 100;
var timeElapsed = 0;

// Create list of questions

// Create a function to contain and run the full quiz
function startGame (event) {
    event.stopPropagation();
    var timeLeft = startTime;
    questDisplay.setAttribute("style", "text-align: center; display: float;");
    startDisplay.setAttribute("style", "text-align: center; display: none");

    // Create interval function to countdown the timer
    var timeInterval = setInterval(function() {
        timeShown.textContent = timeLeft;
        timeLeft--;

        // End game if time is 0
        if (timeLeft === 0){
            questDisplay.setAttribute("style", "text-align: center; display: none;");
            scoreDisplay.setAttribute("style", "text-align: center; display: float;");
        }
        
    }, 1000);
}


// Create a listener to run the startGame function when the button is pressed

startBtn.addEventListener("click", startGame);

// Create a function to populate the high scores list on the highscores page.
