import React from 'react'
import MoreWeatherInfoItem from './MoreWeatherInfoItem'
import './MoreWeatherInfo.css';
import { FaTemperatureThreeQuarters } from "react-icons/fa6";

export default function MoreWeatherInfo() {
  return (
    <div className='MoreWeatherInfo'>
      <span className='MoreWeatherInfo__title'>Weather Details...</span>
      <span className='MoreWeatherInfo__subtitle'>thunderstorm with light drizzle</span>
      <div className='MoreWeatherInfo__body'>
        <MoreWeatherInfoItem name='Temp max' value='19°' icon={<FaTemperatureThreeQuarters/>}/>
        <MoreWeatherInfoItem name='Temp max' value='19°' icon={<FaTemperatureThreeQuarters/>}/>
        <MoreWeatherInfoItem name='Temp max' value='15°' icon={<FaTemperatureThreeQuarters/>}/>
        <MoreWeatherInfoItem name='Temp max' value='19°' icon={<FaTemperatureThreeQuarters/>}/>
        <MoreWeatherInfoItem name='Temp max' value='19°' icon={<FaTemperatureThreeQuarters/>}/>
      </div>
    </div>
  )
}
