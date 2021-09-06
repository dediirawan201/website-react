import React from 'react'
import './navbar.scss';

const Navbar = () => {
    return (
        <div className="wrapper-wrapper">
            <div className="wrapper">
            <div className="left">
                <div className="logo"><h1>Agency</h1></div>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                </div>
            <div className="button"> 
                Join Today
            </div>
            </div> 
        </div>
    )
}

export default Navbar;
