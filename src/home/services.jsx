import React from 'react';

import serviceOne from "../img/service1.jpg";
import serviceTwo from "../img/service2.jpg";
import serviceThree from "../img/service3.jpg";

import './index.css';


export const Services = () =>{
    return (
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
    )
};
