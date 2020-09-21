const width = 12;
const height = 22;

const lTet = [
  [1, width + 1, 2 * width + 1, 2 * width + 2],
  // 0 1 0
  // 0 1 0
  // 0 1 1
  [width, width + 1, width + 2, 2],
  // 0 0 1
  // 1 1 1
  // 0 0 0
  [0, 1, width + 1, 2 * width + 1],
  // 1 1 0
  // 0 1 0
  // 0 1 0
  [width, width + 1, width + 2, 2 * width],
  // 0 0 0
  // 1 1 1
  // 1 0 0
];

const qTet = [
  [0, 1, width, width + 1],
  // 1 1
  // 1 1
];

const tTet = [
  [1, width, width + 1, width + 2],
  // 0 1 0
  // 1 1 1,
  [0, width, width + 1, 2 * width],
  // 1
  // 1 1
  // 1
  [0, 1, 2, width + 1],
  // 1 1 1
  // 0 1 0
  [1, width, width + 1, 2 * width + 1],
  // 0 1
  // 1 1
  // 0 1
];

const iTet = [
  [1, width + 1, 2 * width + 1, 3 * width + 1],
  // 0 1 0 0
  // 0 1 0 0
  // 0 1 0 0
  // 0 1 0 0
  [width, width + 1, width + 2, width + 3],
  // 0 0 0 0
  // 1 1 1 1
  // 0 0 0 0
  // 0 0 0 0
];

const sTet = [
  [width, width + 1, 1, 2],
  // 0 1 1
  // 1 1 0
  [0, width, width + 1, 2 * width + 1],
  // 1 0
  // 1 1
  // 0 1
];

const zTet = [
  [0, 1, width + 1, width + 2],
  // 1 1 0
  // 0 1 1
  [1, width, width + 1, 2 * width],
  // 0 1
  // 1 1
  // 1 0
];

const tetrominoes = [lTet, qTet, tTet, iTet, sTet, zTet];

const wallPositions = [];
for (let i = 0; i < height; i++) {
  wallPositions.push(width * i);
  wallPositions.push(width * i + width - 1);
}
for (let i = 1; i < width - 1; i++) {
  wallPositions.push(i);
  wallPositions.push((height - 1) * width + i);
}
