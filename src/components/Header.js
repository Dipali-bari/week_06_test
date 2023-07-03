import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className="nav"> 
            <div className="logo">
                <img src="https://classes.geekster.in/images/logo/Geekster.svg" alt="logo"/> 
                
            </div>
            <div className="menu">
                <a href="/">Home</a>
                <a href="/contact">Contact</a>
                <a href="/service">Srevice</a>
                {/* <button onClick={(event)=>ChangeTheme(event)}>Change Theme</button> */}
            </div>
      </div>
   
   )
}

export default Header