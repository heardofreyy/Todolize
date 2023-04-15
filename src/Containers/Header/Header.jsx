import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGear } from '@fortawesome/free-solid-svg-icons'


import './Header.css'
import logo from '../../assets/Logo/Todolize-light.png'

function Header() {
  return (
    <header>
        <div className="logo">
            <img src={logo}/>
        </div>
        <div className="right">
            <nav>
                <button>Home</button>
                <button>List</button>
                <button>About</button>
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