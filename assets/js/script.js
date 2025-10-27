import { initAudio } from "./lib/audio.js";
import { initAudioManager } from "./lib/audioManager.js";
import { catalogue } from "./lib/catalogue.js";
import { initMenuPlaylist } from "./lib/menuPlaylist.js";
import { initDiapo } from "./lib/diaporama.js";

globalThis.currentTrack = 0;
globalThis.catalogueLength = catalogue.length;
globalThis.audio = initAudioManager(catalogue[currentTrack].audio);
initAudio();
initMenuPlaylist()
initDiapo()

