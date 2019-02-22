const code = document.querySelector('#code');
const puzzle = document.querySelector('#puzzle');
const guesses = document.querySelector('#guesses');
const reset = document.querySelector('#reset');
let game;

const esp = `[]\;',./^&*()_+-= {}|:"<>?`.split('');

const url = 'https://restcountries.eu/rest/v2/all';

const render = () => {
	puzzle.innerHTML = '';
	code.textContent = game.code;
	game.makeGame().split('').forEach((letter) => {
		const span = document.createElement('span');
		span.textContent = letter;
		puzzle.appendChild(span)
	})
	guesses.textContent = game.makeMessage();
}


const startGame = () => {
	getCountry(url).then((data) => {
		game = new Game(data.name, data.alpha2Code, 7);
		render()
		game.makeGame()
		console.log(data)
	})
	.catch((e) => {
		console.log(e)
	})
}

startGame()

window.addEventListener('keypress', (e) => {
	const guess = String.fromCharCode(e.charCode)
	game.makeGuess(guess)
	render()
})
