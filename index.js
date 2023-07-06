document.addEventListener("DOMContentLoaded", () => {
    fetchArtists();
  });
  const url = "http://localhost:3000/artists";

function fetchArtists() {
  fetch(url)
    .then((resp) => resp.json())
    .then((artists) => displayMusicList(artists));
}

function displayMusicList(artists) {
    const musicList = document.getElementById("music-list");
    artists.forEach((artist,index) => {
      const listItem = document.createElement("li");
      listItem.textContent = artist.name;
      listItem.addEventListener("click", () => {
        displayMusicDetails(artist);
      });
      musicList.appendChild(listItem);
    
    });
}    