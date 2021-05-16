import React from 'react';
import './header.css';
import logo from './assets/images/Consumer_Wordmark.svg';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                {/* /* coinbase logo */}
                <div className="logo">
                    <img src={logo} alt="coinbase-logo" />
                </div>

                {/* navigation links */}
                <ul className="mid-links">
                    <li>Prices</li>
                    <li>Learn</li>
                    <li>Individuals</li>
                    <li>Businesses</li>
                    <li>Developers</li>
                    <li>Company</li>
                </ul>

                {/* user portal links */}
                <ul className="user-inks">
                    <li className="sign-in">sign in</li>
                    <li><button className="get-started">Get started</button></li>
                </ul>
            </div>
        </nav>
    );       
}

export default Header;
