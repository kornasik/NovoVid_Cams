import React, {Component} from 'react';
import './index.css';
import logo from '../img/logo2.png';
import {itemMenu} from "../dictionary";
import {Link} from "react-router-dom";

export default class Header extends Component {
    menu = () => {
        return itemMenu.map((item) => (
            <Link to={item.route}>
                <li>
                    <a> {item.label} </a>
                </li>
            </Link>
        ))
    };

    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header-title">
                        <div className="header-title-logo">
                            <img className="header-logo" src={logo} alt="Logo"/>
                            <p className="header-logo-name"><em>NOVOVID</em></p>
                        </div>
                        <div className="header-title-nav__bar">
                            <ul>
                                {this.menu()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
