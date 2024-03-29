import React from 'react'
import Logo from '../images/logo55.png'

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#GetGooeyWithIt</h4>
          <h1>Join The Legends Of The Gaming World</h1>
          <p>
            Pum Da Da Da Dun We are gamers
          </p>
        <Link to="/shop" className='btn lg'> Shop </Link>
        <Link to="/roster" className='btn lg'> Roster </Link>
        <Link to="/events" className='btn lg'> Events </Link>
        <Link to="/news" className='btn lg'> News </Link>
        <Link to="/about" className='btn lg'> About </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Logo} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
