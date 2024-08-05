import React, { createContext, useState } from 'react'
import moment from 'moment';



const WeatherContext = createContext(null)

const WeatherProvider = ({ children }) => {
    const [cityName, setCityName] = useState('tehran');
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [forecast, setForecast] = useState(null)

    const changeKelvinToCdegree = kelvin => Math.floor(kelvin - 272.15)

    const fetchWeather = async (cityName) => {

        setIsLoading(true)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=40846d7c3078163c44131acde6033488`)
        const data = await res.json()

        const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=40846d7c3078163c44131acde6033488&`)
        const forecastData = await forecastRes.json()

        res.status == 200 && setWeatherData(data)
        forecastRes.status == 200 && setForecast(forecastData)

        setIsLoading(false)
    }

    const cookForecastData = (forecastData) => {
        const forecastList = forecastData?.list

        const groupedByDate = forecastList?.reduce((acc, item) => {
            const date = item.dt_txt.split(' ')[0];
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push({
                time: item.dt_txt.split(' ')[1],
                temp: item.main.temp,
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
        mainStatus: weatherData?.weather[0].main,
        cityName: weatherData?.name,
        temp: changeKelvinToCdegree(weatherData?.main.temp),
        date: moment.unix(weatherData?.dt).format('h:mm a - dddd'),
        icon: <img className='MainWeatherInfo__icon' src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} alt="weather icon" />,
    }

    const moreWheaherInfo = {
        maxTemp: changeKelvinToCdegree(weatherData?.main.temp_max),
        minTemp: changeKelvinToCdegree(weatherData?.main.temp_min),
        Humidity: weatherData?.main.humidity,
        Cloudy: weatherData?.clouds.all,
        WindSpeed: weatherData?.wind.speed

    }

    const weatherForecast = cookForecastData(forecast)
    console.log(weatherForecast);



    const DayOrNight = weatherData?.weather[0].icon.slice(2, 3) == 'n' ? 'night' : 'day'
    return (
        <WeatherContext.Provider
            value={{
                mainWeatherInfo,
                moreWheaherInfo,
                fetchWeather,
                isLoading,
                DayOrNight,
                weatherForecast
            }}>

            {children}
        </WeatherContext.Provider>
    )
}

export { WeatherProvider, WeatherContext }