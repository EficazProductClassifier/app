import React, { Component } from 'react';
import Header from "../../components/Header"
import ProductsService from "../../services/products.js";
import ProductList from '../../components/ProductList';
import { Spinner, Container, } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: [],
            fetchingData: true 
        };
        this.render = this.render.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.refreshData = this.refreshData.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount(){
        this.refreshData();
    } 

    refreshData(){
        ProductsService.all()
            .then(payload => {
                this.setState({products: payload.data, fetchingData: false})
            })
            .catch(e => console.warn(e))
    }

    deleteProduct(uuid){
        ProductsService.delete(uuid)
            .then(this.refreshData());
    }

    renderSpinner(){
        return ( <Spinner color='primary'/> );
    }

    render(){
        return (
            <Container >
                <Header />
                <div className="page">
                    <p>Products page.</p>
                    {(this.state.fetchingData) ? (this.renderSpinner()) : (
                        <ProductList data={this.state.products} onDelete={this.deleteProduct}/>
                    )}
                    <div align="center">
                        <Link className="btn btn-success mt-3 mb-5" to='product/create'>Criar um novo produto</Link>
                    </div>
                </div>
            </Container>
        );
    }
}
