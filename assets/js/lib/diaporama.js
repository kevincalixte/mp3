import { stateButton } from "./audio.js";
import { catalogue } from "./catalogue.js";
import { nextTrack, lastTrack, playPause } from "./audioManager.js";
// state + nexttrack

const initDiapo = () => {
  const diapo = document.getElementById("diapo");
  const dessus = document.getElementById("dessus");
  const dessous = document.getElementById("dessous");
  const titreDessus = document.getElementById("titreDessus");
  const titreDessous = document.getElementById("titreDessous");
  dessus.src = "./assets/img/" + catalogue[0].cover;
  dessous.src = "./assets/img/" + catalogue[0].cover;
  titreDessus.textContent = catalogue[0].titre;
  // titreDessous.textContent = catalogue[0].titre;
  let mvtCss = "";
  let scale = 100;
  let scaleMax = 150;
  const mc2 = new Hammer.Manager(diapo);
  const pinch = new Hammer.Pinch();
  mc2.add(pinch);
  mc2.on("pinch", (event) => {
    // console.log(event);
    if (event.additionalEvent === "pinchout") {
      if (scale < scaleMax) {
        scale += 1;
      }
    } else if (event.additionalEvent === "pinchin") {
      if (scale > 100) {
        scale -= 1;
      }
    }
    console.log(scale);

    imgDiapo.style.transform = `scale(${scale}%)`;
  });
  const mc = new Hammer(diapo);
  mc.on("swipeleft swiperight pinch tap", (event) => {
    console.log(event);
    // une premiere condition pour detecter le geste de mon user
    if (event.type === "swipeleft") {
      mvtCss = "moveleft";
      // une seconde position pour gerer le currentTrack qui
      // va gerer le src de mon image à venir
      if (currentTrack === catalogue.length - 1) {
        currentTrack = 0;
      } else {
        currentTrack++;
      }
      lastTrack();
      dessous.src = "./assets/img/" + catalogue[currentTrack].cover;
      dessus.classList.add("transition", "moveleft");
      titreDessous.textContent = catalogue[currentTrack].titre;
      titreDessus.classList.add("transition", "moveleft");
      setTimeout(() => {
        dessus.src = "./assets/img/" + catalogue[currentTrack].cover;
        dessus.classList.remove("transition", "moveleft");
      }, 1000);
      // swipeRightImg()
    } else if (event.type === "swiperight") {
      mvtCss = "moveright";
      // a l'inverse
      if (currentTrack === 0) {
        currentTrack = catalogue.length - 1;
      } else {
        currentTrack--;
      }
      dessous.src = "./assets/img/" + catalogue[currentTrack].cover;
      dessus.classList.add("transition", "moveright");
      titreDessus.textContent = catalogue[currentTrack].titre;
      titreDessous.classList.add("transition", "moveright");
      setTimeout(() => {
        dessus.src = "./assets/img/" + catalogue[currentTrack].cover;
        dessus.classList.remove("transition", "moveright");
      }, 1000);
      nextTrack();
    } else if (event.type === "tap") {
      playPause();
    }
    // playFromPlaylist(catalogue[currentTrack].audio);
    stateButton();
    // imgDiapo.src = "./assets/img/" + catalogue[currentTrack].cover;
  });
};

const swipeRightImg = () => {
  const img2 = document.getElementById("img2");
  img2.style.overflow = "";
};
export { initDiapo };
