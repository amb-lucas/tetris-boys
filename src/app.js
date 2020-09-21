let scoreDisplay;
let squares;

document.addEventListener("DOMContentLoaded", () => {
  scoreDisplay = document.getElementById("score");
  squares = Array.from(document.querySelectorAll(".grid table tr td"));
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
};
