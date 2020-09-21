// New Piece
const newPiece = () => {
  curPiece = RandomInt(0, tetrominoes.length - 1);
  curPosition =
    width + width / 2 - Math.floor(tetrominoes[curPiece].length / 2);
  curRotation = 0;
};

// Check for moves

const checkColision = () => {
  return currentPiece().some((pos) => {
    if (wallPositions.includes(pos)) return true;
    if (placedPositions.includes(pos)) return true;
    return false;
  });
};

const checkDown = () => {
  curPosition += width;
  const allowMove = !checkColision();
  if (!allowMove) curPosition -= width;
  return allowMove;
};
const tryLeft = () => {
  curPosition -= 1;
  if (checkColision()) curPosition += 1;
};
const tryRight = () => {
  curPosition += 1;
  if (checkColision()) curPosition -= 1;
};
const tryRotate = () => {
  const lastRotation = curRotation;
  curRotation = (curRotation + 1) % tetrominoes[curPiece].length;

  if (checkColision()) curRotation = lastRotation;
};

// Handle moves processes
const placePiece = () => {
  currentScore += 10;
  currentPiece().forEach((pos) => placedPositions.push(pos));
};

const processMove = (dir) => {
  undraw();

  if (dir === "down") {
    if (checkDown() === false) {
      placePiece();
      newPiece();
    }
  } else if (dir === "right") tryRight();
  else if (dir === "left") tryLeft();
  else if (dir === "rotate") tryRotate();

  draw();
};

// Game commands
const newGame = () => {
  newPiece();
  placedPositions = [];
  currentScore = 0;
  draw();
};

document.addEventListener("DOMContentLoaded", () => {
  const timeInterval = 50;
  const curLim = 8;
  let curTurn = 0;

  setInterval(() => {
    if (gameOn) {
      curTurn++;

      if (gameOver === true) {
        newGame();
        gameOver = false;
      }

      if (command) {
        if (command === "left") processMove("left");
        else if (command === "right") processMove("right");
        else if (command === "down") processMove("down");
        else if (command === "rotate") processMove("rotate");

        command = "";
      }

      if (curTurn === curLim) {
        curTurn = 0;
        processMove("down");
      }
    }
  }, timeInterval);
});
