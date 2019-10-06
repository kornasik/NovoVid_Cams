import React, {Component} from "react";
import {Link} from "react-router-dom";
import basket from "../img/basket.png";
import {connect} from 'react-redux';
import '../index.css';


class SocialAndBasket extends Component{
    countBasket = () => {
        let count = 0;
        this.props.basket.forEach((item)=>{
            count += item.amount
        });
        return count;
    };
    render() {
        return(
            <div className="right-block">
                <div className="basket">
                    <Link to="/basket">
                        <div className="basket-count">
                            {this.countBasket()}
                        </div>
                        <img className="basket-icon" src={basket}/>
                    </Link>
                </div>
                <div className="social-block row">
                    <a href="https://t.me/belvideo.by">
                        <div className="social social-telegram col"/>
                    </a>
                    <a href="https://www.instagram.com/belvideo.by/">
                        <div className="social social-instagram col"/>
                    </a>
                    <a href="https://vk.com/belvideo.by">
                        <div className="social social-vk col"/>
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
        countBasket: state.countBasket

    }
};

export default connect(mapStateToProps, null)(SocialAndBasket);
