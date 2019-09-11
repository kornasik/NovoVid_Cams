import React, {Component, Fragment} from 'react';
import './index.css';
import {itemActivities, reviews} from '../dictionary';
import manager from '../img/manager.png';
import settings from '../img/settings.png';
import support from '../img/support.png';
import {catalogHome} from "../dictionary/catalog";
import {Link} from "react-router-dom";


export default class Home extends Component {
    catalogItems = () => {
        return catalogHome.map((item) => {
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
                <div className="wrapper-home">
                    <div className="container">
                        <div className="description-text">
                            <div className="text">
                                <em>
                                    <strong className="header-description-text-title">«Видео.Бел» </strong>
                                    - это утвердившаяся на рынке систем безопасности торговая марка,
                                    созданная командой профессионалов, которая проектирует, выпускает и модернизирует
                                    собственную линейку оборудования для систем видеонаблюдения. Новое поколение
                                    высокотехнологичного оборудования «Видео.Бел» отражает наиболее актуальные
                                    потребности современного рынка систем безопасности.
                                </em>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="main-wrapper">
                        <h2 className="catalog-home-title">Каталог</h2>
                        <div style={{textAlign: 'end'}}><Link to="/catalog/">Подробнее</Link></div>
                        <div className="catalog-container">
                            {this.catalogItems()}
                        </div>
                        <div className="services">
                            <h2 className="services-title">Услуги</h2>
                            <div className="services-item">
                                <div className="services-item-block">
                                    <img className="services-img" src={manager} alt="logo"/>
                                    <div>Бесплатный выезд менеджера</div>
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
                        </div>
                        <div className="activities">
                            <h2>Основными направлениями разработок являются:</h2>
                            <ul className="activities-items-block">
                                {this.activities()}
                            </ul>
                        </div>
                        <h2 className="reviews-block-title">Отзывы</h2>
                        <div className="reviews-block">
                            {this.requests()}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
