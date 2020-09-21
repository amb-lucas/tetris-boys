let scoreDisplay;
let squares;
let gameOverImg;
let playButton;

document.addEventListener("DOMContentLoaded", () => {
  scoreDisplay = document.getElementById("score");
  squares = Array.from(document.querySelectorAll(".grid table tr td"));
  gameOverImg = document.getElementById("game-over");
  playButton = document.getElementById("start-button");
});

const draw = () => {
  scoreDisplay.textContent = currentScore.toString();

  placedPositions.forEach((index) => {
    squares[index].classList.add("placedTetromino");
  });

  currentPiece().forEach((index) => {
    squares[index].classList.add("tetromino");
  });
};

const undraw = () => {
  squares.forEach((sq) => sq.classList.remove("tetromino"));
  squares.forEach((sq) => sq.classList.remove("placedTetromino"));
};

const showGameOver = () => {
  gameOverImg.classList.add("game-over-visible");
};
const hideGameOver = () => {
  gameOverImg.classList.remove("game-over-visible");
};

const showPlay = () => {
  playButton.textContent = "PLAY";
};
const showPause = () => {
  playButton.textContent = "PAUSE";
};
