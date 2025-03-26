// This file contains the JavaScript code that handles the quiz functionality.

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.options.map((option, index) => `
                <li onclick="selectAnswer(${index})">${option}</li>
            `).join('')}
        </ul>
        <button onclick="nextQuestion()">Next Question</button>
    `;
}

function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('li');

    if (selectedIndex === question.answer) {
        options[selectedIndex].style.backgroundColor = 'green';
        score++;
    } else {
        options[selectedIndex].style.backgroundColor = 'red';
        options[question.answer].style.backgroundColor = 'green';
    }

    options.forEach((option, index) => {
        option.onclick = null; // Disable further clicks
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <h2>Quiz Finished!</h2>
        <p>Your score: ${score} out of ${questions.length}</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions();
    displayQuestion();
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Initialize the quiz
shuffleQuestions();
displayQuestion();