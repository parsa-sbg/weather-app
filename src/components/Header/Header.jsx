import React from 'react'
import './Header.css'



export default function Header() {
  return (
    <header className='header'>

      <div className='header__right'>
        <span className='header__logo'>weather app</span>
      </div>

      <div className='header__left'>
        <input className='header__input' type="text" />
      </div>

    </header>
  )
}
