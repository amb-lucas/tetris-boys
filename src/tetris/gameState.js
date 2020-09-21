let placedPositions = [];
let currentScore = 0;
let hightScore = 0;

let curPiece = 0;
let curRotation = 0;
let curPosition = 0;

const currentPiece = () =>
  tetrominoes[curPiece][curRotation].map((p) => p + curPosition);
