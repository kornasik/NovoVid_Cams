import React, {Component} from 'react';
import './index.css';

import {Logo} from './logo';
import Information from "./information";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header-wrapper">
                            <Logo/>
                            <Information/>
                    </div>
                </div>
            </div>

        )
    }
}
