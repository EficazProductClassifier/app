import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';
import Categories from '../pages/Categories';


export default class ApplicationRoutes extends Component {
    render(){
        return(
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/products" exact component={Products}/>
                <Route path="/categories" exact component={Categories}/>
            </Router>
        );
    }
} 
