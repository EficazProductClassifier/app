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
                <Route path="/product/create" exact component={CreateProduct}/>
                <Route path="/product/edit/:uuid" exact component={EditProduct}/>

                <Route path="/categories" exact component={Categories}/>
                <Route path="/category/create" exact component={CreateCategory}/>
                <Route path="/category/edit/:uuid" exact component={EditCategory}/>
            </Router>
        );
    }
} 
