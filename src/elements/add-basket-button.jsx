import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class AddBasketButton extends Component {

    basketCount = (array) => {
        let count = 0;
        array.forEach((item) => {
            count += item.amount;
            return;
        });
        this.props.basketCountAction(count);
    };

    myIncludes = (array, name) => {
        let boolean = false;
        array.forEach((item) => {
            if (item.label === name) {
                return boolean = true;
            }
        });
        return boolean;
    };

    countItem = (array, nameItem, priceItem) => {
        if (array.length !== 0) {
            let newArr = this.props.basket;
            newArr.forEach((itemOne) => {
                if (itemOne.label === nameItem) {
                    itemOne.amount += 1;
                }
            });

            if (!this.myIncludes(newArr, nameItem)) {
                newArr = [...newArr, {
                    label: nameItem,
                    price: priceItem,
                    amount: 1
                }]
            }
            return newArr;
        } else {
            return [{
                label: nameItem,
                price: priceItem,
                amount: 1
            }]
        }
    };

    addBasket = (event) => {
        event.preventDefault();
        if (this.props.url) {
            const itemLabel = event.target.parentElement.parentElement.parentElement.childNodes[0].textContent;
            const itemPrice = Number((event.target.parentElement.querySelector('.catalog-item-price').textContent).split(' ')[1]);
            const itemBasket = this.countItem(this.props.basket, itemLabel, itemPrice);
            this.props.addBasket(itemBasket);
            this.basketCount(this.props.basket);
        } else {
            const itemLabel = event.target.parentElement.childNodes[0].textContent;
            const itemPrice = Number((event.target.parentElement.childNodes[1].textContent).split(' ')[1]);
            const itemBasket = this.countItem(this.props.basket, itemLabel, itemPrice);
            this.props.addBasket(itemBasket);
            this.basketCount(this.props.basket);
        }
    };

    render() {
        return (
            <a
                href=""
                className="add-basket"
                onClick={this.addBasket}
            >
                Добавить в корзину
            </a>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket
    }
};

export default connect(mapStateToProps, actions)(AddBasketButton);
