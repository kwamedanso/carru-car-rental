import React, { useState } from 'react';
import { navItems } from '../Data/navItems';
import { Link, NavLink } from 'react-router-dom';
import '../Styles/header.css'

export default function Header() {
    const [navActive, setnavActive] = useState(false);


    function handleClick() {
        setnavActive(!navActive)

    }
    return (
        <>
            <header>
                <><span className="logo"><Link to='/'>Carru</Link></span></>
                <div onClick={() => setnavActive(!navActive)} className="humburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <nav className={navActive ? 'nav-bar active' : 'nav-bar'} >
                    <ul>
                        {navItems.map(item => {
                            return <li key={item.id} onClick={handleClick}><NavLink to={item.path} activeclassname="active">{item.title}</NavLink></li>
                        })}
                        <>
                            <button onClick={handleClick} className='register'>Register</button>
                            {/* <button className='login'>Log-in</button> */}
                        </>
                    </ul>
                </nav>
            </header >
        </>
    )
}
