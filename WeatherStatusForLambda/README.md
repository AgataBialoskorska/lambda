# Weather status for Lambda

This code takes data from OpenWeather API and sends it back to the Slack channel, using AWS Lambda.

## How to use

```sh
git clone https://github.com/AgataBialoskorska/lambda.git
```
```sh
cd WeatherStatusForLambda
```
```sh
npm i --save-dev
```

> [!NOTE]
> You shoud paste your own API_LINK, API_KEY, SLACK_WEBHOOK_URL, URL_AIRLY (with coordinates) as environment variables in Lambda itself.

