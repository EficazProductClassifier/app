import React, { Component } from 'react';
import Header from "../../components/Header";
import CategoriesService from "../../services/categories.js";

export default class EditCategory extends Component {
    render(){
        return (
            <div className="container">
                <Header />
                <p>Edit Category page.</p>
            </div>
        );
    }
}
