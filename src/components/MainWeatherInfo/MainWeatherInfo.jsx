import React from 'react'
import './MainWeatherInfo.css'
import { FaCloudShowersHeavy } from "react-icons/fa";


export default function MainWeatherInfo() {
    return (
        <div className='MainWeatherInfo'>
            <span className='MainWeatherInfo__temp'>16°</span>
            <div className='MainWeatherInfo__detail'>
                <span className='MainWeatherInfo__city-name'>london</span>
                <span className='MainWeatherInfo__date'>06:09 - Monday, 9 Sep ‘23</span>
            </div>
            <FaCloudShowersHeavy className='MainWeatherInfo__icon'/>
        </div>
    )
}
