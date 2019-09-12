import React, {Component, Fragment} from 'react';
import './index.css';
import {itemActivities, reviews} from '../dictionary';
import manager from '../img/manager.png';
import settings from '../img/settings.png';
import support from '../img/support.png';
import {Link} from "react-router-dom";
import {catalog} from "../dictionary/catalog";
import off from '../img/off.png';
import sale from '../img/sale.png';


export default class Home extends Component {
    catalogItems = () => {
        return catalog.map((item) => {
            let url = `/catalog/${item.link}`;
            return (
                <Link to={url}>
                    <div className="catalog-home-item">
                        <img src={item.img} className="catalog-home-item-img"/>
                        <h3 className="catalog-item-label">{item.label}</h3>
                    </div>
                </Link>
            )
        })
    };

    activities = () => {
        return itemActivities.map((item) => (
            <li className="activities-items">{item}</li>
        ))
    };

    requests = () => {
        return reviews.map(({text, img}) => (
            <div className="reviews-item">
                <img className="reviews-image" src={img}/>
                <p className="reviews-text">{text}</p>
            </div>
        ))
    };

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="main-wrapper">
                        <h2 className=" information-title">ПРОДУКЦИЯ</h2>
                        <div className="catalog-container">
                            {this.catalogItems()}
                        </div>
                        <div className="services">
                            <div className="line"/>
                            <h2 className="services-title information-title">ПРЕИМУЩЕСТВА</h2>
                            <div className="services-item">
                                <div className="services-item-block">
                                    <img className="services-img" src={manager} alt="logo"/>
                                    <div>БЕСПЛАТНЫЙ выезд инженера</div>
                                </div>
                                <div className="services-item-block">
                                    <img className="services-img" src={settings}/>
                                    <div>Простой монтаж</div>
                                </div>
                                <div className="services-item-block">
                                    <img className="services-img" src={support}/>
                                    <div>Круглосуточная поддержка</div>
                                </div>
                            </div>
                            <div className="services-item services-item-down">
                                <div className="services-item-block">
                                    <img className="services-img" src={off}/>
                                    <div>Оффициальный дистрибьютор</div>
                                </div>
                                <div className="services-item-block">
                                    <img className="services-img" src={sale}/>
                                    <div>Гибкая система скидок</div>
                                </div>
                            </div>
                        </div>
                        <div className="line"/>
                        <h2 className="reviews-block-title information-title">Отзывы</h2>
                        <div className="reviews-block">
                            {this.requests()}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
