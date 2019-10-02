import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "../actions";
import {pointsIssue} from "../dictionary";

import './index.css';

class MakeOrder extends Component {
    state = {
        delivery: false
    };

    deliveryChange = (event) => {
        if (event.target.id === "courier") {
            this.setState({
                delivery: true
            })
        } else {
            this.setState({
                delivery: false
            })
        }
    };

    pointsIssue = () => {
        return pointsIssue.map((item) => {
            return (
                <div className="address-delivery">- {item.total}</div>
            )
        })
    };

    pickUpDelivery = () => {
        return (
            <div className="delivery-pickup">
                <div>
                    Пункты выдачи:
                </div>
                {this.pointsIssue()}
            </div>

        )
    };

    courierDelivery = () => {
        return (
            <div className="courier-delivery">
                <label>
                    Адрес доставки:
                    <input type="text" placeholder=" г.Минск, улица Киселева 55"/>
                </label>
            </div>
        )
    };

    render() {
        const {totalSum} = this.props;
        return (
                <div className="make-order">
                    <div className="make-order-block-up">
                        <div className="make-order__block-left">
                            Ваши данные:<br/>
                            <label>
                                E-mail:
                                <input type="email" name="email"/>
                            </label>
                            <label>
                                Телефон:
                                <input type="tel" name="tel"/>
                            </label>
                            <label>
                                Имя:
                                <input type="text" name="name"/>
                            </label>
                        </div>
                        <div className="make-order__block-right">
                            Доставка:
                            <div
                                className="make-order__delivery-method"
                                onChange={this.deliveryChange}
                            >
                                <label>
                                    <input name="delivery" type="radio" id="pickup" defaultChecked/>
                                    Самовывоз бесплатно
                                </label>

                                <label>
                                    <input name="delivery" type="radio" id="courier"/>
                                    Курьером от 5 руб.
                                </label>
                            </div>
                            {this.state.delivery ? this.courierDelivery() : this.pickUpDelivery()}
                            <div className="promo-code">
                                <input type="text" placeholder="Промо-код"/>
                                <button>Применить</button>
                            </div>
                        </div>
                    </div>
                    <div className="make-order-block-down">
                        <div className="total-sum-block">
                            <div className="total-sum-title">
                                Итоговая стоимость:
                            </div>
                            <div className="total-sum-value">
                                {totalSum} руб.
                            </div>
                        </div>
                        <div className="confirm-order">
                            <button type="submit"> Оформить заказ</button>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        totalSum: state.totalSum
    }
};

export default connect(mapStateToProps, actions)(MakeOrder);
