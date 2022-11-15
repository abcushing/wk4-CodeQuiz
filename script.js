
var start = document.getElementById("startA");

var form = document.getElementById("questions");

var submit = document.getElementById("sendA");

let multChoiceA = document.querySelector("#btnA")

let multChoiceB = document.querySelector("#btnB")

let multChoiceC = document.querySelector("#btnC")

let multChoiceD = document.querySelector("#btnD")

let questionSpot = document.querySelector("#questions")

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
        a: ["FBGM ", " be nice to others ", " getting a bunch of followers on social media ", " 42 "],
        c: " 42 "
    },
]

function setTime() {
    console.log("start");
}
// timer func

function startquiz() {
    console.log("hello world");
    setTime();
    let questionIndex = 0
    let questionText = document.createElement("h4")
    let answerForA = document.createElement("h5")
    let answerForB = document.createElement("h5")
    let answerForC = document.createElement("h5")
    let answerForD = document.createElement("h5")
    let wrongMessage = document.createElement("h6")
    let rightAnswer = document.createElement("h2")
    function showQuestion() {
        let question = questions[questionIndex]
        questionText.textContent = question.q
        questionSpot.appendChild(questionText)

        let answerA = question.a[0]
        answerForA.textContent = answerA
        multChoiceA.appendChild(answerForA)
        multChoiceA.addEventListener("click", function () {
            // check if this is correct answer
            console.log(answerA)
            nextQuestion()
        })

        let answerB = question.a[1]
        answerForB.textContent = answerB
        multChoiceB.appendChild(answerForB)
        multChoiceB.addEventListener("click", function () {
            // check if this is correct answer
            console.log(answerB)
            nextQuestion()
        })

        let answerC = question.a[2]
        answerForC.textContent = answerC
        multChoiceC.appendChild(answerForC)
        multChoiceC.addEventListener("click", function () {
            // check if this is correct answer
            console.log(answerC)
            nextQuestion()
        })

        let answerD = question.a[3]
        answerForD.textContent = answerD
        multChoiceD.appendChild(answerForD)
        multChoiceD.addEventListener("click", function () {
            // check if this is correct answer
            console.log(answerD)
            nextQuestion()
        })

    }

    showQuestion()

    function nextQuestion() {
        if (questionIndex < (questions.length - 1)) {
            questionIndex++
            console.log(questionIndex)
            showQuestion()

        }
        else {
            console.log("reached end of questions")
        }

    }

    function resetText() {
        questionText.parentNode.removeChild(questionText)

        answerForA.parentNode.removeChild(answerForA)
        answerForB.parentNode.removeChild(answerForB)
        answerForC.parentNode.removeChild(answerForC)
        answerForD.parentNode.removeChild(answerForD)

        nextQuestion()

    }

    //start a timer
    //check answer, when wrong answer take time from clock
    //store answer response


    // multChoiceA.addEventListener("click", function () {
     
    
}

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button


start.addEventListener('click', startquiz)



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