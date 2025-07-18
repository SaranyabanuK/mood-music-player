let currentPlaylist = [];
let currentIndex = 0;

async function loadMoods() {
  const res = await fetch('/api/moods');
  const moods = await res.json();

  const btnContainer = document.getElementById('mood-buttons');
  moods.forEach(mood => {
    const btn = document.createElement('button');
    btn.textContent = mood.charAt(0).toUpperCase() + mood.slice(1);
    btn.onclick = () => loadPlaylist(mood);
    btnContainer.appendChild(btn);
  });
}

async function loadPlaylist(mood) {
  const res = await fetch(`/api/playlist/${mood}`);
  const songs = await res.json();

  if (!Array.isArray(songs)) {
    alert("No songs found for this mood!");
    return;
  }

  currentPlaylist = songs;
  currentIndex = 0;
  playCurrentSong();
}

function playCurrentSong() {
  const song = currentPlaylist[currentIndex];
  if (!song) return;

  document.getElementById('song-title').textContent = song.title;

  // YouTube embedding
  const videoId = song.url.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  document.getElementById('song-frame').src = embedUrl;
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentPlaylist.length;
  playCurrentSong();
});

loadMoods();
