import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { PiGlobeStandBold } from "react-icons/pi";
import Container from '@mui/material/Container';
import SearchInput from './SearchInput';


export default function Header({ }) {


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
            <SearchInput />
          </div>

        </div>


      </Container>
    </header>
  )
}