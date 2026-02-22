
function getVideoId(url) {
  return new URL(url).searchParams.get("v");
}

function renderYouTubeVideo() {
  const container = document.getElementById("youtube-card");
  const videoId = getVideoId(VIDEO_DATA.url);

  if (!videoId) {
    container.innerHTML = "<p>Video no disponible</p>";
    return;
  }

  container.innerHTML = `
    <div class="youtube-frame">
      <iframe 
        src="https://www.youtube.com/embed/${videoId}"
        allowfullscreen
      ></iframe>
    </div>

    <div class="youtube-title">${VIDEO_DATA.title}</div>
    <div class="youtube-description">${VIDEO_DATA.description}</div>
    <div class="youtube-fecha">${VIDEO_DATA.fecha}</div>
  `;
}

renderYouTubeVideo();

