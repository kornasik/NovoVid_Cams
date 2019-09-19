import React, {Component} from 'react';
import {formName} from "../dictionary";

import "./index.css"
export default class Form extends Component{

    form = () => {
        return formName.map((item)=>{
            return(
                <label>
                    {item.label}:
                    <input type={item.type} name={item.name} />
                </label>
            )
        })
    };

    render() {
        return(
            <form>
                {this.form()}
                <input className="form-btn" type="submit" value="Отправить" />
            </form>
        )
    }
}
