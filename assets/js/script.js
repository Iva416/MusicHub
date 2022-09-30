let thumbsUp = document.getElementById("like");
let thumbsDown = document.getElementById("dislike");

document.getElementById("dialog").onclick = function () { myFunction() };
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

let countUp = localStorage.getItem("count-up");
let countDown = localStorage.getItem("count-down");

let count = 0;
let count1 = 0;


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
