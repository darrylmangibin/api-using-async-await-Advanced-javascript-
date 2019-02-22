class Game {
	constructor(country, code, num) {
		this.country = country.toUpperCase().split('');
		this.code = code;
		this.guesses = num;
		this.guessedLetter = [];
		this.status = 'playing';
	}
	makeGame() {
		let output = '';
		this.country.forEach((letter) => {
			if(this.guessedLetter.indexOf(letter) > -1 || esp.indexOf(letter) > -1) {
				output += letter
			} else {
				output += '*'
			}
		});
		return output;
	}
	makeGuess(guess) {
		guess = guess.toUpperCase();

		const letterMatch = this.guessedLetter.indexOf(guess) <= -1;
		const badGuess = this.country.indexOf(guess) <= -1;

		if(this.status !== 'playing') {
			return false
		}

		if (letterMatch) {
			this.guessedLetter.push(guess)
		}

		if (letterMatch && badGuess) {
			this.guesses--
		}
		this.makeStatus()
	}
	makeMessage() {
		const es = this.guesses > 1 ? 'es' : '';

		if(this.status === 'failed') {
			return `Nice try! The country was ${this.country.join('')}`;
		} else if(this.status === 'finished') {
			return `Good job! You have guessed the country!`
		} else {
			return `You have ${this.guesses} guess${es} left`;
		}
	}
	makeStatus() {
		const finished = this.country.every((letter) => {
			if(this.guessedLetter.indexOf(letter) > -1) {
				return letter
			}
		})

		if(this.guesses === 0) {
			this.status = 'failed'
		} else if(finished) {
			this.status = 'finished'
		} else {
			'playing'
		}
	}
}