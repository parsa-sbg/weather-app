import React from 'react'
import './Forecast.css'
import ForecastChart from './ForecastChart'
import { Grid } from '@mui/material'
import { useWeather } from '../../hooks/useWeather'



export default function Forecast() {

  const { weatherForecast } = useWeather()
  console.log(weatherForecast);
  const { mainWeatherInfo} = useWeather()


  return (
    <div className='forecast'>
      <h1 className='forecast__cityName'>{mainWeatherInfo.cityName} weather forecast</h1>

      <Grid container spacing={2} >
        {weatherForecast?.map(item => (
          <Grid key={item.date} xs={12} md={6} item>
            <ForecastChart data={item.hours} date={item.date} />
          </Grid>
        ))}



      </Grid>


    </div>
  )
}
