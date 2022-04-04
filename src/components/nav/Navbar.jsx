import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
// import { FaPlus } from 'react-icons/fa';
import Dropdown from "./Dropdown"
import logo from "../../images/logo.jpg"


export default function Navbar() {
  const [nav, setnav] = useState(false);

  const changeBackgroud = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  
  window.addEventListener("scroll", changeBackgroud);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <div className="logo-holder">
      <a  className="logo-big" href="https://www.facebook.com/natalialuzakpermanentmakeup"> <FaFacebookF />
        </a>
        <a  className="logo-big" href="https://www.instagram.com/skincarenatalialuzak/?hl=en"><FaInstagramSquare /></a>
        <div className="logo">
          <img src={logo} alt="logo skin care" />
      </div>
      </div>
    
      <a className="logo-small" href="https://www.facebook.com/natalialuzakpermanentmakeup"> <FaFacebookF />
        </a>
        <a  className="logo-small" href="https://www.instagram.com/skincarenatalialuzak/?hl=en"><FaInstagramSquare /></a>
      <ul className="menu">
        {/* <li>
        <a href="#" style={{
      }}> <FaPlus style={{marginRight: "10px", marginTop:"2px"}}/>Zarezerwuj wizytę</a></li>
        */}
        <li onClick="document.documentElement.scrollIntoView({ behavior: 'smooth' })">
          <Link to="/">Strona główna</Link>
        </li>
      
         <Dropdown  />
      
        <li onClick="document.documentElement.scrollIntoView({ behavior: 'smooth' })">
          <Link to="/prices">Cennik</Link>
        </li>
        <li onClick="document.documentElement.scrollIntoView({ behavior: 'smooth' })">
          <Link to="/gallery">Galeria</Link>
        </li>
        <li onClick="document.documentElement.scrollIntoView({ behavior: 'smooth' })">
          <Link to="/contact">Kontakt</Link>
        </li>
    
      </ul>
     
    </nav>
  );
}
