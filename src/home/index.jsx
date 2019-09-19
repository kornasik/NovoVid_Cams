import React, {Component, Fragment} from 'react';

import {Link} from "react-router-dom";
import {catalogHome} from "../dictionary/catalog";

import serviceOne from '../img/service1.jpg';
import serviceTwo from '../img/service2.jpg';
import serviceThree from '../img/service3.jpg';

import Form from "../elements/form";

import './index.css';



export default class Home extends Component {
    catalogItems = () => {
        return catalogHome.map((item, index) => {
            let url = `/catalog/${item.link}`;
            return (
                <Link to={url}>
                    <div className="catalog-home-item">
                        <img src={item.img} className="catalog-home-item-img"/>
                        <h3 className="catalog-item-label">{item.label}</h3>
                        <div className="catalog-item-btn">ПЕРЕЙТИ В КАТАЛОГ</div>
                    </div>
                </Link>
            )
        })
    };

    video = () => {
        return (
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ecdg_xccaUs" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        )
    };

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="main-wrapper">
                        <div className="catalog-container">
                            {this.catalogItems()}
                        </div>
                        <div className="services">
                            <div className="service-block-item">
                                <div className="service-img">
                                    <img src={serviceOne}/>
                                </div>
                                <h3>КОММЕРЧЕСКАЯ НЕДВИЖИМСОТЬ</h3>
                                <div className="service-description">
                                    Система безопасности Бизнес-центра как объекта с большим человекопотоком на базе
                                    оборудования Proto-X.<br/>
                                    Для получения коммерческого предложения заполните форму ниже.
                                </div>
                            </div>
                            <div className="service-block-item">
                                <div className="service-img">
                                    <img src={serviceTwo}/>
                                </div>
                                <h3>ТРАНСПОРТ</h3>
                                <div className="service-description">
                                    Система видеонаблюдения для общественного транспорта на базе профессионального
                                    оборудования для видеонаблюдения Proto-X
                                    Для получения коммерческого предложения заполните форму ниже.
                                </div>
                            </div>
                            <div className="service-block-item">
                                <div className="service-img">
                                    <img src={serviceThree}/>
                                </div>
                                <h3>ДОМА И СОЦИАЛЬНЫЕ ОБЪЕКТЫ</h3>
                                <div className="service-description">
                                    Система безопасности и мониторинг ситуации на придомовой территории многоквартирных
                                    домов детских садиков и школ.
                                    Для получения коммерческого предложения заполните форму ниже.
                                </div>
                            </div>
                        </div>
                        <div className="feedback-block">
                            {this.video()}
                            <Form/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
