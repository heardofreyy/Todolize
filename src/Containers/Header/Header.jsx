import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGear } from '@fortawesome/free-solid-svg-icons'


import './Header.css'
import logo from '../../assets/Logo/Todolize-light.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className="logo">
            <img src={logo}/>
        </div>
        <div className="right">
            <nav>
                <Link to={'/'}><button className='button-nav'>Home</button></Link>
                <Link to={'/list'}><button className='button-nav'>List</button></Link>
                <Link to={'/about'}><button className='button-nav'>About</button></Link>
            </nav>
            <hr />
            <div className="btns">
                <button><FontAwesomeIcon icon={faGear}/></button>
                <button><FontAwesomeIcon icon={faUser}/></button>
            </div>
        </div>
    </header>
  )
}

export default Header