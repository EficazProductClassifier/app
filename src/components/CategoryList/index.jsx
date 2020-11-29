import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class CategoryList extends Component {
    constructor(props){
        super(props);
        this.render = this.render.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.generateCategoryItem = this.generateCategoryItem.bind(this);
        this.state = {
            categoryList: []
        }
    }

    componentDidMount(){
        this.setState({categoryList: [...this.props.data]});
    }


    generateCategoryItem(category){
        return (
            <ListGroupItem className="d-flex">
                <strong>{category.nome}</strong>
                <div className="ml-auto">
                    <Link className="btn btn-warning mr-1" to={`edit/${category.id}`}>Edit</Link>
                    <Button color="danger" >Delete</Button>
            </div>
            </ListGroupItem>
        );  
    }

    render(){
        let renderCategoryList = [];
        for(let i = 0; i < this.state.categoryList.length; i++){
            renderCategoryList.push(this.generateCategoryItem(this.state.categoryList[i]))
        }
        return ( 
            <div className="container">
                <ListGroup className="container">
                    {(this.state.categoryList.length === 0) ? (
                        <strong>No Categories to show you.</strong>

                    ) : renderCategoryList}
                </ListGroup>
            </div>
        )
    }
}
