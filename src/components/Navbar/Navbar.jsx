import React from 'react';
import './Navbar.css';
import Down_Arrow_Icon from '../../assets/icons/down_symbol.svg';

function Navbar() {
    return (
        <>
            <header className="container header">
                <span className="headerLogo">SHOP.CO</span>
                <nav>
                    <a href="#" className="navLink">
                        <div className="navLinkContainer">
                            <span>Home</span>
                        </div>
                    </a>
                    <a href="#" className="navLink">
                        New Arrivals
                    </a>
                    <a href="#" className="navLink">
                        About
                    </a>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
