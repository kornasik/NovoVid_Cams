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
            const itemPrice = event.target.parentElement.querySelector('.catalog-item-price').textContent;
                const newObj = {
                    label: itemLabel,
                    price: Number(itemPrice.split(' ')[1]),
                };
                this.props.addBasket(newObj);

        } else {
            const itemLabel = event.target.parentElement.childNodes[0].textContent;
            const itemPrice = event.target.parentElement.childNodes[1].textContent;
            const newObj = {
                label: itemLabel,
                price: Number(itemPrice.split(' ')[1])
            };
            this.props.addBasket(newObj);
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
