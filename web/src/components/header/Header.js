import React from 'react';
import './Header.scss';

const Header = props => {
    return (
        <div className="Header-container">
            <a>Logo</a>
            <div className="Header-nav">

                <a className="Header-label">Language</a>
                <a className="Header-label">Currency</a> 
                <a className="Header-label">Log In</a>
                <a className="Header-label">Sign Up</a>
                <a className="Header-label">Help</a>
            </div>

        </div>
    );
};

export default Header;