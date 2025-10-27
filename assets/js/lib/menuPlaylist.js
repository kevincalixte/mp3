import { stateButton } from "./audio.js";
import { playFromPlaylist, playPause } from "./audioManager.js";
import { catalogue } from "./catalogue.js";

const displaySubMenu = (value, li, index) => {
  const div = document.createElement("div");
  div.classList.add("submenu");
  div.id = "submenu" + index;
  const values = [value.titre, value.artiste, value.annee, value.album];
  const cover = value.cover;
  const subMenuValues = ["Titre :", "Artiste : ", "Annee : ", "Album : "];
  const icones = ["🎙️", "🪕", "🪗", "🪇"];
  div.style.backgroundImage = `url('./assets/img/${cover}')`;
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
  div.style.backgroundRepeat = "no-repeat";

  // BOUCLE FOR

  for (let i = 0; i < values.length; i++) {
    const p = document.createElement("p");
    const span = document.createElement("span");
    p.textContent = subMenuValues[i] + " " + values[i];
    span.textContent = icones[i];
    p.prepend(span);

    p.style.backgroundColor = "rgba(0,0,0,.5)";
    p.style.padding = ".5rem 2rem";
    p.style.borderRadius = "1rem";
    p.style.textAlign = "center";
    div.style.backroundImage = "./assets/img/" + cover;
    div.append(p);
  }

  // BOUCLE WHILE

  // let i = 0;
  // while (i < subMenuValues.length) {
  //   const p = document.createElement("p");
  //   p.textContent = value[subMenuValues[i]]
  //   p.style.backgroundColor = "rgba(0,0,0,.5)";
  //   p.style.padding = ".5rem 2rem";
  //   p.style.borderRadius = "1rem";
  //   p.style.textAlign = "center"
  //   div.style.backroundImage = "./assets/img/" + cover;
  //   div.append(p);
  //   i++;
  // }

  // div.className.add("submenu")
  li.append(div);

  // catalogue.forEach(value,index => {
  //   if (document.contains()) {

  //   }
  //   // displaySong(value, li,index);
  // });
  console.log(value);
  console.log(li);
  console.log(index);
};

const createSubMenu = (value, li, i) => {
  li.addEventListener("click", () => {
    catalogue.forEach((value, index) => {
      if (document.contains(document.getElementById("submenu" + index))) {
        document.getElementById("submenu" + index).remove();
        playPause()
        stateButton()
      
      } else {
        if (i === index) {
          displaySubMenu(value, li, i);
          currentTrack = i;
          playFromPlaylist(catalogue[i].audio);
          stateButton()
        }
      }
    });
  });
};

const initMenuPlaylist = () => {
  const playlist = document.getElementById("playlist");
  const ul = document.createElement("ul");
  playlist.append(ul);
  //Affichage des titres
  catalogue.forEach((value, index) => {
    const li = document.createElement("li");
    li.classList.add("song");
    li.textContent = value.titre;
    ul.append(li);
    //Création et affichage des sous menus
    createSubMenu(value, li, index);
  });
};
export { initMenuPlaylist};
