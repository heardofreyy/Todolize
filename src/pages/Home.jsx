import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';
import Hero from '../assets/Hero/Checklist-bro.svg'
import logo from '../assets/Logo/Todolize-light.png'
function Home() {
    return (
        <div className='Home'>
            <div className="left">
                <div className="texts">
                    <h1 className='first-text'>Never forget your Tasks</h1>
                    <h1><img src={logo} alt="" /> will remind you </h1>
                </div>
                <div className="btns">
                    <Link to={'/signup'}><button className="button-hero-getstarted">Get Started</button></Link>
                    <Link to={'/list'}>
                        <button data-text="Awesome" className="button-hero">
                            <span className="actual-text">&nbsp;List&nbsp;</span>
                            <span className="hover-text" aria-hidden="true">&nbsp;List&nbsp;</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="right">
                <img src={Hero} alt="" />
            </div>
        </div>
    )
}

export default Home