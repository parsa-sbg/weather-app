import { useWeather } from "./useWeather"

const useDynamicBackground = () => {
    const weatherData = useWeather()

    const mainStatus = weatherData.mainWeatherInfo.mainStatus
    const { DayOrNight } = weatherData


    switch (mainStatus?.toLowerCase()) {
        case 'drizzle':
            return `./images/${DayOrNight}/rain.jpg`

        case 'rain':
            return `./images/${DayOrNight}/rain.jpg`

        case 'clear':
            return `./images/${DayOrNight}/clear.jpg`

        case 'fog':
            return `./images/${DayOrNight}/fog.jpg`

        case 'snow':
            return `./images/${DayOrNight}/snow.png`

        case 'Thunderstorm':
            return `./images/${DayOrNight}/thunderstorm.jpg`

        case 'clouds':
            return `./images/${DayOrNight}/clouds.jpg`

        default:
            return `./images/${DayOrNight}/rain.jpg`
    }
}
export { useDynamicBackground }