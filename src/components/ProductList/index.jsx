import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
    constructor(props){
        super(props);
        this.render = this.render.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.generateProductItem = this.generateProductItem.bind(this);
        this.state = {
            productList: [],
            fetchingProducts: true
        }
    }

    componentDidMount(){
        console.log('props data', this.props.data);
        this.setState({productList: [...this.props.data], fetchingProducts: false});
    }


    generateProductItem(product){
        return (
            <ListGroupItem className="d-flex">
                <strong>{product.nome}</strong>
                <div className="ml-auto">
                    <Link className="btn btn-warning mr-1" to={`edit/${product.id}`}>Edit</Link>
                    <Button color="danger" >Delete</Button>
                </div>
            </ListGroupItem>
        );        
    }


    render(){
        let renderProductList = [];
        for(let i = 0; i < this.state.productList.length; i++){
            renderProductList.push(this.generateProductItem(this.state.productList[i]))
        }

        return ( 
            <div className="container">
                {(this.state.fetchingProducts) ? ( <Spinner color='primary'/>) : (
                    <ListGroup className="container">
                        {(this.state.productList.length === 0) ? (
                            <strong>No products to show you.</strong>

                        ) : renderProductList}
                    </ListGroup>
                )}
            </div>
        )
    }
}
