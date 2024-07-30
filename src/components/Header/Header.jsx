import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'



export default function Header() {
  return (
    <header className='header'>

      <div className='header__left'>
        <svg className='header__logo' width="90" height="47" viewBox="0 0 90 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M71.834 1.67818L78.1206 3.36365L73.2061 19.8301L82.4689 16.8415L77.6172 31.1032L72.7656 45.3649L66.5523 43.4497L69.3758 35.1498L72.1993 26.85L63.4818 29.6626L71.834 1.67818Z" fill="url(#paint0_linear_129_5353)" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66.2442 12.0463L62.7186 24.6071L60.186 15.9889L53.262 39.5811H51.1666H48.091H45.083L35.8225 3.02905H45.2182L50.0006 26.8109L56.6756 3.02905H57.5881H62.8605H63.7055L66.2442 12.0463Z" fill="white" /><path fill-rule="evenodd" clip-rule="evenodd" d="M36.6489 15.7167L41.0176 32.9604L39.3325 39.6477H36.3691H33.3047H31.1831L24.2752 16.0126L17.3764 39.6477H15.2885H12.2241H9.22698L0 3.02905H9.36168L14.1267 26.8542L20.7775 3.02905H21.6868H26.9401H27.782L34.446 26.8285L36.6489 15.7167Z" fill="#CACACA" /><defs><linearGradient id="paint0_linear_129_5353" x1="65.9395" y1="3.57995" x2="78.7935" y2="43.4201" gradientUnits="userSpaceOnUse"><stop stop-color="#F5BD52" /><stop offset="1" stop-color="#F5DA79" /></linearGradient></defs></svg>
        <div className='header__links'>
          <NavLink className='header__link' to={'./'}>home</NavLink>
          <NavLink className='header__link' to={'./all'}>all cities</NavLink>
        </div>
      </div>

      <div className='header__right'>
        <input className='header__input' type="text" />
      </div>

    </header>
  )
}
