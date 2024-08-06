import React from 'react'
import './Forecast.css'
import ForecastChart from '../../components/ForecastChart/ForecastChart'
import { Grid } from '@mui/material'
import { useWeather } from '../../hooks/useWeather'
import Loader from '../../components/Loader/Loader'



export default function Forecast() {

  const { weatherForecast, isLoading, mainWeatherInfo } = useWeather()

  return (
    <div className='forecast'>
      {isLoading && <Loader />}
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
