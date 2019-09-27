import React, {Component, Fragment} from 'react';

import {Link} from "react-router-dom";
import {catalogHome} from "../dictionary/catalog";


import Form from "../elements/form";
import {Services} from "./services";

import './index.css';


export default class Home extends Component {
    catalogItems = () => {
        return catalogHome.map((item) => {
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
                        <Services/>
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
