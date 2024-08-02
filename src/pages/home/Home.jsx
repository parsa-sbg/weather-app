import React, { useEffect } from 'react'
import './Home.css'
import MainWeatherInfo from '../../components/MainWeatherInfo/MainWeatherInfo'
import MoreWeatherInfo from '../../components/MoreWeatherInfo/MoreWeatherInfo'
import { useWeather, WeatherContext } from '../../contexts/weatherContext'
import moment from 'moment';

export default function Home() {

  const {weatherData} = useWeather()  

  const changeKelvinToCdegree = kelvin => Math.floor(kelvin - 272.15)
  console.log(weatherData);
  

  const mainWeatherInfo = {
    cityName: weatherData?.name,
    temp: changeKelvinToCdegree(weatherData?.main.temp),
    date: moment().format('h:mm a - dddd')
  }  

  const moreWheaherInfo = {
    maxTemp: changeKelvinToCdegree(weatherData?.main.temp_max),
    minTemp: changeKelvinToCdegree(weatherData?.main.temp_min),
    Humidity: weatherData?.main.humidity,
    Cloudy: weatherData.clouds.all,
    WindSpeed: weatherData.wind.speed

  }

  return (
    <section className='home'>
      <MainWeatherInfo mainWeatherInfo={mainWeatherInfo} className='MainWeatherInfo' />
      <MoreWeatherInfo moreWheaherInfo={moreWheaherInfo} className='MoreWeatherInfo'/>
    </section>
  )
}
