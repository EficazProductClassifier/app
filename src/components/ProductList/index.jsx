import React, { Component } from 'react';
import { ListGroup, ListGroupItemText, ListGroupItemHeading, ListGroupItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
    constructor(props){
        super(props);
        this.render = this.render.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.generateProductItem = this.generateProductItem.bind(this);
        this.state = {
            productList: []
        }
    }

    componentDidMount(){
        this.setState({productList: [...this.props.data]});
    }

    generateProductItem(product){
        return (
            <ListGroupItem key={product.id}>
                <ListGroupItemHeading>{product.nome}</ListGroupItemHeading>
                <ListGroupItemText>{product.categoria.nome}</ListGroupItemText>
                <div className="d-flex">
                    <div className="ml-auto">
                        <Link className="btn btn-warning mr-1" to={`product/edit/${product.id}`}>Edit</Link>
                        <Button color="danger" >Delete</Button>
                    </div>
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
                <ListGroup className="container">
                    {(this.state.productList.length === 0) ? (
                        <strong>No products to show you.</strong>
                    ) : renderProductList}
                </ListGroup>
            </div>
        )
    }
}
