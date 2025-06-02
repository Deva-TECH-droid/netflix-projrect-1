const questions  = [
    {
        question: "who won the purple cap in IPL 2016 ",
        answers: [
            {text: "Imran Tahir", correct: false},
            {text: "Amit Mishra", correct: false},
            {text: "Bhuvneshwar Kumar", correct: true},
            {text: "Kagiso Rabbada", correct: false},
            
        ]
    },
    {
        
        question: "which player has scored highest run in single addition of IPL",
        answers: [
            {text: "David Warner", correct: false},
            {text: "Virat Kohli", correct: true},
            {text: "KL Rahul", correct: false},
            {text: "Subhaman Gill", correct: false},
        ]
    },
    {
        
        question: "which team has scored higest run at the end of the powerpaly",
        answers: [
            {text: "KKR", correct: false},
            {text: "CSK", correct: false},
            {text: "PBKS", correct: false},
            {text: "SRH", correct: true},
        ]   
    },
    {
        
        question: "what is the highest total  in the history of IPL",
        answers: [
            {text: "287", correct: true},
            {text: "276", correct: false},
            {text: "263", correct: false},
            {text: "259", correct: false},
        ]   
    },
    {
        
        question: "which bowler have the most number of wicket in powerplay",
        answers: [
            {text: "Bhuvneshwar Kumar", correct: false},
            {text: "Deepak  Chahar", correct: false},
            {text: "Trent Boult", correct: true},
            {text: "Kagiso Rabbada", correct: false},
        ]   
    },
    {
        
        question: "why csk got banned in 2016 and 2017 ",
        answers: [
            {text: "They cant able to win a single match", correct: false},
            {text: "Beacuse they known for this", correct: true},
            {text: "there is no money on team captain", correct: false},
            {text: "Just for fun", correct: false},
        ]   
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// function selectAnswer(e) {
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if (isCorrect) {
//         button.classList.add("correct");
//     } else {
//         button.classList.add("incorrect");
//     }
// }
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct"); // Adds green color
        score++;
    } else {
        selectedBtn.classList.add("incorrect"); // Adds red color
    }

    // Disable all buttons after selection
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Highlight the correct answer
        }
    });

    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", handleNextButton);


startQuiz();


// function showQuestion() {
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.
//     question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });

  
        
//         // button.addEventListener("click", () => selectAnswer(button, answer.correct)); 
// }

// function resetState(){
//     nextButton.style.display = "none";
//     while(answerButtons.firstchild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }
    


