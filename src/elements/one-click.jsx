import React, {Component, Fragment} from 'react';

import './index.css';

export default class OneClick extends Component {
    viewPopUp = (event) => {
        event.preventDefault();
        event.stopPropagation();
        document.querySelector('.pop-up-container').style.display = "block";
        document.querySelector('.pop-up-container').style.position = "absolute";
        document.querySelector('.pop-up-container').style.left = "0";
        document.querySelector('.pop-up-container').style.top = "0";

        document.querySelector('.pop-up').style.display = "block";
        document.querySelector('.pop-up').style.position = "absolute";
        document.querySelector('.pop-up').style.top = "50%";
        document.querySelector('.pop-up').style.left = "50%";

    };

    popUp = (event) =>{
        event.preventDefault();
    };

    render() {
        return (
            <Fragment>
                <div
                    className="one-click"
                    onClick={this.viewPopUp}
                />
                <div
                    className="pop-up-container"
                    onClick={this.popUp}
                >
                    <div className="pop-up">

                    </div>
                </div>
            </Fragment>

        )
    }
}
