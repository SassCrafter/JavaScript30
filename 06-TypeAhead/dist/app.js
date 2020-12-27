const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
.then(response => response.json())
.then(data => cities.push(...data));

console.log(cities);



function findMatches(wordToMatch, cities) {
	const regex = new RegExp(wordToMatch, 'gi');
	return cities.filter(place => {
		return place.city.match(regex) || place.state.match(regex);
	});
}

function numberWithCommas(n) {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');}


function displayMatches() {
	const word = this.value;
	const matchArr = findMatches(word, cities);
	const html = matchArr.map(place => {
		const regex = new RegExp(word, 'gi');
		const cityName = place.city.replace(regex, `<span class="sg">${word}</span>`);
		const stateName = place.state.replace(regex, `<span class='sg'>${word}</span>`);

		return `<li>
					<span class="city">${cityName}, ${stateName}</span>
					<span class="population">${numberWithCommas(place.population)}</span>
				</li>`;
	}).join('');
	suggestions.innerHTML = html;
}


const searchInput = document.getElementById('search-input');
const suggestions = document.getElementById('suggestions');


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);