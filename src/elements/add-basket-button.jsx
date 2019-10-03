import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import basket from '../img/basket.png';

class AddBasketButton extends Component {
    countItem = (array, name) => {
        array.forEach((item) => {
            if (item.label === name) {
                return true;
            }
        })
    };

    addBasket = (event) => {
        event.preventDefault();
        if (this.props.url) {
            const itemLabel = event.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].textContent;
            const itemPrice = Number((event.target.parentElement.parentElement.querySelector('.catalog-item-price').textContent).split(' ')[1]);

            const newObj = {
                label: itemLabel,
                price: itemPrice
            };
            const lcArray = [...this.props.basket, newObj];
            localStorage.setItem('belvideo.by', JSON.stringify(lcArray));
            this.props.addBasket(newObj);
            this.totalSum(itemPrice);
        } else {
            const itemLabel = event.target.parentElement.parentElement.childNodes[0].textContent;
            const itemPrice = Number((event.target.parentElement.childNodes[0].textContent).split(' ')[0]);
            const itemAmount = Number(event.target.parentElement.childNodes[1].childNodes[1].textContent);
            const newObj = {
                label: itemLabel,
                price: itemPrice
            };
            const lcArray = [...this.props.basket, newObj];
            localStorage.setItem('belvideo.by', JSON.stringify(lcArray));
            this.props.addBasket(newObj);
            this.totalSum(itemPrice);
        }
    };

    totalSum = (priceItem) => {
        let sum = this.props.totalSum;
        sum += priceItem;
        this.props.totalSumAction(sum);
    };

    render() {
        return (
            <Fragment>
                <div
                    className="add-basket"
                    onClick={this.addBasket}
                />
                {this.props.label ?
                    <div
                        className="add-basket-label"
                        onClick={this.addBasket}
                    >{this.props.label}
                    </div>
                    : null}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
        totalSum: state.totalSum
    }
};

export default connect(mapStateToProps, actions)(AddBasketButton);
