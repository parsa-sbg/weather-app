import React, { createContext, useEffect, useRef, useState } from 'react'
import moment from 'moment';



const WeatherContext = createContext(null)

const WeatherProvider = ({ children }) => {
    const [cityName, setCityName] = useState('tehran');
    const [isLoading, setIsLoading] = useState(true)

    const weatherData = useRef(null);
    const forecast = useRef(null)

    useEffect(() => {

        cityName && fetchWeather(cityName)

    }, [cityName])

    const convertKelvinToCelsius = kelvin => Math.floor(kelvin - 272.15)

    const fetchWeather = async (cityName) => {

        setIsLoading(true)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=40846d7c3078163c44131acde6033488`)
        const data = await res.json()

        const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=40846d7c3078163c44131acde6033488&`)
        const forecastData = await forecastRes.json()

        res.status == 200 && (weatherData.current = data)
        forecastRes.status == 200 && (forecast.current = forecastData)

        setIsLoading(false)
    }

    const processForecastData = (forecastData) => {
        const forecastList = forecastData?.list

        const groupedByDate = forecastList?.reduce((acc, item) => {
            const date = item.dt_txt.split(' ')[0];
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push({
                time: item.dt_txt.split(' ')[1].slice(0, 5),
                temp: convertKelvinToCelsius(item.main.temp),
            });
            return acc;
        }, {});


        if (groupedByDate) {
            const result = Object.entries(groupedByDate).map(([date, hours]) => ({
                date,
                hours
            }));
            return result
        }
    }


    const mainWeatherInfo = {
        mainStatus: weatherData.current?.weather[0].main,
        cityName: weatherData.current?.name,
        temp: convertKelvinToCelsius(weatherData.current?.main.temp),
        date: moment.unix(weatherData.current?.dt).format('h:mm a - dddd'),
        icon: <img className='MainWeatherInfo__icon' src={`https://openweathermap.org/img/wn/${weatherData.current?.weather[0].icon}@2x.png`} alt="weather icon" />,
    }

    const moreWheaherInfo = {
        maxTemp: convertKelvinToCelsius(weatherData.current?.main.temp_max),
        minTemp: convertKelvinToCelsius(weatherData.current?.main.temp_min),
        Humidity: weatherData.current?.main.humidity,
        Cloudy: weatherData.current?.clouds.all,
        WindSpeed: weatherData.current?.wind.speed

    }

    const weatherForecast = processForecastData(forecast.current)

    const DayOrNight = weatherData.current?.weather[0].icon.slice(2, 3) == 'n' ? 'night' : 'day'
    return (
        <WeatherContext.Provider
            value={{
                mainWeatherInfo,
                moreWheaherInfo,
                setCityName,
                isLoading,
                DayOrNight,
                weatherForecast
            }}>

            {children}
        </WeatherContext.Provider>
    )
}

export { WeatherProvider, WeatherContext }