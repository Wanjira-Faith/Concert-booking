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
    const artistIndex = artists[7];
    if(artistIndex){
      displayMusicDetails(artistIndex)
       }
       function displayMusicDetails(artist) {
        const musicImage = document.getElementById("image");
        const name = document.querySelector(".name");
        const text = document.querySelector(".text");
        const date = document.getElementById("date");
        const location = document.getElementById("location");
        const availableTickets = document.getElementById("available-tickets");
        const buyTicketBtn = document.getElementById("buy-ticket-btn");
        const liveBtn = document.getElementById("live-concert-btn");
       }
      
}    