let musicButton, buttonImg;

const music = new Audio("./assets/musiquinhamanera.mp3");
music.loop = true;
music.volume = 0.5;

document.addEventListener("DOMContentLoaded", () => {
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
