const questions = [
    // Easy Questions
    {
        question: "1) What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Personal Unit", "Central Personal Unit", "Computer Processing Unit"],
        answer: "Central Processing Unit",
        difficulty: "easy"
    },
    {
        question: "2) Which company developed the Python programming language?",
        options: ["Microsoft", "Google", "Apple", "Guido van Rossum"],
        answer: "Guido van Rossum",
        difficulty: "easy"
    },
    {
        question: "3) What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris",
        difficulty: "easy"
    },
    {
        question: "4) Which planet is closest to the Sun?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        answer: "Mercury",
        difficulty: "easy"
    },
    {
        question: "5) What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
        difficulty: "easy"
    },
    {
        question: "6) What does 'HTTP' stand for in web addresses?",
        options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Protocol", "HyperTransfer Text Protocol"],
        answer: "HyperText Transfer Protocol",
        difficulty: "easy"
    },
    {
        question: "7) What does 'USB' stand for?",
        options: [
            "Universal Serial Bus",
            "Universal Service Bus",
            "Uniform Serial Bus",
            "Uniform Service Bus"
        ],
        answer: "Universal Serial Bus",
        difficulty: "easy"
    },
    {
    question: "8) What does URL' stand for in web browsing?",
        options: [
            "Uniform Resource Locator",
            "Universal Resource Link",
            "Uniform Resource Link",
            "Universal Resource Locator",
        ],
        answer: "Uniform Resource Locator",
        difficulty: "easy"
    },
    {
        question: "9) Which of the following is a common operating system for personal computers?",
        options: [
            "Linux",
            "Apache",
            "MySQL",
            "Java"
        ],
        answer: "Linux",
        difficulty: "easy"
    },
 
    {
            question: "10) Who is the current IPS officer of Nagapattinam district?",
            options: ["S. Senthilkumar", "Harsh Singh", " Viswanathan", "G. Karthikeyan"],
            answer: "Harsh Singh",
            difficulty: "easy"
    },
    
        {
            question: " Who is the current Class In-Charge for the 3rd year CSE A section Department?",
            options: [
                "praveen sir",
                "kannan sir",
                "Immanuel sir",
                "Robert Brown"
            ],
            answer: "Immanuel sir",
            difficulty: "easy"
        },
    
    {
        question: "11) What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Cascading Style Script"],
        answer: "Cascading Style Sheets",
        difficulty: "medium"
    },
    {
        question: "12) What does RAM stand for?",
        options: [ "Read Access Memory","Random Access Memory", "Randomly Accessed Memory", "Readily Accessed Memory"],
        answer: "Random Access Memory",
        difficulty: "medium"
    },
    {
        question: "13) Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci",
        difficulty: "medium"
    },
    {
        question: "14) What does 'SSD' stand for in computer storage?",
        options: [
            "System Storage Device",
            "Solid State Disk",
            "System Speed Drive",
            "Solid State Drive",
        ],
        answer: "Solid State Drive",
        difficulty: "medium"
    },
    {
        question: "15) What does 'BIOS' stand for in computer systems?",
        options: [
            
            "Binary Integrated Operating System",
            "Basic Integrated Output System",
            "Binary Input/Output Software",
            "Basic Input/Output System",
        ],
        answer: "Basic Input/Output System",
        difficulty: "medium"
    }, 
    {
        question: "16) What does 'FTP' stand for in file transfer protocols?",
        options: [ "Fast Transfer Protocol", "File Transmission Process","File Transfer Protocol", "Fast Transmission Protocol"],
        answer: "File Transfer Protocol",
        difficulty: "medium"
    },
    
    {
        question: "17) Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
        difficulty: "medium"
    },
    {
        question: "18) What does GUI stand for in computing?",
        options: [ "General User Interface", "Graphical Unified Interface", "General Unified Interface","Graphical User Interface",],
        answer: "Graphical User Interface",
        difficulty: "medium"
    },
    {
        question: "19) What does 'VPN' stand for in network security?",
        options: ["Variable Public Network", "Virtual Protocol Node", "Virtual Private Network","Variable Private Node"],
        answer: "Virtual Private Network",
        difficulty: "medium"
    },
    {
        question: "Who is the current Head of the 3rd year CSE Department?",
        options: [
           
            "manivannan sir",
            "Bala sir",
            "immanuel sir",
            "Noorul Ameen Sir",
        ],
        answer: "Noorul Ameen Sir",
        difficulty: "medium"
    },
    {
        question: "20) What does 'DNS' stand for in networking?",
        options: ["Domain Name System", "Dynamic Network Service", "Data Name Service", "Domain Name Server"],
        answer: "Domain Name System",
        difficulty: "medium"
    },
    
    
    
    // Hard Questions
    {
        question: "21) Who developed the C++ programming language?",
        options: ["Bill Gates", "Steve Jobs", "Bjarne Stroustrup", "Dennis Ritchie"],
        answer: "Bjarne Stroustrup",
        difficulty: "hard"
    },
    {
        question: "22) Who is the founder of Zoho Corporation?",
        options: ["Sundar Pichai", "Arun Sathia", "Sridhar Vembu", "Narayana Murthy"],
        answer: "Sridhar Vembu",
        difficulty: "hard"
    },
    {
        question: "23) Who is the current CEO of Google?",
        options: ["Sundar Pichai", "Larry Page", "Sergey Brin", "Eric Schmidt"],
        answer: "Sundar Pichai",
        difficulty: "hard"
    },
    
    
    {
        question: "24) What does SQL stand for?",
        options: ["Structured Query Language", "Standard Query Language", "Structured Question Language", "Standardized Query Language"],
        answer: "Structured Query Language",
        difficulty: "hard"
    },
    {
        question: "25) What is the smallest prime number?",
        options: ["1", "2", "3", "0"],
        answer: "2",
        difficulty: "hard"
    },
    {
        question: "26) What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au",
        difficulty: "hard"
    },
    {
        question: "27) Who is the current Collector of Nagapattinam district?",
        options: ["G. Karthikeyan I.A.S", "P.Aakash I.A.S", "S. S. Prabhakar I.A.S", "K. N. Ramesh I.A.S"],
        answer: "P.Aakash I.A.S",
        difficulty: "hard"
    },
    {
        question: "28) Who is the current CEO of Instagram?",
        options: [ "Kevin Systrom","Adam Mosseri", "Mark Zuckerberg", "Sheryl Sandberg"],
        answer: "Adam Mosseri",
        difficulty: "hard"
    },
    {
        question: "29) Who is one of the co-founders of Tesla, Inc.?",
        options: [ "Jeff Bezos", "Bill Gates","Elon Musk", "Larry Page"],
        answer: "Elon Musk",
        difficulty: "hard"
    },
    {
        question: "30) Who is the current CEO of Snap Inc.?",
        options: ["Evan Spiegel", "Bobby Murphy", "Reggie Brown", "Kara Swisher"],
        answer: "Evan Spiegel",
        difficulty: "hard"
    },
    
    
    
    
];

let currentQuestionIndex = 0;
let score = 0;
let filteredQuestions = [];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const quizContainer = document.getElementById('quiz-container');
const welcomePage = document.getElementById('welcomePage');
const quizSection = document.getElementById('quizSection');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    welcomePage.classList.add('hidden');
    quizSection.classList.remove('hidden');
});

document.getElementById('easy').addEventListener('click', () => {
    startQuiz('easy');
});

document.getElementById('medium').addEventListener('click', () => {
    startQuiz('medium');
});

document.getElementById('hard').addEventListener('click', () => {
    startQuiz('hard');
});

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < filteredQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

document.getElementById('restart').addEventListener('click', restartQuiz);

function showQuestion() {
    const question = filteredQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option');
        optionButton.addEventListener('click', () => selectAnswer(option, optionButton));
        optionsElement.appendChild(optionButton);
    });
    nextButton.classList.add('hidden');
}

function selectAnswer(selectedOption, optionButton) {
    const question = filteredQuestions[currentQuestionIndex];
    const correctOption = question.answer;
    
    if (selectedOption === correctOption) {
        optionButton.style.backgroundColor = 'green'; // Set selected option to green if correct
        score++;
    } else {
        optionButton.style.backgroundColor = 'red'; // Set selected option to red if incorrect
        // Find the correct option button and set it to green
        const correctOptionButton = [...optionsElement.children].find(btn => btn.textContent === correctOption);
        if (correctOptionButton) {
            correctOptionButton.style.backgroundColor = 'green';
        }
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < filteredQuestions.length) {
        nextButton.classList.remove('hidden');
    } else {
        showResult();
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    showQuestion();
    resetOptionColors(); // Reset option button colors
}

function resetOptionColors() {
    // Reset all option button colors to default
    const optionButtons = document.querySelectorAll('.option');
    optionButtons.forEach(button => {
        button.style.backgroundColor = '';
    });
}

// Call resetOptionColors() when starting the quiz to ensure all buttons start with default color
startButton.addEventListener('click', () => {
    welcomePage.classList.add('hidden');
    quizSection.classList.remove('hidden');
    resetOptionColors();
});

function showResult() {
    quizContainer.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.textContent = score + '/' + filteredQuestions.length;
}


function startQuiz(difficulty) {
    filteredQuestions = questions.filter(question => question.difficulty === difficulty);
    currentQuestionIndex = 0;
    score = 0;
    filteredQuestions.sort(() => Math.random() - 0.5); // Shuffle questions
    resultElement.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    showQuestion();
}