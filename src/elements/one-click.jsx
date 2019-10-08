import React, {Component, Fragment} from 'react';
import close from '../img/del-item.png'

import './index.css';

export default class OneClick extends Component {
    state = {
      labelClick: ''
    };

    viewPopUp = (event) => {
        event.preventDefault();
        this.setState({
            labelClick: String(event.target.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[0].textContent)
        });
        document.querySelector('.pop-up-container').style.display = "block";
        document.querySelector('.pop-up-container').style.position = "absolute";
        document.querySelector('.pop-up-container').style.left = "0";
        document.querySelector('.pop-up-container').style.top = "0";

        document.querySelector('.pop-up').style.display = "block";
        document.querySelector('.pop-up').style.position = "fixed";
        document.querySelector('.pop-up').style.top = "200px";
        document.querySelector('.pop-up').style.left = "calc(50% - 150px)";

    };

    closePopUp = () => {
        document.querySelector('.pop-up-container').style.display = "none";
        document.querySelector('.pop-up').style.display = "none";
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
                        onClick={this.viewPopUp}
                    >
                        {this.props.label}
                    </div>
                    : null}
                <div
                    className="pop-up-container"
                />
                <div
                    className="pop-up"
                >
                    <form action="/one.php" method="POST">
                        <img
                            src={close}
                            onClick={this.closePopUp}
                        />
                        <div className="pop-up_details">
                            <span className="pop-up_title">Для быстрого заказа введите Ваш номер телефона.</span>
                            <input className="pop-up_tel" name="phone" placeholder="+375291661221" required/>
                            <div className="pop-up-item-number-wrapper">
                                <label htmlFor="pop-up_number" className="pop-up_number-label">
                                    Количество:
                                </label>
                                <input className="pop-up_number" id="pop-up_number" name="amount" type="number"/>
                                <input style={{display: 'none'}} type="text" name="label" value={this.state.labelClick}/>
                            </div>
                            <button type="submit">Заказать</button>
                        </div>
                    </form>
                </div>
            </Fragment>

        )
    }
}
