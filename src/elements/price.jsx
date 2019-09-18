import React from 'react';
import {catalogSections} from "../dictionary/catalog";

import './index.css'


export const Price = ({props}) => {
    console.log(props);
    return catalogSections.map((item) => {
        const splitItemLabel = item.label.split(' ').join('').toLowerCase();
        if (item.categoryName === props.match.params.id && splitItemLabel === props.match.params.name) {
            if (item.price) {
                const price = Math.ceil(item.price * 0.032);
                return (
                    <div className="catalog-item-price">
                        Цена: {price} руб.
                    </div>
                )
            } else {
                return (
                    <div className="catalog-item-price">
                        Цену уточняйте.
                    </div>
                )
            }
        }
    })
};
