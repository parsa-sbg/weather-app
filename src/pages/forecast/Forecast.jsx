import React from 'react'
import './Forecast.css'
import ForecastChart from './ForecastChart'
import { Grid } from '@mui/material'
import { useWeather } from '../../hooks/useWeather'



export default function Forecast() {

  const {weatherForecast} = useWeather()
  console.log(weatherForecast);

  return (
    <div className='forecast'>

      <Grid container spacing={2} >

        <Grid xs={12} md={6} item>
          <ForecastChart data={data} />
        </Grid>

        <Grid xs={12} md={6} item>
          <ForecastChart data={data} />
        </Grid>

        <Grid xs={12} md={6} item>
          <ForecastChart data={data} />
        </Grid>

      </Grid>


    </div>
  )
}
