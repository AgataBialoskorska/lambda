import fetch from 'node-fetch'
import { getWeather } from './_weather.js'
import { getAirly } from './_air.js'

async function postToSlack(message) {
	const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL

	const headers = {
		'Content-Type': 'application/json',
	}
	const payload = {
		text: message,
	}

	try {
		const response = await fetch(SLACK_WEBHOOK_URL, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(payload),
		})

		if (response.ok) {
			console.log('Message sent successfully!')
		} else {
			console.log('Failed to send message.')
		}
	} catch (error) {
		console.error('Error:', error)
	}
}

export const handler = async function main(event, context) {
	const messageWeather = await getWeather()
	const messageAir = await getAirly()

	const message = `Today's gonna be ${messageWeather[1]} in ${messageWeather[0]}.\n${messageAir[0]}${messageWeather[2]}${messageWeather[3]}${messageWeather[5]}${messageWeather[4]}\nAir quality:\n${messageAir[1]}${messageAir[2]}${messageAir[3]}`

	await postToSlack(message)
	return message
}
