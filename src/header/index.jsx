import React, {Component} from 'react';
import './index.css';

import {Logo} from './logo';
import {Information} from "./information";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-title">
                            <Logo/>
                        </div>
                        <div className="wrapper-information">
                            <div className="line"/>
                            <Information/>
                        </div>
                    </div>
                    <div className="line"/>
                </div>
            </div>

        )
    }
}
