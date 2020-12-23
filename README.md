# Manchester United Speed Quiz

## Summary
The request was to create a time based online quiz around the history of and facts about Manchester United FC.

Using a combination of HTML, CSS, and javascript, I built an application that provided users with a quiz that asks questions as a timer counts down until they have answered each question. 

The user's score is set as the amount of time remaining on the timer when the user finishes the quiz. For each question answered incorrectly, the timer is reduced by ten seconds as well.

Once the game has ended, the user is provided with their score, and the option to enter their initials. If they submit their initials, their score and initials will be added to a high scores list, which will be displayed upon submitting initials.

At this point, the user can either go back to the beginning of the game and play again, or clear the high score list (which can be accessed from the link at the top left of the page at any time).

<hr>

## Example of Page by Game Section

**Start Page**

![Picture of Start Page](./Assets/pic-of-start.png)

**Quiz Page**

![Picture of Quiz Page](./Assets/pic-of-site.png)

**End Game Page**

![Picture of End Game Page](./Assets/pic-of-end.png)

**High Scores Page**

![Picture of High Scores Page](./Assets/pic-of-scores.png)
<hr>

## Pseudo Code & Key Code Elements

**HTML Setup**

Begin by creating a high score link and a timer at the top of the container. This area will not change regardless of stage of the game that is being shown below.

Then create 4 distinct sections with four IDs (Start, Quiz, End, High Scores) to provide these four different elements to show when their part of the game is ready to be presented.

Within the first section, whose id is set to Start of the game, we need a title, directions, and a start button.
```
<section class="container" style="text-align: center;" id="#start-container">
            <h1 id = "#header">Coding Quiz Challenge</h1>
            <p id = "#instructions">Try to answer the following questions as quickly as possible. Wrong answers will reduce score by 10, each second elapsed reduces score by 1. User score is time remaining when all questions have been answered</p>
            <button id = "startGame">Start Quiz</button>
        </section>
```

Then create the Quiz section, which will house the dynamic display that will update during gameplay. This includes a question area with a unique identifier, and four buttons with unique identifiers, to place answers in them.

Next create the End section, which will show the user their score, as well as provide them with a way to input initials and save their score to a high scores list.

Finally create the High Scores section, which will be the high scores list with all the scores previously submitted in the end section, as well as a button to navigate back to the Start section, and a button that clears the high scores list.

After this work is done, make sure to link out to the javascript document, and ensure all the sections other than the Start section to include a style that hides them until they are called, using the display: none style.

**Initial Javascript Setup**

Once the HTML sections are ready with unique identifiers, we need to create a large number of variables in the java that tie back to these different elements on the DOM. Here is the list of locations within the html document that are referenced in the js:
```
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
```
Once you've connected your java to all the elements on the DOM that you know you need to touch at some point during the game, define a timer variable to add to the timer on the DOM.

After this, create an array of objects, with questions, answer options, and an answer key in each object. This will be used to update the quiz page in the "Question" and "Answer" areas.

Here is an example of the first object:
```
var questionList = [
    {
        q: "Who made the number 7 shirt famous at Manchester United?",
        a1: "Wayne Rooney",
        a2: "David Beckham",
        a3: "Ruud van Nistelrooij",
        a4: "George Best",
        ca: "4"
    },
```
Finally define a timer variable, a starting amount of time, and a question index to be able to call the right questions.

**Display Function**

Create a display function, which references each section of the Quiz page, and adds the correct question information to each element, including the question being asked, and the answer options.  The correct question information should be coming from the question list array.

```
function displayQuestion(){
    currentQuestion.textContent = questionList[questionIndex].q;
    answer1.textContent = questionList[questionIndex].a1;
    answer2.textContent = questionList[questionIndex].a2;
    answer3.textContent = questionList[questionIndex].a3;
    answer4.textContent = questionList[questionIndex].a4;
}
```

****


<hr>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-us/docs/web/javascript)

## Deployed Link

* [See Live Site](https://slimbeek6.github.io/speed_quiz_SML/)


## Authors

**Shaun Limbeek** 
- [Link to Portfolio](https://slimbeek6.github.io/SML_Portfolio/index.html)
- [Link to Github](https://github.com/slimbeek6/)
- [Link to LinkedIn](https://www.linkedin.com/in/shaun-limbeek/)