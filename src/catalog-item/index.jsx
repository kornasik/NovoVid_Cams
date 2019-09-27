import React, {Component} from 'react';
import {LeftMenu} from "../catalog-section/left-menu";
import {catalogSections} from "../dictionary/catalog";
import {Link} from "react-router-dom";
import {Price} from "../elements/price";
import AddBasketButton from '../elements/add-basket-button';

import './index.css';


export default class CatalogItem extends Component {
    catalogItemTitle = () => {
        return catalogSections.map((item) => {
            const splitItemLabel = item.label.split(' ').join('').toLowerCase();
            if (item.categoryName === this.props.match.params.id && splitItemLabel === this.props.match.params.name) {
                return (
                    <div>{item.label}</div>
                )
            }
        })
    };

    catalogItemImg = () => {
        return catalogSections.map((item) => {
            const splitItemLabel = item.label.split(' ').join('').toLowerCase();
            if (item.categoryName === this.props.match.params.id && splitItemLabel === this.props.match.params.name) {
                return (
                    <div><img src={item.img}/></div>
                )
            }
        })
    };

    catalogItemDescription = () => {
        return catalogSections.map((item) => {
            const splitItemLabel = item.label.split(' ').join('').toLowerCase();
            if (item.categoryName === this.props.match.params.id && splitItemLabel === this.props.match.params.name) {
                return item.description.map((item) => (
                    <li>{item}</li>
                ))
            }
        })
    };

    catalogItemSpecification = () => {
        return catalogSections.map((item) => {
            const splitItemLabel = item.label.split(' ').join('').toLowerCase();
            if (item.categoryName === this.props.match.params.id && splitItemLabel === this.props.match.params.name) {
                const table = item.nameSpecification.concat(item.specification);
                return item.nameSpecification.map((item1, index) => {
                    return (
                        <div className="catalog-item-block-specification">
                            <div className="catalog-item-block-specification-name">{item1}</div>
                            <div
                                className="catalog-item-block-specification-value">{table[index + item.nameSpecification.length]}</div>
                        </div>
                    )
                })
            }
        })
    };

    render() {
        return (
            <div className="container">
                <div className="catalog-item-block">
                    <Link to="/" style={{position: 'absolute'}}>
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
                    <div className="catalog-item-block-right">
                        <div className="catalog-item-title">
                            {this.catalogItemTitle()}
                        </div>
                        <div className="catalog-item-wrapper-img-description">
                            <div className="catalog-item-img">
                                {this.catalogItemImg()}
                            </div>
                            <ul className="catalog-item-description">
                                <div className="catalog-item-description-title">Описание</div>
                                {this.catalogItemDescription()}
                                <Price
                                    props={this.props}
                                />
                                <AddBasketButton
                                    url={this.props}
                                />
                            </ul>
                        </div>
                        <div className="catalog-item-specification">
                            <div className="catalog-item-specification-title">Спецификация</div>
                            {this.catalogItemSpecification()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
