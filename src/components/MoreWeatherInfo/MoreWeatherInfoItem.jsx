import React from 'react'
import './MoreWeatherInfoItem.css'

export default function MoreWeatherInfoItem({name, value, icon}) {
  return (
    <div className='MoreWeatherInfoItem'>
        <span className='MoreWeatherInfoItem__name'>{name}</span>
        <div className='MoreWeatherInfoItem__right'>
            <span className='MoreWeatherInfoItem__value'>{value}</span>
            <span className='MoreWeatherInfoItem__icon'>{icon}</span>
        </div>
    </div>
  )
}
