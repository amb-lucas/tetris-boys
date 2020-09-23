let helpButton;
let instructionsBox;

const helpMusic = new Audio("./assets/helpshort.mp3");
helpMusic.loop = true;

document.addEventListener("DOMContentLoaded", () => {
  helpButton = document.getElementById("help-button");
  instructionsBox = document.getElementById("help-box");

  helpButton.addEventListener("click", () => {
    const state = helpButton.getAttribute("data-state");
    if (state === "inactive") showHelpBox();
    else hideHelpBox();
  });
});

const showHelpBox = () => {
  instructionsBox.classList.add("help-box-visible");
  helpButton.setAttribute("data-state", "active");
  helpMusic.play();
  music.volume = 0.2;
};
const hideHelpBox = () => {
  instructionsBox.classList.remove("help-box-visible");
  helpButton.setAttribute("data-state", "inactive");
  helpMusic.pause();
  music.volume = 0.5;
};
