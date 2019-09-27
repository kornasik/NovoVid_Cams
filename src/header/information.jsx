import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import BasketIcon from "./basket-icon";
import {Social} from "./social";
import phone from '../img/phone.png';
import clock from '../img/clock.png'
import mail from '../img/mail.png';

import './index.css';


class Information extends Component {
    info = () => {
        return (
            <Fragment>
                <div className="header-item">
                    <img className="header-item-icon" src={mail}/>
                    <div className="header-item-wrapper">
                        <div className="header-item-title">НАША ПОЧТА</div>
                        <div className="header-item-description">info@novovid.by</div>
                    </div>
                </div>

                <div className="header-item">
                    <img className="header-item-icon" src={clock}/>
                    <div className="header-item-wrapper">
                        <div className="header-item-title">РЕЖИМ РАБОТЫ</div>
                        <div className="header-item-description">Пн-Сб: 09.30 - 19.00</div>
                    </div>
                </div>

                <div className="header-item">
                    <img className="header-item-icon" src={phone}/>
                    <div className="header-item-wrapper">
                        <div className="header-item-title">ПОЗВОНИТЕ НАМ</div>
                        <a className="header-item-description" href="tel:+375291661221">
                            <div>+375291661221</div>
                        </a>
                    </div>
                </div>

            </Fragment>
        )
    };

    render() {
        return (
            <Fragment>
                {this.info()}
                <div className="right-block">
                    <BasketIcon />
                    <Social />
                </div>
            </Fragment>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
        basketCount: state.basketCount
    }
};

export default connect(mapStateToProps,)(Information);
