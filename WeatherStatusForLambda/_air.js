export async function getAirly() {
	const headers = {
		Accept: 'application/json',
		apikey: process.env.API_KEY_AIRLY,
	}
	const URL = process.env.URL_AIRLY

	try {
		const response = await fetch(URL, { method: 'GET', headers })
		const data = await response.json()

		const myTime = data.current.tillDateTime
		const time = `${myTime.slice(0, 10)} / ${myTime.slice(11, 16)}`
		const pm1 = data.current.values.find(item => item.name === 'PM1').value.toFixed(1)
		const pm10 = data.current.values.find(item => item.name === 'PM10').value.toFixed(1)
		const pm10p = Math.round(data.current.standards.find(item => item.pollutant === 'PM10').percent)
		const pm25 = data.current.values.find(item => item.name === 'PM25').value.toFixed(1)
		const pm25p = Math.round(data.current.standards.find(item => item.pollutant === 'PM25').percent)

		const messageAir = [
			`Last Measurement Time: ${time} UTC \n`,
			`PM10: ${pm10} µg/m³ / ${pm10p}% \n`,
			`PM2.5: ${pm25} µg/m³ / ${pm25p}% \n`,
			`PM1: ${pm1} µg/m³ \n`,
		]
		// console.log(messageAir)
		return messageAir
	} catch (error) {
		console.error('Error fetching air data:', error)
		return 'Error fetching air data'
	}
}
