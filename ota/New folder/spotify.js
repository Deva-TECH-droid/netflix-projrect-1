const songs = [
  {
    title: "On My Way",
    artist: "Alan Walker",
    src: "assets/music/song1.mp3",
    cover: "assets/images/f"
  },
  {
    title: "Faded",
    artist: "Alan Walker",
    src: "assets/music/song2.mp3",
    cover: "assets/images/cover2.jpg"
  }
];

let currentSongIndex = 0;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const songList = document.getElementById("songList");

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
  cover.src = song.cover;
}

function playSong() {
  audio.play();
  playBtn.textContent = "⏸️";
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶️";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

// Inject songs into UI
songs.forEach((song, index) => {
  const item = document.createElement("div");
  item.classList.add("song-item");
  item.innerHTML = `
    <img src="${song.cover}" alt="cover" />
    <div>
      <div>${song.title}</div>
      <div style="font-size: 14px; color: gray;">${song.artist}</div>
    </div>
  `;
  item.addEventListener("click", () => {
    currentSongIndex = index;
    loadSong(index);
    playSong();
  });
  songList.appendChild(item);
});

// Initial load
loadSong(currentSongIndex);
