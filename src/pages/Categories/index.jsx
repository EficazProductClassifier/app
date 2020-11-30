import React, { Component } from 'react';
import Header from "../../components/Header"
import CategoriesService  from "../../services/categories.js";

import CategoryList from '../../components/CategoryList';
import { Spinner, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [],
            fetchingData: true 
        };
        this.render = this.render.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.refreshData = this.refreshData.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.refreshData();
    } 

    refreshPage(){
        window.location.reload();
    }

    refreshData(){
        CategoriesService.all()
            .then(payload => {
                this.setState({categories: payload.data, fetchingData: false})
            })
            .catch(e => console.warn(e))
    }

    deleteCategory(uuid){
        CategoriesService.delete(uuid)
            .then(() => this.refreshPage());
    }

    renderSpinner(){
        return ( <Spinner color='primary'/> );
    }

    render(){
        return (
            <Container>
                <Header />
                <div className="page">
                    <h1 align="center" className="mt-2 mb-4">Categories page</h1>
                    {(this.state.fetchingData) ? (this.renderSpinner()) : (
                        <CategoryList data={this.state.categories} onDelete={this.deleteCategory}/>
                    )}
                    <div align="center">
                        <Link className="btn btn-success mt-3 mb-5" to='category/create'>Create a new category</Link>
                    </div>
                </div>
            </Container>
        );
    }
}
