// get API using async/await Promise
const getApi = async () => {
	const response = await fetch('http://restcountries.eu/rest/v2/all');
	if(response.status === 200) {
		const data = await response.json();
		const dataLength = data.length + 1;
		const dataIndex = Math.floor(Math.random() * dataLength)
		return data[dataIndex]
	} else {
		throw new Error('Unable to fetch the Country')
	}
}

// getApi().then((country) => {
// 	console.log(country)
// }).catch((err) => {
// 	console.log(err)
// })

// const startGame = async () => {
// 	const country = await getApi();
// 	console.log(country)
// }
// startGame()