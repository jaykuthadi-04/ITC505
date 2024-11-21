const board = document.getElementById('board');
const restartButton = document.getElementById('restartButton');
const size = 5; // 5x5 board

let squares = [];

// Initialize the board with squares
function initBoard() {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', () => toggleSquare(i));
        board.appendChild(square);
        squares.push(square);
    }
    randomizeBoard();
}

// Toggle the square and its neighbors
function toggleSquare(index) {
    squares[index].classList.toggle('is-off');
    // Toggle neighboring squares
    const neighbors = [index - size, index + size, index - 1, index + 1];
    neighbors.forEach(neighbor => {
        if (neighbor >= 0 && neighbor < squares.length && 
            (index % size !== 0 || neighbor !== index - 1) && // Prevent toggling left edge
            (index % size !== size - 1 || neighbor !== index + 1)) { // Prevent toggling right edge
            squares[neighbor].classList.toggle('is-off');
        }
    });
    checkWin();
}

// Randomize the board while ensuring it's solvable
function randomizeBoard() {
    // Start with all squares off
    squares.forEach(square => square.classList.remove('is-off'));
    
    // Randomly toggle squares
    for (let i = 0; i < Math.floor(Math.random() * 25); i++) {
        const randomIndex = Math.floor(Math.random() * (size * size));
        toggleSquare(randomIndex);
    }
}

// Check if the player has won
function checkWin() {
    const allOff = squares.every(square => !square.classList.contains('is-off'));
    if (allOff) {
        window.alert("You win!");
    }
}


// Initialize the game
initBoard();

function startTimer() {
    clearInterval(timer);
    secondsElapsed = 0;
    timerDisplay.textContent = "00:00"; // Reset timer display
    timer = setInterval(() => {
        secondsElapsed++;
        const minutes = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
        const seconds = String(secondsElapsed % 60).padStart(2, "0");
        timerDisplay.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

restartButton.addEventListener("click", () => {
    randomizeBoard();
    startTimer();
});
