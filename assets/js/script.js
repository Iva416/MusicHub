let artistNameEl = document.getElementById("artistname-el");
let dLinkEl = document.getElementById("dlink-el")
let inputEl = document.getElementById("input-el")
let searchEl = document.getElementById("btn")
// let getArtist = inputEl.value


document.getElementById("dialog").onclick = function() {myFunction()};
function myFunction() {
  document.getElementById("dialog").innerHTML = "";
  document.getElementById("dialog").style.display = "none";
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '457cb46fe5msh4f0fca0f45a6a3bp1d9018jsn0107f1e3c983',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

// fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/402', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/402', options)
//     .then(function (response) {
//       if (response.ok) {
//         response.json().then(function (data) {
//           artistNameEl.textContent = data.name 
//           var newLink = data;
//           console.log(newLink)
//           dLinkEl.setAttribute("href", newLink)
//           console.log(data);    
//     })}
//     });

function searchartist(event) {
  event.preventDefault()
  let getArtist = inputEl.value
  console.log(getArtist)
  fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/' + getArtist, options)
      .then(function (response) {
        return response.json()
      }) 
      .then(function (data) {
        console.log(data)
        const newLink = data.link 
        console.log(newLink)
        dLinkEl.setAttribute("href", newLink)
      })
}

fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/402', options)
      .then(function (response) {
        return response.json()
      }) 
      .then(function (data) {
        console.log(data)
        const newLink = data.link 
        console.log(newLink)
        dLinkEl.setAttribute("href", newLink)
      })


searchEl.addEventListener("click", searchartist)

