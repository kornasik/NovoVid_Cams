import React, {Component} from "react";
import './index.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="footer-info">
                        <div className="footer-info-left">
                            <p>ИП Моторный А.А. УНП 39149900</p>
                            <p>Телефон: +375 (29) 166-12-21</p>
                        </div>
                        <div className="footer-info-right">
                            <p>Режим работы с 9.00 до 18.00 без выходных</p>
                            <p>г.Минск улица Киселева 55</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
