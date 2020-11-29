import React, { Component } from 'react';
import Header from "../../components/Header";
import CategoriesService from "../../services/categories.js";

export default class EditProduct extends Component {
    render(){
        return (
            <div className="container">
                <Header />
                <p>Edit Product page.</p>
            </div>
        );
    }
}
