import { initAudio } from "./lib/audio.js";
import { initAudioManager } from "./lib/audioManager.js";
import { catalogue } from "./lib/catalogue.js";
globalThis.currentTrack = 0;
globalThis.catalogueLength = catalogue.length;
globalThis.audio = initAudioManager(catalogue[currentTrack].audio);
initAudio();

