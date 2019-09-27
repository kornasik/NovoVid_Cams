import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../actions';
import {catalogSections} from "../dictionary/catalog";

import './index.css';

class Basket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            basket: props.basket,
            basketCount: props.basketCount
        };
    }

    renderOrderList = () => {
        const {basket} = this.props;
        console.log(basket);
        if (basket.length !== 0) {
            return basket.map((item) => {
                const id = item.label.split(' ').join('').toLowerCase();
                let price;
                if (!isNaN(item.price)) {
                    price = <div>{item.price} руб.</div>
                } else {
                    price = <div>-</div>
                }
                const image = this.showImage(item.label);
                const splitItemLabel = item.label.split(' ').join('').toLowerCase();
                const categoryItem = this.getCategoryItem(item.label);
                const url = `/catalog/${categoryItem}/${splitItemLabel}`;
                return (
                    <div className="order-item-block">
                        <Link to={url}>
                            <div className="order-item-label">
                                <img className="order-item-image" src={image}/>
                                <div className="order-item-label-block">
                                    {item.label}
                                </div>
                            </div>
                        </Link>
                        <div className="order-item-price">
                            <div className="order-item-quantity">
                                кол-во:
                                <div className="order-item-quantity-delete"
                                     id={item.label}
                                     onClick={this.deleteAmountItem}
                                />
                                {item.amount}
                                <div className="order-item-quantity-add"
                                     id={item.label}
                                     onClick={this.addAmountItem}
                                />
                            </div>
                            <div className="order-item-price-block">
                                {price}
                            </div>
                            <div
                                className="del-item-btn"
                                id={id}
                                onClick={this.deleteItem}
                            />
                        </div>
                    </div>
                )
            });
        } else {
            return (
                <div className="clear-basket">
                    Добавьте товар в корзину!
                </div>
            )
        }
    };

    addAmountItem = ({target: {id}}) => {
        const newArr = this.props.basket;
        newArr.forEach((item, index) => {
            if (item.label === id) {
                newArr[index].amount += 1;
                return;
            }
        });
        this.props.amountAdd(newArr);
        this.renderOrderList();
    };

    deleteAmountItem = ({target: {id}}) => {
        let newArr = this.props.basket;
        newArr.forEach((item, index) => {
            if (item.label === id && item.amount !== 1) {
                newArr[index].amount -= 1;
                return;
            }

            if(item.label === id && item.amount === 1){
               newArr = [...newArr.slice(0, index), ...newArr.slice(index + 1)];
               return;
            }

        });
        this.props.amountAdd(newArr);
        this.renderOrderList();
    };

    showImage = (labelItem) => {
        let srcImage;
        catalogSections.forEach((item) => {
            if (item.label === labelItem) {
                srcImage = item.img;
            }
        });
        return srcImage;
    };

    getCategoryItem = (labelItem) => {
        let categoryItem;
        catalogSections.forEach((item) => {
            if (item.label === labelItem) {
                categoryItem = item.categoryName;
            }
        });
        return categoryItem;
    };

    deleteItem = ({target}) => {
        const {basket, deleteItem} = this.props;
        basket.forEach(({label}, index) => {
            if (label.split(' ').join('').toLowerCase() === target.id) {
                const newArr = [...basket.slice(0, index), ...basket.slice(index + 1)];
                deleteItem(newArr);
                return null;
            }
        })
    };

    totalSum = () => {
        const {basket} = this.props;
        let sum = 0;
        basket.forEach(({price, amount}) => {
            if (isNaN(price)) {
                return null;
            }
            sum = price * amount + sum;
        });
        return (
            <h2 className="total-sum">
                Примерная сумма заказа {sum} руб.
            </h2>
        )
    };

    clearBasket = () => {
        this.props.clearBasket();
    };

    render() {
        const { basket } = this.props;
        return (
            <div className="basketBlock">
                <div className="container">
                    <div className="wrapper-header-for-basket">
                        <h1 className="basket-title">
                            Корзина
                        </h1>
                        {
                            basket.length !== 0 ?
                                <div className="basket-btn-clear">
                                    <button
                                        onClick={this.clearBasket}
                                    >
                                        Очистить корзину
                                    </button>
                                </div>
                                : null
                        }

                    </div>
                    {this.renderOrderList()}
                    {
                        basket.length !== 0 ?
                            this.totalSum()
                            : null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket
    }
};

export default connect(mapStateToProps, actions)(Basket);

;
