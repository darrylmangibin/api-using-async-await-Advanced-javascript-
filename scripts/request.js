
const getCountry = (url) => {
	return new Promise((res, rej) => {
		fetch(url)
		.then((data) => {
			return data.json()
		})
		.then((data) => {
			const rand = Math.floor(Math.random() * data.length);
			return res(data[rand])
		})
		.catch((e) => {
			console.log(e)
		})
	})
}
