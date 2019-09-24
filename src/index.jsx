import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from "./reducer";
import Footer from "./footer";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('content'));

ReactDOM.render(
        <Footer/>
        , document.getElementById('footer'));
