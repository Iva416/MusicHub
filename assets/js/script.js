//setting variables for Id's from the html
let artistNameEl = document.getElementById("artistname-el");
let dLinkEl = document.getElementById("dlink-el")
let inputEl = document.getElementById("input-el")
let searchEl = document.getElementById("btn")
let searchEl2 = document.getElementById("btn")
let imgEl = document.getElementById("img-el")


let thumbsUp = document.getElementById("like");
let thumbsDown = document.getElementById("dislike");

let countUp = localStorage.getItem("count-up");
let countDown = localStorage.getItem("count-down");


// setting original like/dislike count to 0
let count = 0;
let count1 = 0;

// adding 'click' event listeners to thumbs up and thumbs down icons
thumbsUp.addEventListener("click", function () {
	if (count >= 0) {
		count++;
		thumbsUp.textContent = count;
		localStorage.setItem("count-up", count);
	}
});

thumbsDown.addEventListener("click", function () {
	if (count1 <= 0) {
		count1--;
		thumbsDown.textContent = count1;
		localStorage.setItem("count-down", count1);
	}
});


document.getElementById("dialog").onclick = function () { myFunction() };
function myFunction() {
	document.getElementById("dialog").innerHTML = "";
	document.getElementById("dialog").style.display = "none";
}

//setting deezer API key as a constant
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '457cb46fe5msh4f0fca0f45a6a3bp1d9018jsn0107f1e3c983',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

//hardcoded fetch for display when webpage is first launched
fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/402', options)
      .then(function (response) {
        return response.json()
      }) 
      .then(function (data) {
        console.log(data)
        const newLink = data.link 
        console.log(newLink)
        dLinkEl.setAttribute("href", newLink)
        const newImg = data.picture_big
        imgEl.setAttribute("src", newImg)
        artistNameEl.textContent = data.name
      })

// created functions for changing center image and names when artist name is searched, connected to deezer API
function searchArtist(event) {
  event.preventDefault()
  let getArtist = inputEl.value
  console.log(getArtist)
  fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/' + getArtist, options)
      .then(function (response) {
        return response.json()
      }) 
      .then(function (data) {
        console.log(data);
        const newLink = data.link 
        console.log(newLink);
        dLinkEl.setAttribute("href", newLink);
        const newImg = data.picture_big
        console.log(newImg);
        imgEl.setAttribute("src", newImg);
        artistNameEl.textContent = data.name
      })
};

// connected to ticketmaster API and connected it to ticketmaster widget so it can change when based on the artist that is searched
function tmEvent(event) {
  event.preventDefault()

  let getArtist = inputEl.value

tmUrl = "https://app.ticketmaster.com/discovery/v2/attractions.json?&keyword=" + getArtist + "&apikey=WCKAlXbL18hEGHpScixmA3GowW8SGge2"

fetch (tmUrl)
  .then(function (response) {
    return response.json()
  })
  .then (function (data) {
    console.log(data);
    let attractions = data._embedded.attractions[0].id
    console.log(attractions);
    let attr = document.getElementById("attr-el");
    attr.setAttribute("w-attractionid", attractions);
  })
};

//created event listeners for both deezer and ticketmaster API functions
searchEl.addEventListener("click", searchArtist);
searchEl2.addEventListener("click", tmEvent);