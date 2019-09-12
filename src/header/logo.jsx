import React from 'react';

import logo from '../img/logo2.png';

import './index.css';

export const Logo = () => {
    return (
        <div className="header-title-logo">
            <img className="header-logo" src={logo} alt="Logo" />
            <p className="header-logo-name"><em>NOVOVID</em></p>
            <p className="header-logo-sub-name"><em>СИСТЕМЫ БЕЗОПАСНОСТИ</em></p>
        </div>
    )
};
