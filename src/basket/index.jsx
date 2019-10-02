import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../actions';
import {catalogSections} from "../dictionary/catalog";
import MakeOrder from "./make-order";

import './index.css';


class Basket extends Component {
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
        const {basket, deleteItem, totalSum, totalSumAction} = this.props;
        basket.forEach((item, index) => {
            if (item.label.split(' ').join('').toLowerCase() === target.id) {
                const newArr = [...basket.slice(0, index), ...basket.slice(index + 1)];
                const newTotalSum = totalSum - item.price;
                totalSumAction(newTotalSum);
                deleteItem(newArr);
                return null;
            }
        })
    };

    clearBasket = () => {
        this.props.clearBasket();
    };

    render() {
        const {basket} = this.props;
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
                            <MakeOrder />
                            : null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
        totalSum: state.totalSum
    }
};

export default connect(mapStateToProps, actions)(Basket);

;
