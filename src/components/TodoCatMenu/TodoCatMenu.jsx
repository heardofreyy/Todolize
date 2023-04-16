import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import './TodoCatMenu.css'

function TodoCatMenu(props) {
    const closeMenu = props.closeMenu;

    

    return (
        <div className={closeMenu ? 'TodoCatMenu closed-menu' : 'TodoCatMenu menu-less600'}>
            <div className="cat-title">
                <h4>Categories</h4>
                <button><FontAwesomeIcon icon={faEdit}/></button>
            </div>
            <div className="cats">
                <button>Home</button>
                <button>Work</button>
                <button>Health</button>
                <button>Sport</button>
            </div>
        </div>
    )
}

export default TodoCatMenu