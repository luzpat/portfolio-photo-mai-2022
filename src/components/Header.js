import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.scss';

const li = "headLi";

const Header = () => {
    return (
        <div className="headContainer">
            <ul className="headUl">
                <NavLink 
                    to="/" 
                    style={{textDecoration: "none"}}>

                    <li className={li}>Acceuil</li>

                </NavLink>

                <NavLink 
                    to="/photos" 
                    style={{textDecoration: "none"}}>

                    <li className={li}>Les photos</li>

                </NavLink>

                <NavLink 
                    to="/contacts" 
                    style={{textDecoration: "none"}}>

                    <li className={li}>Contacts</li>
                    
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;