import React from 'react'
import './Forecast.css'
import ForecastChart from './ForecastChart'
import { Grid } from '@mui/material'

const data = [
  {
    "time": "12:30",
    "temp": 120,
    "pv": 2400,
    "amt": 2400
  },
  {
    "time": "12:30",
    "temp": 32,
    "pv": 1398,
    "amt": 2210
  },
  {
    "time": "12:30",
    "temp": 30,
    "pv": 9800,
    "amt": 2290
  },
  {
    "time": "12:30",
    "temp": 25,
    "pv": 3908,
    "amt": 2000
  },
  {
    "time": "12:30",
    "temp": 40,
    "pv": 4800,
    "amt": 2181
  },
  {
    "time": "12:30",
    "temp": 42,
    "pv": 3800,
    "amt": 2500
  },
  {
    "time": "12:30",
    "temp": 40,
    "pv": 4300,
    "amt": 2100
  }
]

export default function Forecast() {
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
