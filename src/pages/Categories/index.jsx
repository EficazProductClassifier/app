import React, { Component } from 'react';
import Header from "../../components/Header";
import CategoriesService from "../../services/categories.js";

export default class Categories extends Component {

    componentDidMount(){
        let categories = CategoriesService.all()
            .then(console.log);
    } 

    render(){
        return (
            <div className="container">
                <Header />
                <p>Categories page.</p>
            </div>
        );
    }
}
