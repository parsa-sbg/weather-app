import React, { createContext, useContext, useState } from 'react'

const useWeather = () =>  useContext(WeatherContext) 

const WeatherContext = createContext(null)

const WeatherProvider = ({ children }) => {
    const [cityName, setCityName] = useState('tehran');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async (cityName) => {
        const res =  await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=40846d7c3078163c44131acde6033488`)
        const data = await res.json()
        
        res.status == 200 && setWeatherData(data)
    }

    return (
        <WeatherContext.Provider value={{weatherData , fetchWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}

export { useWeather, WeatherProvider }