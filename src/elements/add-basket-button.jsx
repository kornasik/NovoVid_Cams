import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class AddBasketButton extends Component {

    generateBasketArray = (object) => {
        const {basket} = this.props;
        console.log(basket);
        if (basket.length !== 0) {
            let basketArray = basket;
            console.log('basketArray', basketArray);
            basketArray.forEach((item) => {
                console.log(item);
                if (object.label === item.label) {
                    item.amount += object.amount;
                } else {
                    basketArray.push(object);
                }
            });
            return basketArray;
        } else {
            return [object];
        }
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
                price: itemPrice,
                amount: itemAmount
            };
            const lcArray = [...this.props.basket, newObj];
            localStorage.setItem('belvideo.by', JSON.stringify(lcArray));
            this.props.addBasket(this.generateBasketArray(newObj));
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
