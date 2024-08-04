import React, { useEffect, useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useWeather } from '../../hooks/useWeather';
import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { PiGlobeStandBold } from "react-icons/pi";
import Container from '@mui/material/Container';


export default function Header({ }) {

  const [cityname, setCityName] = useState('tehran')
  const { fetchWeather } = useWeather()


  const btnClickHandlere = () => {
    cityname.trim() && fetchWeather(cityname)
  }



  return (

    <header className='header'>
      <Container>

        <div className='header-wrapper'>
          <div className='header__left'>
            <div className='header__links'>
              <NavLink className='header__link' to={'./'}><FaHome /></NavLink>
              <NavLink className='header__link' to={'./all'}><PiGlobeStandBold /></NavLink>
            </div>
          </div>

          <div className='header__right'>
            <input
              className='header__input' type="text"
              placeholder='search a location...'
              value={cityname}
              onChange={e => { setCityName(e.target.value) }} />
            <a onClick={btnClickHandlere} className='header__right-searchbtn'>
              <CiSearch className='header__right-searchbtn-icon' size={30} />
            </a>
          </div>

        </div>


      </Container>
    </header>
  )
}