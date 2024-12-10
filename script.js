const questions = [
    {
        question:"Como nos se conhecemos?",
        options:["Por amiga em comum","Pelo instagram","Pelo Colegio","Pelo whatsapp"],
        correct:0,
        points:10
    },
    { 
        question:"Qual a data de aniversario do nosso Namoro?",
        options:["4 de agosto","10 de maio","20 de janeiro"],
        correct:0,
        points:15
    },
    { 
        question:"Qual Meu carro favorito?",
        options:["jetta","BMW m2","jetta-gli"],
        correct:0,
        points:15
    },
    { 
        question:"Qual Meu Prato Preferido?",
        options:["cachorro quente","pizza","hambuguer"],
        correct:0,
        points:15
    },
    {
        question:"Onde foi O primeiro Lugar que a gente se viu pela priemira vez?",
        options:["No mcDonalds","no seu condominio","Alameda"],
        correct:0,
        points:15
    }
];

let currentQuestionIndex = 0;
let score = 0;
// Elementos do DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");
const questionTitle = document.getElementById("question-title");
const optionsDiv = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const finalScore = document.getElementById("final-score");

// Função para iniciar o jogo
document.getElementById("start-button").addEventListener("click", () => {
  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  showQuestion();
});

// Função para exibir uma pergunta
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.question;
  optionsDiv.innerHTML = ""; // Limpa as opções anteriores

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(index));
    optionsDiv.appendChild(button);
  });
}

// Função para verificar a resposta
function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correct) {
    score += currentQuestion.points;
  }

  nextButton.style.display = "block"; // Exibe o botão "Próxima"
}

// Função para avançar para a próxima pergunta
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextButton.style.display = "none";
  } else {
    endGame();
  }
});

// Função para finalizar o jogo
function endGame() {
  quizScreen.style.display = "none";
  endScreen.style.display = "block";
  finalScore.textContent = score;
}

// Função para reiniciar o jogo
document.getElementById("restart-button").addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  endScreen.style.display = "none";
  startScreen.style.display = "block";

  window.addEventListener("load", () => {
    const introScreen = document.getElementById("intro-screen");
    const startScreen = document.getElementById("start-screen");

    setTimeout(() => {
      introScreen.style.display = "none";
      startScreen.style.display = "block";
    }, 3000);
  });
});