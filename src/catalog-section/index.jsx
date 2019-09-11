import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {catalogSections, catalog} from "../dictionary/catalog";
import {LeftMenu} from "../left-menu";
import './index.css';

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

    catalogItem = () => {
        return catalogSections.map((item) => {
            if (item.categoryName === this.props.match.params.id) {
                const splitItemLabel = item.label.split(' ').join('').toLowerCase();
                let url = `/catalog/${this.props.match.params.id}/${splitItemLabel}`;
                return (
                    <Link to={url}>
                        <div className="catalog-section-item">
                            <div className="catalog-section-item-title">{item.label}</div>
                            <div className="catalog-section-item-img"><img src={item.img}/></div>
                            <ul className="catalog-section-item-description">
                                <li>{item.description[0]}</li>
                                <li>{item.description[1]}</li>
                                <li>{item.description[2]}</li>
                                <li>{item.description[3]}</li>
                                <li>{item.description[4]}</li>
                            </ul>
                        </div>
                    </Link>
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