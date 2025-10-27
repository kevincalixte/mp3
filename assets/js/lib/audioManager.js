import { catalogue } from "./catalogue.js";
const initAudioManager = (url) => {
  const audio = new Audio("./assets/audio/" + url);
  return audio;
};

// PLAY
const playPause = () => {
  if (currentTrack === 0) {
    currentTrack++;
  }
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

// NEXT
const nextTrack = () => {
  currentTrack++;
  if (currentTrack >= catalogueLength) {
    currentTrack = 0;
  }

  audio.pause();
  audio.src = "./assets/audio/" + catalogue[currentTrack].audio;
  //   console.log("URL NEXT : " + url);

  audio.play();
};

// LAST
const lastTrack = () => {
  currentTrack--;
  if (currentTrack < 0) {
    currentTrack = catalogueLength - 1;
  }

  audio.pause();
  audio.src = "./assets/audio/" + catalogue[currentTrack].audio;
  //   console.log("URL NEXT : " + url);
  audio.play();
};

// PLAY FROM PLAYLIST
const playFromPlaylist = (url) => {
  audio.pause();
  audio.src = "./assets/audio/" + url;
  audio.play();
};
// SLIDE
const slider = () => {
  const player = document.getElementById("player");
  const h = new Hammer(player);
  h.on("swipeleft swiperight"),
    (event) => {
      console.log(event);
      if (event.type === "swipeleft") {
      } else if (event.type === "swiperight") {
      }
    };
};
export { initAudioManager, playPause, nextTrack, lastTrack, playFromPlaylist };
