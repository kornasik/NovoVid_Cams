import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {catalog} from "../dictionary/catalog";
import './index.css';

export default class Catalog extends Component {
    catalogItems = () => {
        return catalog.map((item) => {
             let url = `/catalog/${item.link}`;
            return (
                <Link to={url}>
                    <div className="catalog-item">
                        <img src={item.img} className="catalog-item-img"/>
                        <h3 className="catalog-item-label">{item.label}</h3>
                    </div>
                </Link>
            )
        })
    };

    render() {
        return (
            <div className="container">
                <h1>Продукция</h1>
                <div className="line" style={{backgroundColor: 'black', height: '1px', width: '100%'}}/>
                <div className="catalog-container">
                    {this.catalogItems()}
                </div>
            </div>
        )
    }
}
