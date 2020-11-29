import React, { Component } from 'react';
import Header from "../../components/Header";
import CategoriesService from "../../services/categories.js";

export default class CreateProduct extends Component {
    render(){
        return (
            <div className="container">
                <Header />
                <p>Create Product page.</p>
            </div>
        );
    }
}
