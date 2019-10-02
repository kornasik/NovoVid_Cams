import React, {Component} from 'react';

export class PriceSection extends Component{
    render() {
        if(this.props.price){
            const price = Math.ceil(this.props.price * 0.032);
            return (
                <div className="price-section">
                    {price} Br
                </div>
            )
        } else{
            return (
                <div className="price-section">
                    Уточняйте
                </div>
            )
        }
    }
}
