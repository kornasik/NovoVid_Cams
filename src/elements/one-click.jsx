import React, {Component, Fragment} from 'react';
import close from '../img/del-item.png';

import './index.css';

export default class OneClick extends Component {
    viewPopUp = (event) => {
        event.preventDefault();
        document.querySelector('.pop-up-container').style.display = "block";
        document.querySelector('.pop-up-container').style.position = "absolute";
        document.querySelector('.pop-up-container').style.left = "0";
        document.querySelector('.pop-up-container').style.top = "0";

        document.querySelector('.pop-up').style.display = "block";
        document.querySelector('.pop-up').style.position = "absolute";
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
                <div
                    className="pop-up-container"
                    onClick={this.popUp}
                />
                <div
                    className="pop-up"
                    onClick={this.donTouch}
                >
                    <img
                        src={close}
                        onClick={this.closePopUp}
                    />
                    <span>Для быстро заказа введите Ваш номер телефонаю</span>
                    <input type="text"/>
                    <input type="number"/>
                    <button>Заказать</button>
                </div>
            </Fragment>

        )
    }
}
