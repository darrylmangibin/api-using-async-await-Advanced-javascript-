
// define UI varibles
const codeEl = document.querySelector('#code');
const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses');
const resetBtn = document.querySelector('#reset');
let game;

const render = () => {
	puzzleEl.innerHTML = ''
	game.countryName.forEach((country) => {
		puzzleEl.appendChild(game.getPuzzle(country))
	})
	codeEl.textContent = game.countryCode;
	
	guessEl.textContent = game.messageStatus;
}

const startGame = async () => {
	const country = await getApi();
	game = new CountryGame(country.alpha2Code, country.name, 7);
	// console.log(country)
	render()
}
startGame()

window.addEventListener('keypress', (e) => {
	const guess = String.fromCharCode(e.charCode);
	game.makeGuess(guess);
	render()
})

resetBtn.addEventListener('click', startGame)