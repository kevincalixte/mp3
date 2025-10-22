import { nextTrack, playPause, lastTrack } from "./audioManager.js";
import { catalogue } from "./catalogue.js";

const initAudio = () => {
  // DEFINITION DES ELEMENTS HTML
  const player = document.getElementById("player");
  const divBtn = document.createElement("div");
  divBtn.classList.add("divBtn");

  // CREATION DES BOUTONS
  const buttonLast = document.createElement("button");
  const buttonPlay = document.createElement("button");
  const buttonNext = document.createElement("button");
  // CREATION DES ELEMENTS i
  const iLast = document.createElement("i");
  const iPlay = document.createElement("i");
  const iNext = document.createElement("i");
  // AJOUT DES CLASSES POUR LES BOUTONS
  buttonLast.classList.add("buttonLast");
  buttonPlay.classList.add("buttonPlay");
  buttonNext.classList.add("buttonNext");
  // AJOUT DES ID POUR LES BOUTONS
  iLast.id = "buttonLast";
  iPlay.id = "buttonPlay";
  iNext.id = "buttonNext";
  // AJOUT DES CLASSES POUR les i
  iLast.classList.add("fa-solid", "fa-backward-step");
  iPlay.classList.add("fa-solid", "fa-play");
  iNext.classList.add("fa-solid", "fa-forward-step");
  // AJOUT DES BOUTONS DANS LA DIV PARENT
  divBtn.append(buttonLast);
  divBtn.append(buttonPlay);
  divBtn.append(buttonNext);
  // AJOUT DES i DANS LES BOUTONS
  buttonLast.append(iLast);
  buttonPlay.append(iPlay);
  buttonNext.append(iNext);
  // AJOUT DE LA DIV PARENT DANS LE PLAYER
  player.append(divBtn);

  // PLAY
  buttonPlay.addEventListener("click", (event) => {
    playPause();
    stateButton();
  });

  // NEXT
  buttonNext.addEventListener("click", (event) => {
    nextTrack(catalogue[currentTrack].audio);
    stateButton();
  });

  // LAST
  buttonLast.addEventListener("click", (event) => {
    lastTrack(catalogue[currentTrack].audio, catalogue);
    stateButton();
  });
};

// STATUT DES BOUTONS
const stateButton = () => {
  const buttonPlay = document.getElementById("buttonPlay");

  if (audio.paused) {
    buttonPlay.classList.add("fa-play");
    buttonPlay.classList.remove("fa-pause");
  } else {
    buttonPlay.classList.remove("fa-play");
    buttonPlay.classList.add("fa-pause");
  }
};



export { initAudio, stateButton };
