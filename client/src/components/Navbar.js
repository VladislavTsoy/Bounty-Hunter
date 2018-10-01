import React from 'react';
import jango from '../data/jango.jpg'

const Navbar = () => {
    return (
        <nav className="main-nav">
            <div className="main-nav-content">
                <img src={jango} alt=""/>
                <h1>Bounty</h1>
            </div>
        </nav>
    );
};

export default Navbar;