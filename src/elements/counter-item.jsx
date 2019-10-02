import React, {Component} from 'react';

import './index.css';

export default class CounterItem extends Component {
    state = {
        count: 1
    };

    increase = (event) => {
        const {count} = this.state;
        event.preventDefault();
        this.setState({
            count: count + 1
        })
    };

    decrease = (event) => {
        const {count} = this.state;
        event.preventDefault();
        if(this.state.count > 1){
            this.setState({
                count: count - 1
            })
        }

    };

    render() {
        const {count} = this.state;

        return (
            <div className="counter-item">
                <div
                    className="counter-item_increase"
                    onClick={this.increase}
                >
                    +
                </div>
                <div className="counter-item_count">
                    {count}
                </div>
                <div
                    className="counter-item_decrease"
                    onClick={this.decrease}
                >
                    -
                </div>
            </div>
        )
    }
}

