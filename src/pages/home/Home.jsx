import React, { useEffect } from 'react'
import './Home.css'
import MainWeatherInfo from '../../components/MainWeatherInfo/MainWeatherInfo'
import MoreWeatherInfo from '../../components/MoreWeatherInfo/MoreWeatherInfo'
import Loader from '../../components/Loader/Loader'
import { useWeather } from '../../hooks/useWeather'


export default function Home() {

  const { isLoading ,mainWeatherInfo, moreWheaherInfo} = useWeather()

  return (
    <section className='home'>
      {isLoading && <Loader />}
      <MainWeatherInfo mainWeatherInfo={mainWeatherInfo} className='MainWeatherInfo' />
      <MoreWeatherInfo moreWheaherInfo={moreWheaherInfo} className='MoreWeatherInfo' />
    </section>
  )
}
