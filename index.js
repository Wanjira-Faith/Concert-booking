document.addEventListener("DOMContentLoaded", () => {
    fetchArtists();
  });
  const url = "http://localhost:3000/artists";

function fetchArtists() {
  fetch(url)
    .then((resp) => resp.json())
    .then((artists) => displayMusicList(artists));
}
//display all artists in the music list
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
    }
    //display artists details
       function displayMusicDetails(artist) {
        const musicImage = document.getElementById("image");
        const name = document.querySelector(".name");
        const text = document.querySelector(".text");
        const date = document.getElementById("date");
        const location = document.getElementById("location");
        const availableTickets = document.getElementById("available-tickets");
        const buyTicketBtn = document.getElementById("buy-ticket-btn");
        const liveBtn = document.getElementById("live-concert-btn");
      
        musicImage.src = artist.image;
        name.textContent = artist.name;
        text.innerHTML = `<strong>Popular releases: </strong>${artist.popular_releases}`;
        date.innerHTML = `<strong>Date & Time: </strong>${artist.showtime}`;
        location.innerHTML = `<strong>Location: </strong>${artist.location}`;
        let availableTicketsCount = artist.capacity - artist.tickets_sold;
        availableTickets.innerHTML = `<strong>Available Tickets: </strong>${availableTicketsCount}`;

        buyTicketBtn.textContent = 'Buy Ticket';
        buyTicketBtn.addEventListener("click", (e) => {
          if (availableTicketsCount > 0) {
            
            availableTicketsCount--;
            availableTickets.innerHTML = `<strong>Available Tickets: </strong>${availableTicketsCount}`;
            buyTicketBtn.textContent = 'Buy Ticket';
          }  if (availableTickets === 0){
            buyTicketBtn.textContent = "Sold Out";
            buyTicketBtn.disabled = true;
          }
          else {
            buyTicketBtn.textContent = "Sold out"
          }
    
        });
        liveBtn.textContent = 'Live Concert';
        liveBtn.addEventListener('click', (e) => {
           alert("Download the link from our official website to watch the live concert!");
     });
  const form = document.getElementById("artist-form");
  form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name-input");
  const imageInput = document.getElementById("image-input");
  const popularReleasesInput = document.getElementById("popular-releases-input");

  const newArtist = {
    name: nameInput.value,
    image: imageInput.value,
    popular_releases: popularReleasesInput.value,
  };

    // Add the new artist to the list
  function addArtistToMusicList(artist){
    const musicList = document.getElementById("music-list");
    const listItem = document.createElement("li");
    listItem.textContent = artist.name;
    listItem.addEventListener("click", () => {
      displayMusicDetails(artist);
    });
    musicList.appendChild(listItem);
  }
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArtist),
  })
    .then((resp) => resp.json())
    .then((artist) => {addArtistToMusicList(artist);

    
      // Clear the input fields
      nameInput.value = "";
      imageInput.value = "";
      popularReleasesInput.value = "";

      console.log("Artist added:", artist);
    })
});

    
}    