import React from 'react'
import MoreWeatherInfoItem from './MoreWeatherInfoItem'
import './MoreWeatherInfo.css';
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { BsFillCloudsFill } from "react-icons/bs";
import { FaWind } from "react-icons/fa";




export default function MoreWeatherInfo({ moreWheaherInfo }) {
  return (

    <div className='MoreWeatherInfo-wrapper'>
      <div className='MoreWeatherInfo'>
        <span className='MoreWeatherInfo__title'>Weather Details...</span>
        <div className='MoreWeatherInfo__body'>
          <MoreWeatherInfoItem name='Temp max' value={moreWheaherInfo.maxTemp + '°'} icon={<FaTemperatureThreeQuarters size={30} color='#DFA1A1' />} />
          <MoreWeatherInfoItem name='Temp min' value={moreWheaherInfo.minTemp + '°'} icon={<FaTemperatureThreeQuarters size={30} color='#6D97CA' />} />
          <MoreWeatherInfoItem name='Humidity' value={moreWheaherInfo.Humidity + '%'} icon={<WiHumidity size={30} />} />
          <MoreWeatherInfoItem name='Cloudy' value={moreWheaherInfo.Cloudy + '%'} icon={<BsFillCloudsFill size={30} />} />
          <MoreWeatherInfoItem name='Wind' value={moreWheaherInfo.WindSpeed + ' m/s'} icon={<FaWind size={30} />} />
        </div>
      </div>
    </div>
  )
}
