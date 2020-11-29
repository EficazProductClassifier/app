import React, { Component } from 'react';
import Header from "../../components/Header"
import CategoryService from "../../services/categories.js";
import CategoryList from '../../components/CategoryList';
import { Spinner } from 'reactstrap';

export default class Categories extends Component {

    constructor(props){
        super(props);
        this.state = {
            categoryList: [],
            fetchingData: true 
        };
        this.render = this.render.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        CategoryService.all()
            .then(payload => {
                this.setState({categories: payload.data, fetchingData: false})
            })
            .catch(e => console.warn(e))
    } 

    renderSpinner(){
        return ( <Spinner color='primary'/> );
    }

    render(){
        return (
            <div className="container">
                <Header />
                <div className="page">
                    <p>Categories page.</p>
                    {(this.state.fetchingData) ? (this.renderSpinner) : (
                        <CategoryList data={this.state.categories} />
                    )}
                </div>
            </div>
        );
    }
}
