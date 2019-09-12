import React, {Fragment} from 'react';
import {headerInformation} from "../dictionary";
import phone from '../img/phone.png';
import mail from '../img/mail.png';
import address from '../img/address.png';
import vk from '../img/vk.png';
import telegram from '../img/telegram.png';
import inst from '../img/inst.png';

import './index.css';

export const Information = () => {
    const info = () => {
        return (
            <div className="information-title">
                {headerInformation.title.toUpperCase()}
                <div className="information-contacts">
                    <div className="information-up-line">
                        <div className="information-item-wrapper">
                            <div className="information-item">
                                <div className="information-item-img"><img src={vk}/></div>
                                {headerInformation.vk}
                            </div>
                            <div className="information-item">
                                <div className="information-item-img"><img src={phone}/></div>
                                {headerInformation.tel}
                            </div>
                        </div>
                        <div className="information-item-wrapper">
                            <div className="information-item">
                                <div className="information-item-img"><img src={mail}/></div>
                                {headerInformation.mail}
                            </div>
                            <div className="information-item">
                                <div className="information-item-img"><img src={telegram}/></div>
                                {headerInformation.inst}
                            </div>
                        </div>
                        <div className="information-item-wrapper">
                            <div className="information-item">
                                <div className="information-item-img"><img src={address}/></div>
                                {headerInformation.address}
                            </div>
                            <div className="information-item">
                                <div className="information-item-img"><img src={inst}/></div>
                                {headerInformation.url}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
    return (
        <Fragment>
            {info()}
        </Fragment>
    )
};
