import React, {Component} from 'react';

export class PriceSection extends Component{
    render() {
        if(this.props.price){
            const price = Math.ceil(this.props.price * 0.032);
            return (
                <div className="price-section">
                    Цена: {price} руб.
                </div>
            )
        } else{
            return (
                <div className="price-section">
                    Цену уточняйте.
                </div>
            )
        }
    }
}
