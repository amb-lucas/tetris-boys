let scoreDisplay;
let squares;
let gameOverImg;
let oImg, ooImg, oooImg, ooooImg;
let playButton;

document.addEventListener("DOMContentLoaded", () => {
  scoreDisplay = document.getElementById("score");
  squares = Array.from(document.querySelectorAll(".grid table tr td"));
  gameOverImg = document.getElementById("game-over");
  oImg = document.getElementById("o");
  ooImg = document.getElementById("oo");
  oooImg = document.getElementById("ooo");
  ooooImg = document.getElementById("oooo");
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

const showO = () => {
  oImg.classList.add("oooo-visible");
  setTimeout(() => {
    oImg.classList.remove("oooo-visible");
  }, 3000);
};
const showOo = () => {
  ooImg.classList.add("oooo-visible");
  setTimeout(() => {
    ooImg.classList.remove("oooo-visible");
  }, 3000);
};
const showOoo = () => {
  oooImg.classList.add("oooo-visible");
  setTimeout(() => {
    oooImg.classList.remove("oooo-visible");
  }, 3000);
};
const showOooo = () => {
  ooooImg.classList.add("oooo-visible");
  setTimeout(() => {
    ooooImg.classList.remove("oooo-visible");
  }, 3000);
};
