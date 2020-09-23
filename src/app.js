let scoreDisplay;
let squares;
let gameOverImg;
let oImg, ooImg, oooImg, ooooImg;
let playButton, musicButton;
let buttonImg;

let music = new Audio("./assets/musiquinhamanera.mp3");
music.loop = true;

document.addEventListener("DOMContentLoaded", () => {
  scoreDisplay = document.getElementById("score");
  squares = Array.from(document.querySelectorAll(".grid table tr td"));
  gameOverImg = document.getElementById("game-over");
  oImg = document.getElementById("o");
  ooImg = document.getElementById("oo");
  oooImg = document.getElementById("ooo");
  ooooImg = document.getElementById("oooo");
  playButton = document.getElementById("start-button");
  musicButton = document.getElementById("music-button");
  buttonImg = document.getElementById("button-img");

  musicButton.addEventListener("click", () => {
    const state = musicButton.getAttribute("data-state");
    if (state === "mute") {
      musicButton.setAttribute("data-state", "nonmute");
      buttonImg.setAttribute("src", "./assets/volume-up.svg");

      music.play();
    } else {
      musicButton.setAttribute("data-state", "mute");
      buttonImg.setAttribute("src", "./assets/no-sound.svg");

      music.pause();
    }
  });
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
