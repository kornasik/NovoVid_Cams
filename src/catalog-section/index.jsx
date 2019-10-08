import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {catalogSections, catalog} from "../dictionary/catalog";
import {LeftMenu} from "../left-menu";
import {PriceSection} from './price-section';
import AddBasketButton from "../elements/add-basket-button";
import OneClick from "../elements/one-click";
import './index.css';
import CounterItem from "../elements/counter-item";

export default class CatalogSection extends Component {
    sectionBlock = () => {
        return catalog.map((item) => {
            if (item.link === this.props.match.params.id) {
                return (
                    <div>{item.label}</div>
                )
            }
        })
    };

    sortDown = (itemBlockA, itemBlockB) => {
        if (itemBlockA.price < itemBlockB.price) return 1;
    };

    newArr = catalogSections.sort(this.sortDown);

    catalogItem = () => {
        return this.newArr.map((item) => {
            if (item.categoryName === this.props.match.params.id) {
                const splitItemLabel = item.label.split(' ').join('').toLowerCase();
                let url = `/catalog/${this.props.match.params.id}/${splitItemLabel}`;
                return (
                    <div className="catalog-section-item-block">
                        <Link to={url}>
                            <div className="catalog-section-item">
                                <div className="catalog-section-item-title">{item.label}</div>
                                <div className="catalog-section-item-img"><img src={item.img}/></div>
                                <ul className="catalog-section-item-description">
                                    <li>{item.description[0]}</li>
                                    <li>{item.description[1]}</li>
                                    <li>{item.description[2]}</li>
                                    <li>{item.description[3]}</li>
                                    <li style={{marginBottom: '15px'}}>{item.description[4]}</li>
                                </ul>
                            </div>
                        </Link>
                        <div className="info-buy catalog-section-info-buy">
                            <PriceSection
                                price={item.price}
                            />
                            <CounterItem />
                            <OneClick
                                itemLabel={item.label}
                            />
                            <AddBasketButton/>
                        </div>
                    </div>
                );
            }
        })
    };

    render() {
        return (
            <div className="container">
                <div className="catalog-section-block-title">
                    {this.sectionBlock()}
                </div>
                <div className="catalog-section-block">
                    <Link className="btn-home" to="/" style={{position: 'absolute'}}>
                        Главная
                    </Link>
                    <div className="catalog-section-block-left">
                        <div className="catalog-section-block-left-title">
                            Каталог
                        </div>
                        <LeftMenu
                            props={this.props}
                        />
                    </div>
                    <div className="catalog-section-block-right">
                        {this.catalogItem()}
                    </div>
                </div>
            </div>
        )
    }
}
