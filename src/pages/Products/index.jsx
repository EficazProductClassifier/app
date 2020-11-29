import React, { Component } from 'react';
import Header from "../../components/Header"
import ProductsService from "../../services/products.js";
import ProductList from '../../components/ProductList';
import { Spinner } from 'reactstrap';

export default class Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: [],
            fetchingData: true 
        };
        this.render = this.render.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        ProductsService.all()
            .then(payload => {
                this.setState({products: payload.data, fetchingData: false})
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
                    <p>Products page.</p>
                    {(this.state.fetchingData) ? (this.renderSpinner) : (
                        <ProductList data={this.state.products} />
                    )}
                </div>
            </div>
        );
    }
}
