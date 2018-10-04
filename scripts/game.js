
const esp = " ,./:;'{[}])(\"".split('');

class CountryGame {
	constructor(code, country, num){
		this.countryName = country.toUpperCase().split('');
		this.countryCode = code;
		this.remainingGuesses = num;
		this.guessedLetter = [];
		this.status = 'playing';
	}
	getPuzzle(letter) {
		const span = document.createElement('span');

		if(this.guessedLetter.includes(letter) || esp.includes(letter)) {
			span.textContent = letter
		} else {
			span.textContent = '*';
		}
		return span
	}
	makeGuess(guess) {
		guess = guess.toUpperCase();
		const diff = !this.guessedLetter.includes(guess);
		const wrong = !this.countryName.includes(guess)

		if(diff) {
			this.guessedLetter.push(guess);
		}

		if(diff && wrong) {
			this.remainingGuesses--
		}
		this.getStatus()
	}
	getStatus(){
		const finished = this.countryName.every((letter) => {
			if(this.guessedLetter.includes(letter) || esp.includes(letter)) {
				return letter
			}
		})

		if(this.remainingGuesses <= 0) {
			this.status = 'failed';
		} else if(finished) {
			this.status = 'finished'
		} else {
			this.status = 'playing'
		}
	}
	get messageStatus(){
		if(this.status === 'finished') {
			return `Good Job! You guessed the Country!`
		} else if(this.status === 'failed') {
			return `Nice try! the country was "${this.countryName.join('')}"`
		} else {
			const plural = this.remainingGuesses > 1 ?'es' : '';
			return `Guess${plural} Left: ${this.remainingGuesses}`
		}
	}
}

