import React from 'react'
import './Home.css'
import MainWeatherInfo from '../../components/MainWeatherInfo/MainWeatherInfo'
import MoreWeatherInfo from '../../components/MoreWeatherInfo/MoreWeatherInfo'

export default function Home() {
  return (
    <section className='home'>
      <MainWeatherInfo className='MainWeatherInfo' />
      <MoreWeatherInfo className='MoreWeatherInfo'/>
    </section>
  )
}
