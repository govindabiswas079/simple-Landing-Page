import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div id="main">
            <Navbar />
            <div className="name">
                <h1><span>Lanch Your App</span> With Confidance And Creativity.</h1>
                <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quasi?</p>
                <a href="#" className="cv-btn">Download</a>
            </div>
        </div>
    )
}

export default Header;
