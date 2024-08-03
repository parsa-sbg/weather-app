import React, { createContext, useState } from 'react'
import moment from 'moment';



const WeatherContext = createContext(null)

const WeatherProvider = ({ children }) => {
    const [cityName, setCityName] = useState('tehran');
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    const changeKelvinToCdegree = kelvin => Math.floor(kelvin - 272.15)

    const fetchWeather = async (cityName) => {
        setIsLoading(true)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=40846d7c3078163c44131acde6033488`)
        const data = await res.json()

        res.status == 200 && setWeatherData(data)
        setIsLoading(false)
    }

    const mainWeatherInfo = {
        cityName: weatherData?.name,
        temp: changeKelvinToCdegree(weatherData?.main.temp),
        date: moment().format('h:mm a - dddd'),
        icon: <img className='MainWeatherInfo__icon' src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} alt="weather icon" />,
    }

    const moreWheaherInfo = {
        maxTemp: changeKelvinToCdegree(weatherData?.main.temp_max),
        minTemp: changeKelvinToCdegree(weatherData?.main.temp_min),
        Humidity: weatherData?.main.humidity,
        Cloudy: weatherData?.clouds.all,
        WindSpeed: weatherData?.wind.speed

    }

    return (
        <WeatherContext.Provider
            value={{
                mainWeatherInfo,
                moreWheaherInfo,
                fetchWeather,
                isLoading
            }}>

            {children}
        </WeatherContext.Provider>
    )
}

export { WeatherProvider, WeatherContext }