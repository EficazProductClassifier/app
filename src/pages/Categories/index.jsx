import React, { Component } from 'react';
import Header from "../../components/Header"
import CategoryService from "../../services/categories.js";
import CategoryList from '../../components/CategoryList';
import { Spinner, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

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
            <Container>
                <Header />
                <div className="page">
                    <p>Categories page.</p>
                    {(this.state.fetchingData) ? (this.renderSpinner) : (
                        <CategoryList data={this.state.categories} />
                    )}
                    <div align="center">
                        <Link className="btn btn-success mt-5" to='category/create'>Criar uma nova categoria</Link>
                    </div>
                </div>
            </Container>
        );
    }
}
