export async function getWeather() {
	const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
	const API_KEY = process.env.API_KEY
	const API_UNITS = '&units=metric'
	const URL = API_LINK + 'krakow' + API_KEY + API_UNITS

	try {
		const response = await fetch(URL)
		const data = await response.json()

		const city = data.name
		const description = data.weather[0].description
		const tempFeel = Math.round(data.main.feels_like)
		const temp = Math.round(data.main.temp)
		const tempMax = Math.round(data.main.temp_max)
		const tempMin = Math.round(data.main.temp_min)
		const humidity = data.main.humidity
		const wind = data.wind.speed.toFixed(1)

		const messageWeather = [
			`${city}`,
			`${description}`,
			`Temperature: ${temp}\u00B0C | Feels like: ${tempFeel}\u00B0C \n`,
			`Min / Max: ${tempMin}\u00B0C / ${tempMax}\u00B0C \n`,
			`Humidity: ${humidity}% \n`,
			`Wind Speed: ${wind}km/h \n`,
		]
		// console.log(messageWeather)
		return messageWeather
	} catch (error) {
		console.error('Error fetching weather data:', error)
		return 'Error fetching weather data'
	}
}