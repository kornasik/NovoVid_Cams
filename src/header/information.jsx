import React, {Fragment} from 'react';
import phone from '../img/phone.png';
import clock from '../img/clock.png'
import mail from '../img/mail.png';

import './index.css';

export const Information = () => {
    const info = () => {
        return (
            <Fragment>
                <div className="header-item">
                    <img className="header-item-icon" src={phone} />
                    <div className="header-item-wrapper">
                        <div className="header-item-title">ПОЗВОНИТЕ НАМ</div>
                        <a className="header-item-description" href="tel:+375291661221"> <div >+375291661221</div></a>
                    </div>

                </div>
                <div className="header-item">
                    <img className="header-item-icon" src={clock} />
                    <div className="header-item-wrapper">
                        <div className="header-item-title">РЕЖИМ РАБОТЫ</div>
                        <div className="header-item-description">Пн-Сб: 09.30 - 19.00</div>
                    </div>
                </div>
                <div className="header-item">
                    <img className="header-item-icon" src={mail} />
                    <div className="header-item-wrapper">
                        <div className="header-item-title">НАША ПОЧТА</div>
                        <div className="header-item-description">info@novovid.by</div>
                    </div>
                </div>
            </Fragment>
        )
    };

    const social = () => {
        return (
            <div className="social-block">
                <a href="https://t.me/novovid.by"><div className="social social-telegram" /></a>
                <a href="https://www.instagram.com/novovid.by/"><div className="social social-instagram" /></a>
                <a href="https://vk.com/novovid"><div className="social social-vk" /></a>
            </div>
        )
    };

    return (
        <Fragment>
            {info()}
            {social()}
        </Fragment>
    )
};
