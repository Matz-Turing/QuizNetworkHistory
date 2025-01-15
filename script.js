
const quizData = [
    {
        question: "Qual foi o precursor da internet moderna?",
        options: ["ARPANET", "TCP/IP", "Ethernet", "WWW"],
        correct: 0,
        explanation: "A ARPANET foi criada na década de 1960 como um projeto do Departamento de Defesa dos EUA e é considerada o precursor da internet moderna."
    },
    {
        question: "Em que década a ARPANET foi criada?",
        options: ["1950", "1960", "1970", "1980"],
        correct: 1,
        explanation: "A ARPANET foi criada na década de 1960, iniciando como uma rede experimental que conectava universidades e centros de pesquisa."
    },
    {
        question: "Qual tecnologia é usada para atribuir endereços únicos a dispositivos em uma rede?",
        options: ["DNS", "IP (Protocolo de Internet)", "HTTP", "URL"],
        correct: 1,
        explanation: "O Protocolo de Internet (IP) é responsável por atribuir endereços únicos a dispositivos em redes de computadores."
    },
    {
        question: "Quem é considerado o criador da World Wide Web?",
        options: ["Bill Gates", "Tim Berners-Lee", "Vint Cerf", "Steve Jobs"],
        correct: 1,
        explanation: "Tim Berners-Lee inventou a World Wide Web em 1989, introduzindo um sistema que combinava URLs, HTTP e HTML."
    },
    {
        question: "Qual protocolo é usado para transferir páginas da web?",
        options: ["SMTP", "FTP", "HTTP", "SSH"],
        correct: 2,
        explanation: "O protocolo HTTP (HyperText Transfer Protocol) é usado para transferir páginas da web pela internet."
    },
    {
        question: "O que significa a sigla DNS?",
        options: ["Data Network System", "Domain Name System", "Digital Name Server", "Dynamic Network Service"],
        correct: 1,
        explanation: "DNS significa Domain Name System, um sistema que traduz nomes de domínio em endereços IP."
    },
    {
        question: "Em que ano foi introduzido o protocolo TCP/IP como padrão na ARPANET?",
        options: ["1973", "1980", "1983", "1990"],
        correct: 2,
        explanation: "O protocolo TCP/IP tornou-se padrão na ARPANET em 1º de janeiro de 1983, marcando o início da internet moderna."
    },
    {
        question: "Qual dessas tecnologias permitiu a criação de redes locais (LANs)?",
        options: ["Wi-Fi", "Ethernet", "Bluetooth", "Fiber Optics"],
        correct: 1,
        explanation: "A Ethernet, criada na década de 1970, foi a tecnologia que permitiu a criação de redes locais (LANs)."
    },
    {
        question: "Qual foi o primeiro navegador web amplamente usado?",
        options: ["Netscape Navigator", "Internet Explorer", "Mosaic", "Firefox"],
        correct: 2,
        explanation: "O Mosaic, lançado em 1993, foi o primeiro navegador amplamente utilizado e popularizou o acesso à internet."
    },
    {
        question: "Em que ano o Google foi fundado?",
        options: ["1995", "1998", "2000", "2004"],
        correct: 1,
        explanation: "O Google foi fundado em 1998 por Larry Page e Sergey Brin enquanto estudavam na Universidade de Stanford."
    }
];


const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const finalScoreElement = document.getElementById("final-score");
const restartButton = document.getElementById("restart-button");

let currentQuestionIndex = 0;
let score = 0;


function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersContainer.innerHTML = ""; 

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("answer-button");
        button.addEventListener("click", () => handleAnswer(index));
        answersContainer.appendChild(button);
    });

    nextButton.disabled = true; 
}


function handleAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correct;

    
    Array.from(answersContainer.children).forEach(button => {
        button.disabled = true;
        button.style.backgroundColor = selectedIndex === currentQuestion.correct ? "#b3ffb3" : "#ffb3b3";
    });

    if (isCorrect) {
        score++;
        const explanation = document.createElement("p");
        explanation.textContent = currentQuestion.explanation;
        explanation.style.color = "#000";
        explanation.style.marginTop = "10px";
        explanation.style.textAlign = "justify";
        answersContainer.appendChild(explanation);
    }

    nextButton.disabled = false; 
}


function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}


function showResult() {
    questionElement.style.display = "none";
    answersContainer.style.display = "none";
    nextButton.style.display = "none";
    resultContainer.style.display = "block";
    finalScoreElement.textContent = `Sua pontuação: ${score}/${quizData.length}`;
}


function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionElement.style.display = "block";
    answersContainer.style.display = "block";
    nextButton.style.display = "block";
    resultContainer.style.display = "none";
    loadQuestion();
}


nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);


loadQuestion();
