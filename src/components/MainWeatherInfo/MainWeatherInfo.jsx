import React from 'react'
import './MainWeatherInfo.css'


export default function MainWeatherInfo({mainWeatherInfo}) {
        
    return (
        <div className='MainWeatherInfo'>
            <span className='MainWeatherInfo__temp'>{mainWeatherInfo.temp}°</span>
            <div className='MainWeatherInfo__detail'>
                <span className='MainWeatherInfo__city-name'>{mainWeatherInfo.cityName}</span>
                <span className='MainWeatherInfo__date'>{mainWeatherInfo.date}</span>
            </div>
            {mainWeatherInfo.icon}
        </div>
    )
}
