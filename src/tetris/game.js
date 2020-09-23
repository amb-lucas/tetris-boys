// New Piece
const newPiece = () => {
  curPiece = RandomInt(0, tetrominoes.length - 1);

  let curPos = 0;
  tetrominoes[curPiece][0].forEach((p) => {
    curPos = Math.max(curPos, p % width);
  });

  curPosition = width + Math.floor(width / 2 - (curPos + 1) / 2);
  curRotation = 0;
};

// Game commands
const handleNewGame = () => {
  undraw();

  placedPositions = [];
  currentScore = 0;
  newPiece();

  draw();
};

const handleGameOver = () => {
  showGameOver();
  showPlay();
  gameOver = true;
  gameOn = false;
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

// Handle moves processing
const checkLine = (k) => {
  for (let i = 1; i < width - 1; i++) {
    if (!placedPositions.includes(width * k + i)) return false;
  }
  return true;
};

const handleCompleteLines = () => {
  let completedLines = 0;
  for (let k = height - 2; k > 0; k--) {
    if (checkLine(k)) {
      currentScore += 100;
      completedLines++;

      placedPositions = placedPositions.filter(
        (pos) => pos < k * width || pos >= (k + 1) * width
      );
      placedPositions = placedPositions.map((pos) => {
        if (pos < k * width) return pos + width;
        return pos;
      });

      k++;
    }
  }

  if (completedLines === 1) showO();
  else if (completedLines === 2) showOo();
  else if (completedLines === 3) showOoo();
  else if (completedLines === 4) showOooo();
};

const placePiece = () => {
  currentPiece().forEach((pos) => placedPositions.push(pos));
  handleCompleteLines();
};

const processMove = (dir) => {
  if (dir === "down") {
    if (checkDown() === false) {
      placePiece();
      newPiece();

      draw();

      if (checkColision()) {
        return handleGameOver();
      }
    }
  }

  undraw();

  if (dir === "right") tryRight();
  else if (dir === "left") tryLeft();
  else if (dir === "rotate") tryRotate();

  if (gameOn) draw();
};

// Turns
document.addEventListener("DOMContentLoaded", () => {
  const timeInterval = 50;
  const curLim = 8;
  let curTurn = 0;

  setInterval(() => {
    if (gameOn) {
      curTurn++;

      if (command) {
        if (command === "left") processMove("left");
        else if (command === "right") processMove("right");
        else if (command === "down") {
          processMove("down");
          currentScore += 10;
        } else if (command === "rotate") processMove("rotate");

        command = "";
      }

      if (curTurn === curLim) {
        curTurn = 0;
        processMove("down");
      }
    }
  }, timeInterval);
});
