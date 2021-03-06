import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
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
            <ListGroupItem key={category.id}>
                <ListGroupItemHeading>{category.nome}</ListGroupItemHeading>
                <ListGroupItemText>{category.descricao}</ListGroupItemText>
                <div className="d-flex">
                    <div className="ml-auto">
                        <Link className="btn btn-warning mr-1" to={`category/edit/${category.id}`}>Edit</Link>
                        <Button color="danger" onClick={e => this.props.onDelete(category.id)}>Delete</Button>
                    </div>
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
                        <div align="center">
                            <h2 className="mt-2 mb-4">No Categories to show you :(</h2>
                            <h2 className="mt-2 mb-4">Try creating one.</h2>
                        </div>
                    ) : renderCategoryList}
                </ListGroup>
            </div>
        )
    }
}
