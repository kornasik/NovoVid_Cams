import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class AddBasketButton extends Component {
    availabilityItemMethod = (array, currentItem) => {
        let bool = false;
        array.forEach((item) => {
            if (item.label === currentItem.label) {
                bool = true;
            }
        });
        return bool;
    };

    updateBasket = (object) => {
        const tempArrayBasket = this.props.basket;
        if (tempArrayBasket.length !== 0) {
            tempArrayBasket.every((item) => {
                if (item.label === object.label) {
                    item.amount += object.amount;
                    return false;
                }
                return true;
            });

            const availabilityItem = this.availabilityItemMethod(tempArrayBasket, object);

            if (!availabilityItem) {
                tempArrayBasket.push(object);
            }

            let countBasket = 0;
            tempArrayBasket.forEach((item) => {
                countBasket += item.amount;
            });

            this.props.countBasketAction(countBasket);
            this.props.addBasket(tempArrayBasket);
        } else {
            this.props.countBasketAction(1);
            this.props.addBasket([object]);
        }
    };

    addBasket = (event) => {
        event.preventDefault();
        if (this.props.url) {
            const itemLabel = event.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].textContent;
            const itemPrice = Number((event.target.parentElement.parentElement.querySelector('.catalog-item-price').textContent).split(' ')[1]);
            const itemAmount = Number(event.target.parentElement.parentElement.querySelector('.counter-item_count').textContent);
            const newObj = {
                label: itemLabel,
                price: itemPrice,
                amount: itemAmount
            };
            this.updateBasket(newObj);
            localStorage.setItem('belvideo.by', JSON.stringify([...this.props.basket]));
        } else {
            const itemLabel = event.target.parentElement.parentElement.childNodes[0].textContent;
            const itemPrice = Number((event.target.parentElement.childNodes[0].textContent).split(' ')[0]);
            const itemAmount = Number(event.target.parentElement.childNodes[1].childNodes[1].textContent);
            const newObj = {
                label: itemLabel,
                price: itemPrice,
                amount: itemAmount
            };
            this.updateBasket(newObj);
            localStorage.setItem('belvideo.by', JSON.stringify([...this.props.basket]));
        }
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
        basket: state.basket
    }
};

export default connect(mapStateToProps, actions)(AddBasketButton);
