import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from 'Data/navItems';
import "Components/shared/styles/header.css"

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
                            return <li key={item.id} onClick={handleClick}><NavLink to={item.path} >{item.title}</NavLink></li>
                        })}
                    </ul>
                </nav>
            </header >
        </>
    )
}
