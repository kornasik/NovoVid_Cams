import React from "react";
import {catalog} from "../dictionary/catalog";
import {Link} from "react-router-dom";

import './index.css';

export const LeftMenu = ({props}) => {
    return catalog.map((item) => {
        const urlBack = `../${item.link}`;
        const url = `${item.link}`;
        return (
            <Link to={props.match.params.name ? urlBack : url}>
                <div className="catalog-section-block-left-item">{item.label}</div>
            </Link>
        )
    })
};
