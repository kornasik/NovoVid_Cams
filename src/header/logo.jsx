import React from 'react';
import {Link} from "react-router-dom";

import logo from '../img/logo.jpg';

import './index.css';

export const Logo = () => {
    return (
        <div className="header-title-logo">
            <Link to="/">
                <img className="header-logo" src={logo} alt="Logo"/>
            </Link>
        </div>
    )
};
