const initAudio = () => {
  // Création des boutons
  const player = document.getElementById("player");
  const divBtn = document.createElement("div");
  const button = document.createElement("button");
  const i = document.createElement("i");
  divBtn.classList.add("divBtn");
  button.classList.add("btnPlay");
  i.classList.add("fa-solid", "fa-play");
  divBtn.append(button);
  button.append(i);
  player.append(divBtn);

  //Chargement des audios
  const audio = new Audio("../../../assets/audio/running-night-393139.mp3");
  // Changement du bouton en pause
  button.addEventListener(
    "click",
    (event) => {
      i.classList.toggle("fa-play");
      i.classList.toggle("fa-pause");

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
};

export { initAudio };
