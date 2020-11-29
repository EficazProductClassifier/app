import React, { Component } from 'react';
import Header from "../../components/Header"
import ProductsService from "../../services/products.js";

export default class Products extends Component {
    componentDidMount(){
        let products = ProductsService.all()
            .then(console.log);
    } 

    render(){
        return (
            <div className="container">
                <Header />
                <p>Products page.</p>
            </div>
        );
    }
}
