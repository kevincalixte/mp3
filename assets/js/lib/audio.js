import { catalogue } from "./catalogue.js";
// console.log(catalogue[0].titre);

const initAudio = () => {
  // Création des boutons
  const player = document.getElementById("player");
  const divBtn = document.createElement("div");
  divBtn.classList.add("divBtn");

  const buttonLast = document.createElement("button");
  const buttonPlay = document.createElement("button");
  const buttonNext = document.createElement("button");
  const iLast = document.createElement("i");
  const iPlay = document.createElement("i");
  const iNext = document.createElement("i");
  buttonLast.classList.add("buttonLast");
  buttonPlay.classList.add("buttonPlay");
  buttonNext.classList.add("buttonNext");
  iLast.classList.add("fa-solid", "fa-backward-step");
  iPlay.classList.add("fa-solid", "fa-play");
  iNext.classList.add("fa-solid", "fa-forward-step");
  divBtn.append(buttonLast);
  divBtn.append(buttonPlay);
  divBtn.append(buttonNext);
  buttonLast.append(iLast);
  buttonPlay.append(iPlay);
  buttonNext.append(iNext);
  player.append(divBtn);

  //Chargement des audios
  const audio = new Audio(
    "../../../assets/audio/" + catalogue[currentTrack].audio
  );
  // Changement du bouton en pause
  buttonPlay.addEventListener(
    "click",
    (event) => {
      iPlay.classList.toggle("fa-play");
      iPlay.classList.toggle("fa-pause");

      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }

      // if ( i.className === "fa-solid fa-play") {
      //      i.className = "fa-solid fa-pause"
      // } else if ( i.className = "fa-solid fa-pause") {
      //      i.className = "fa-solid fa-play"
      // }
    }

    // Affichage du morceau
    // Affichage du cover
    // Lecture du morceau
  );

  // ACTIONS SUIVANT PRECEDENT
  buttonNext.addEventListener("click", (event) => {
    currentTrack++;
    // console.log(currentTrack);

    for (let i = 0; i < catalogue.length; i++) {
      audio.src = "../../../assets/audio/" + catalogue[currentTrack].audio;
      
      if (currentTrack === catalogue.length) {
        currentTrack = 0;
      }

      // selon le morceau en cours play le morceau suivant
    }

    audio.play()
  });
  //
};

export { initAudio };
