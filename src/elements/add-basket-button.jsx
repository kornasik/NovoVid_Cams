import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

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
            const itemLabel = event.target.parentElement.parentElement.parentElement.childNodes[0].textContent;
            const itemPrice = Number((event.target.parentElement.querySelector('.catalog-item-price').textContent).split(' ')[1]);
            const newObj = {
                label: itemLabel,
                price: itemPrice
            };
            this.props.addBasket(newObj);
            this.totalSum(itemPrice);

        } else {
            const itemLabel = event.target.parentElement.parentElement.childNodes[0].textContent;
            const itemPrice = Number((event.target.parentElement.childNodes[0].textContent).split(' ')[0]);
            const newObj = {
                label: itemLabel,
                price: itemPrice
            };
            this.props.addBasket(newObj);
            this.totalSum(itemPrice);
        }
    };

    totalSum = (priceItem) => {
        let sum = this.props.totalSum;
        sum += priceItem
        this.props.totalSumAction(sum);
    };

    render() {
        return (
            <div
                className="add-basket"
                onClick={this.addBasket}
            >
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

export default connect(mapStateToProps, actions)(AddBasketButton);
