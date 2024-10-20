const questions = {
    riddles: [
      {
        question: "What has keys but can't open locks?",
        answer1: "Piano",
        answer2: "Lock",
        correct: "Piano"
      },
      {
        question: "What has to be broken before you can use it?",
        answer1: "Egg",
        answer2: "Glass",
        correct: "Egg"
      }
    ],
    generalKnowledge: [
      {
        question: "What is the capital of Australia?",
        answer1: "Sydney",
        answer2: "Canberra",
        correct: "Canberra"
      },
      {
        question: "Which planet is known as the Red Planet?",
        answer1: "Mars",
        answer2: "Jupiter",
        correct: "Mars"
      }
    ],
    sports: [
      {
        question: "In which sport can you score a 'goal'?",
        answer1: "Football",
        answer2: "Tennis",
        correct: "Football"
      },
      {
        question: "Which sport is known as the 'King of Sports'?",
        answer1: "Football",
        answer2: "Basketball",
        correct: "Football"
      }
    ],
    popularPlaces: [
      {
        question: "Where is the Taj Mahal located?",
        answer1: "India",
        answer2: "Egypt",
        correct: "India"
      },
      {
        question: "Which city is known as 'The Big Apple'?",
        answer1: "Los Angeles",
        answer2: "New York",
        correct: "New York"
      }
    ]
  };
  
  const popupStart = document.getElementById('popup-start');
  const startButton = document.getElementById('startGame');
  const stayButton = document.getElementById('stay');
  const popupQuestion = document.getElementById('popup-question');
  const questionText = document.getElementById('question');
  const answer1Button = document.getElementById('answer1');
  const answer2Button = document.getElementById('answer2');
  const gameOverPopup = document.getElementById('game-over');
  const restartButton = document.getElementById('restart');
  
  let currentLevel = 1;
  let currentQuestionIndex = 0;
  let questionsArray = Object.values(questions);
  let currentTopic = questionsArray[0];
  
  // Show start popup on page load
  window.onload = () => {
    popupStart.style.display = 'block';
  };
  
  // Start game when clicking the Start button
  startButton.addEventListener('click', () => {
    popupStart.style.display = 'none';
    startLevel();
  });
  
  // Stay button functionality
  stayButton.addEventListener('click', () => {
    alert("Stay and come back when you're ready to play!");
  });
  
  // Start each level
  function startLevel() {
    if (currentLevel > 4) {
      gameOverPopup.style.display = 'block';
      return;
    }
  
    currentTopic = questionsArray[currentLevel - 1];
    currentQuestionIndex = 0;
    showQuestion();
  }
  
  // Show the next question in the current level
  function showQuestion() {
    const currentQuestion = currentTopic[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answer1Button.textContent = currentQuestion.answer1;
    answer2Button.textContent = currentQuestion.answer2;
    popupQuestion.style.display = 'block';
  
    answer1Button.onclick = () => handleAnswer(currentQuestion.answer1, currentQuestion.correct);
    answer2Button.onclick = () => handleAnswer(currentQuestion.answer2, currentQuestion.correct);
  }
  
  // Handle answer selection and progress through the game
  function handleAnswer(selectedAnswer, correctAnswer) {
    popupQuestion.style.display = 'none';
    if (selectedAnswer === correctAnswer) {
      currentQuestionIndex++;
      if (currentQuestionIndex < currentTopic.length) {
        setTimeout(showQuestion, 500);
      } else {
        currentLevel++;
        setTimeout(startLevel, 500);
      }
    } else {
      alert("Wrong Answer! Try again!");
      setTimeout(showQuestion, 500);
    }
  }
  
  // Restart the game after finishing all levels
  restartButton.addEventListener('click', () => {
    gameOverPopup.style.display = 'none';
    currentLevel = 1;
    startLevel();
  });
  

