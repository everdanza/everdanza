import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
const VIDEO_DATA = {
  url: 'https://www.youtube.com/watch?v=cHfrfyDLfgw',
  title: '¿POR QUE NO VEMOS CINE ARGENTINO? - Suficiente Internet',
  description: '🎬 ¿Por qué hay gente que dice “el cine argentino es malo” aunque no vio ni tres películas?\nEn este video me meto con el mito más grande de la industria: el odio injustificado al cine argento. ¿Es todo drama? ¿Todo en un departamento? ¿Todo financiado por “Ricardo INCAA”? Spoiler: no.',
  fecha: '15/02/2026'

};











const container = document.getElementById("videos-container");

const videosRef = ref(window.db, "videos");

onValue(videosRef, (snapshot) => {
  container.innerHTML = "";

  if (!snapshot.exists()) {
    container.textContent = "No hay videos aún.";
    return;
  }

  const data = snapshot.val();

  Object.values(data).forEach(video => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${video.youtubeId}`;
    iframe.width = "560";
    iframe.height = "315";
    iframe.allowFullscreen = true;

    container.appendChild(iframe);
  });
});

