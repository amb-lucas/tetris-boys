let command = "";
let gameOn = false;
let gameOver = true;

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector("#start-button");
  startBtn.addEventListener("click", () => {
    gameOn = !gameOn;
    startBtn.blur();

    if (gameOn) {
      if (gameOver) {
        handleNewGame();
        gameOver = false;
      }

      hideHelpBox();
      showPause();
    } else {
      showPlay();
    }
  });
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  const { key } = e;

  if (!gameOn) return;

  if (key === "ArrowLeft" || key === "a") command = "left";
  else if (key === "ArrowRight" || key === "d") command = "right";
  else if (key === "ArrowUp" || key === "w" || key === " ") command = "rotate";
  else if (key === "ArrowDown" || key === "s") command = "down";
});
