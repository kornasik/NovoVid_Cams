import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import basketImg from "../img/basket.png";

class BasketIcon extends Component{
    render() {
        const {basketCount} = this.props;
        return(
            <div className="basket">
                <Link to="/basket">
                    <div className="basket-count">
                        {basketCount}
                    </div>
                    <img className="basket-icon" src={basketImg}/>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basketCount: state.basketCount
    }
};

export default connect(mapStateToProps,)(BasketIcon);
