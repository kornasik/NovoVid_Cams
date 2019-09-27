import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import * as actions from '../actions';

import './index.css';

class OrderList extends Component {
    render() {
        const {item, url} = this.props;
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
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket
    }
};

export default connect(mapStateToProps, actions)(OrderList)
