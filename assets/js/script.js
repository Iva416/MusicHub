let inputEL = document.getElementById('input-el');
let buttonEL = document.getElementById('btn');
let artistSearch = inputEL.value.trim();
// let  = '';

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




// function artistCall(event) {
//     event.preventDefault()

//         fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=central cee', options)
//             .then(function (response) {
//                 return response.json();})
//             .then(response => console.log(response))
//             .catch(err => console.error(err));
//             console.log(inputEL);
    
// };

// function fetchCall(artistSearch) {
//     fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistSearch}`, options)
//         .then(function (response) {
//             return response.json();})
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//         console.log(inputEL);

//         };





