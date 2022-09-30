
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

fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/402', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


	