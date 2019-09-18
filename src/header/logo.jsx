import React from 'react';

import logo from '../img/logo.jpg.png';

import './index.css';

export const Logo = () => {
    return (
        <div className="header-title-logo">
            <img className="header-logo" src={logo} alt="Logo" />
        </div>
    )
};
