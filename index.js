document.addEventListener("DOMContentLoaded", () => {
    fetchArtists();
  });
  const url = "http://localhost:3000/artists";

function fetchArtists() {
  fetch(url)
    .then((resp) => resp.json())
    .then((artists) => displayMusicList(artists));
}