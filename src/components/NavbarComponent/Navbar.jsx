import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <header className="container header">
                <span className="headerLogo">SHOP.CO</span>
                <nav>
                    <Link to="/" className="navLink">
                        <div className="navLinkContainer">
                            <span>Home</span>
                        </div>
                    </Link>
                    <Link to="/" className="navLink">
                        New Arrivals
                    </Link>
                    <Link to="/" className="navLink">
                        About
                    </Link>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
