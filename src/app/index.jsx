import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import Header from "../header";
import Home from "../home";
import Catalog from "../catalog";
import CatalogSection from "../catalog-section";
import CatalogItem from "../catalog-item";
import Basket from "../basket";


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='app'>
                    <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/catalog" component={Catalog} />
                    <Route exact path="/basket" component={Basket} />
                    <Route exact path="/catalog/:id" component={CatalogSection} />
                    <Route exact path="/catalog/:id/:name" component={CatalogItem} />
                </div>
            </Router>
        )
    }
}
