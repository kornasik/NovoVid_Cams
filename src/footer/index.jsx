import React, {Component} from "react";
import './index.css';
import vk from '../img/vk.png';
import telegram from '../img/telegram.png';
import inst from '../img/inst.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="footer-info">
                        <div className="social">
                            <a href="#"><img src={vk} width='50px'/></a>
                            <a href="#"><img src={telegram} width='50px'/></a>
                            <a href="#"><img src={inst} width='50px'/></a>
                        </div>
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
