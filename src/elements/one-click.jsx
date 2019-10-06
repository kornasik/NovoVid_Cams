import React, {Component, Fragment} from 'react';
import close from '../img/del-item.png'

import './index.css';

export default class OneClick extends Component {
    viewPopUp = (event) => {
        event.preventDefault();
        document.querySelector('.pop-up-container').style.display = "block";
        document.querySelector('.pop-up-container').style.position = "absolute";
        document.querySelector('.pop-up-container').style.left = "0";
        document.querySelector('.pop-up-container').style.top = "0";

        document.querySelector('.pop-up').style.display = "block";
        document.querySelector('.pop-up').style.position = "fixed";
        document.querySelector('.pop-up').style.top = "200px";
        document.querySelector('.pop-up').style.left = "calc(50% - 150px)";

    };

    popUp = (event) => {
        event.preventDefault();
    };

    closePopUp = (event) => {
        event.preventDefault();
        document.querySelector('.pop-up-container').style.display = "none";
        document.querySelector('.pop-up').style.display = "none";
    };

    donTouch = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <Fragment>
                <div
                    className="one-click"
                    onClick={this.viewPopUp}
                />
                {this.props.label
                    ? <div
                        className="one-click-label"
                        onClick={this.viewPopUp
                        }>
                        {this.props.label}
                    </div>
                    : null}
                <div
                    className="pop-up-container"
                    onClick={this.popUp}
                />
                <div
                    className="pop-up"
                    onClick={this.donTouch}
                >
                    <form action="/" method="POST">
                        <img
                            src={close}
                            onClick={this.closePopUp}
                        />
                        <div className="pop-up_details">
                            <span className="pop-up_title">Для быстрого заказа введите Ваш номер телефона.</span>
                            <input className="pop-up_tel" type="tel" placeholder="+375291661221"/>
                            <div className="pop-up-item-number-wrapper">
                                <label htmlFor="pop-up_number" className="pop-up_number-label">
                                    Количество:
                                </label>
                                <input className="pop-up_number" id="pop-up_number" type="number"/>
                            </div>
                            <button type="submit">Заказать</button>
                        </div>
                    </form>
                </div>
            </Fragment>

        )
    }
}
