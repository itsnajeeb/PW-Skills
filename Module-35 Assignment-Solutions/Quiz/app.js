// Sample Quiz Questions
const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: 1 },
    { question: "What is the capital of France?", options: ["Paris", "London", "Rome", "Berlin"], answer: 0 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: 1 },
    { question: "What is 5 x 6?", options: ["30", "25", "35", "40"], answer: 0 },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: 2 },
    { question: "What is the largest mammal?", options: ["Elephant", "Whale", "Shark", "Dolphin"], answer: 1 },
    { question: "Which gas do plants need for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
    { question: "What is the boiling point of water?", options: ["50°C", "75°C", "100°C", "150°C"], answer: 2 },
    { question: "Which organ pumps blood?", options: ["Lungs", "Brain", "Heart", "Liver"], answer: 2 },
    { question: "What is 10 / 2?", options: ["2", "5", "10", "20"], answer: 1 },
  ];
  
  // State Variables
  let currentQuestionIndex = 0;
  let score = 0;
  
  // DOM Elements
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionNumber = document.getElementById("question-number");
  const scoreDisplay = document.getElementById("score");
  
  // Initialize Quiz
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = ""; // Clear previous options
  
    // Render Options
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.className =
        "w-full py-2 px-4 text-left border rounded hover:bg-gray-100";
      button.addEventListener("click", () => checkAnswer(index, button));
      optionsContainer.appendChild(button);
    });
  
    // Update Question Number
    questionNumber.textContent = `Question ${currentQuestionIndex + 1}/${
      questions.length
    }`;
  }
  
  // Check Answer
  function checkAnswer(selectedIndex, button) {
    const correctIndex = questions[currentQuestionIndex].answer;
    if (selectedIndex === correctIndex) {
      button.classList.add("bg-green-200");
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    } else {
      button.classList.add("bg-red-200");
      // Highlight the correct answer
      Array.from(optionsContainer.children)[correctIndex].classList.add(
        "bg-green-200"
      );
    }
  
    // Disable all buttons
    Array.from(optionsContainer.children).forEach((btn) => {
      btn.disabled = true;
    });
  }
  
  // Handle Next Button
  nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      // Quiz Finished
      questionText.textContent = `Quiz Completed! Your Score: ${score}`;
      optionsContainer.innerHTML = "";
      nextBtn.classList.add("hidden");
      restartBtn.classList.remove("hidden");
    }
  });
  
  // Handle Restart Button
  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = "Score: 0";
    restartBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
    loadQuestion();
  });
  
  // Load the first question
  loadQuestion();
  