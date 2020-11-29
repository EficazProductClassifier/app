import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../pages/Home';

import Products from '../pages/Products';
import EditProduct from '../pages/EditProduct'; 
import CreateProduct from '../pages/CreateProduct'; 

import Categories from '../pages/Categories';
import EditCategory from '../pages/EditCategory'; 
import CreateCategory from '../pages/CreateCategory'; 

export default class ApplicationRoutes extends Component {
    render(){
        return(
            <Router>
                <Route path="/" exact component={Home}/>

                <Route path="/products" exact component={Products}/>
                <Route path="/products/add" exact component={CreateProduct}/>
                <Route path="/products/edit/:uuid" exact component={EditProduct}/>

                <Route path="/categories" exact component={Categories}/>
                <Route path="/categories/add" exact component={CreateCategory}/>
                <Route path="/categories/edit/:uuid" exact component={EditCategory}/>
            </Router>
        );
    }
} 
