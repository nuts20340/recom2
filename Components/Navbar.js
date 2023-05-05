import "./NavbarStyles.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"
import Intoo1 from "../assets/logo.png"
import s2 from "../assets/search.png"
import b2 from "../assets/basket.png"

const Navbar = () => {

    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click); 

    const[color,setColor] = useState(false);
    const changeColor = () =>{
      if(window.scrollY >=100){
        setColor(true);
      }else{
        setColor(false);
      }
    };

    window.addEventListener("scroll",changeColor);
  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to="/">
        <h1>
          <img  className="i2" src={Intoo1} alt="" />
        </h1>
        </Link>
        <ul className={click ? "nav-menu active" :
    "nav-menu"}>
     <div className="ho">
            <li>
                <Link to="/" className="">Home</Link>
            </li>
            </div>
            <div className="cat">
            <li>
            <Link to="/categories">Categories</Link>  
            </li>
            </div>
            <div className="gif">
            <li>
            <Link to="/gifting">Gifting</Link>
            </li>
            </div>
            <div className="abt">
            <li>
            <Link to="/about">About</Link>
            </li>
            </div>
            <div className="sea">
            <li>
            <Link to="/search">Search</Link>
            </li>
            </div>
            <div className="acc">
            <li>
              <Link to="/account">Account</Link>
            </li>
            </div>
            <div className="ba">
            <li>
              <Link to="/basket">Basket</Link>
            </li>
            </div>
        </ul>
     
    </div>
  )
}

export default Navbar