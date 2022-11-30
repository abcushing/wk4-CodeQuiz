var start = document.getElementById("startA");
var form = document.getElementById("questions");
var submit = document.getElementById("sendA");
let secCountdown = 30
let timeEl = document.querySelector('#timeEl')
let responseMessage = document.querySelector('#responseMessage')
let scoreEl = document.querySelector('#Score')
let score= 0

let multChoiceA = document.querySelector("#btnA")
let multChoiceB = document.querySelector("#btnB")
let multChoiceC = document.querySelector("#btnC")
let multChoiceD = document.querySelector("#btnD")
let questionSpot = document.querySelector("#questions")

// questions for quiz
const questions = [
    {
        q: "why is the sky blue?",
        a: ["42 ", " The light reflecting off oxygen molecules in the air ", "idk it looks gray rn ", "because flat earth "],
        c: " The light reflecting off oxygen molecules in the air "
    },

    {
        q: "What is the air speed velocity of an unladen swallow?",
        a: ["What do you mean, African or European? ", " 42 ", " Ni! ", " Blue, no yellow "],
        c: "What do you mean, African or European? "
    },

    {
        q: "In skateboarding a Hardflip is what?",
        a: ["An Inward Kickflip ", " a 900 ", " a slam ", " very difficult "],
        c: "An Inward Kickflip "
    },

    {
        q: "The Denver Broncos are owned by whom?",
        a: ["Walmart ", "Condoleezza Rice", " Sir Lewis Hamilton ", " All of the Above "],
        c: " All of the Above "
    },

    {
        q: "What is the motto for the state of New Hampshire?",
        a: ["Live Free or Die ", " Vacationland ", " Nil sine Numine ", "  He who transplanted sustains "],
        c: "Live Free or Die "
    },

    {
        q: "What is the meaning of life?",
        a: [" be nice to others ", " getting a bunch of followers on social media ", " 42 ", "cats"],
        c: " 42 "
    },
]


// timer func

function startquiz() {
    setTime();
    let questionIndex = 0
    let questionText = document.createElement("h4")
    let answerForA = document.createElement("h5")
    let answerForB = document.createElement("h5")
    let answerForC = document.createElement("h5")
    let answerForD = document.createElement("h5")
    let wrongMessage = document.createElement("h6")
    let correctMessage = document.createElement("h5")

    function showQuestion() {
        let question = questions[questionIndex]
        questionText.textContent = question.q
        questionSpot.appendChild(questionText)

        let answerA = question.a[0]
        answerForA.textContent = answerA
        multChoiceA.appendChild(answerForA)
      

        let answerB = question.a[1]
        answerForB.textContent = answerB
        multChoiceB.appendChild(answerForB)
        

        let answerC = question.a[2]
        answerForC.textContent = answerC
        multChoiceC.appendChild(answerForC)
      

        let answerD = question.a[3]
        answerForD.textContent = answerD
        multChoiceD.appendChild(answerForD)
       
    
    multChoiceA.addEventListener("click", function () {
        // check if this is correct answer
        if (question.c==answerA) {
            correctAnswer()
    score++
         } else {
            wrongAnswer()
            secCountdown-=2
         }
        nextQuestion()
    })

    multChoiceB.addEventListener("click", function () {
        // check if this is correct answer
        if (question.c==answerB) {
            correctAnswer()
    
            score++
        } else {
           wrongAnswer()
           secCountdown-=2
         }
        nextQuestion()
    })

    multChoiceC.addEventListener("click", function () {
        // check if this is correct answer
        if (question.c==answerC) {
            correctAnswer()
            score++
        } else {
           wrongAnswer()
           secCountdown-=2
         }
        nextQuestion()
    })

    multChoiceD.addEventListener("click", function () {
        // check if this is correct answer
        if (question.c==answerD) {
            correctAnswer()
            score++
        } else {
           wrongAnswer()
           secCountdown-=2
         }
        nextQuestion()
    })
    }


    function wrongAnswer () {
        wrongMessage.textContent= "Wrong Answer! "
        responseMessage.appendChild(wrongMessage)
        setTimeout(function(){
            responseMessage.removeChild(wrongMessage)
        }, 1000)
    }
    function correctAnswer () {
        let correctText = 'correctAnswer'
        correctMessage.textContent= correctText
        responseMessage.appendChild(correctMessage)
        setTimeout(function(){
            responseMessage.removeChild(correctMessage)
        }, 1000)
    }

    // showQuestion()
    nextQuestion()
    function nextQuestion() {
        questionIndex++
        if (questions.length> questionIndex) {
            console.log(questionIndex, "question index")
            showQuestion()

        }
        else {
            console.log("reached end of questions")
            endQuiz()
        }

    }


    //start a timer
    //check answer, when wrong answer take time from clock
    function setTime(){
        let timerInterval = setInterval(function(){
          secCountdown--;
          timeEl.textContent = "Time: " + secCountdown;
          scoreEl.textContent = 'Score: ' + score
      
          //time can be negative if all questions answered wrong
          if(secCountdown == 0 || secCountdown < 0){
            clearInterval(timerInterval);
            timeEl.style.display = "none";
            theCard.style.display = "none"
            window.location.href="./highscore.html"
          }
        }, 3000);//set for 30 sec
      }


 }

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button


start.addEventListener('click', startquiz)
startBtn.addEventListener("click", function(){
    startBtn.style.display = "none";
    timeEl.style.display = "block";
    setTime();
    startquiz();
  })

function endQuiz() {
    let finalScore = score
    console.log('end of the quiz')
    JSON.stringify(localStorage.setItem('recentScore', finalScore))
    gotohighScore()

}

function gotohighScore() {
    window.location.href='./highscore.html'
}

// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```