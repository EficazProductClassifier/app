import React, { Component } from 'react';
import Header from "../../components/Header";
import CategoriesService from "../../services/categories.js";
import ProductsService from "../../services/products.js";
import { Container, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class CreateProduct extends Component {
    constructor(props){
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeStock = this.handleChangeStock.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.render = this.render.bind(this);
        this.state = {
            name: '',
            desc: '',
            value: '',
            stock: '',
            category_id: '',
            categoryList: [],
            fetchingData: true,
        };
    }

    handleChangeName(event){ this.setState({name: event.target.value}); }
    handleChangeDesc(event){ this.setState({desc: event.target.value}); }
    handleChangePrice(event){ this.setState({value : event.target.value}); }
    handleChangeStock(event){ this.setState({stock: event.target.value}); }
    handleChangeCategory(event){ this.setState({category_id: event.target.value}); }
    handleSubmit(){
        let payload = {
            'nome': this.state.name,
            'descricao': this.state.desc,
            'valor': this.state.value,
            'estoque': this.state.stock,
            'category_id': this.state.category_id
        };
        ProductsService.create(payload)
            .then(console.log('created'))
    }

    componentDidMount(){
        CategoriesService.all()
            .then(payload => this.setState({categoryList: payload.data}))
    }

    generateCategoryOption(category){
        return (
            <option key={category.id} value={category.id}>{category.nome}</option>
        )
    }


    render(){
        let renderCategoryOptions = [];
        for(let i = 0; i < this.state.categoryList.length; i++){
            renderCategoryOptions.push(this.generateCategoryOption(this.state.categoryList[i]))
        }


        return (
            <Container >
                <Header />
                <Form>
                    <FormGroup>
                        <Label>Nome</Label>
                        <Input type="text" placeholder="Nome do Produto" onChange={(e) => this.handleChangeName(e)}></Input>
                        <Label>Descricao</Label>
                        <Input type="text" placeholder="Descricao do Produto" onChange={(e) => this.handleChangeDesc(e)}></Input>
                        <Row>
                            <Col md={3}>
                                <FormGroup>
                                    <Label>Valor</Label>
                                    <Input type="value" placeholder="Valor do Produto" onChange={e => this.handleChangePrice(e)}></Input>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label>Estoque</Label>
                                    <Input type="text" placeholder="Quantidade em Estoque" onChange={e => this.handleChangeStock(e)}></Input>
                                </FormGroup>
                            </Col>

                            <Col md={6}>
                                <FormGroup>
                                    <Label>Categoria</Label>
                                    <Input type="select" onChange={e => this.handleChangeCategory(e)}>
                                        {renderCategoryOptions}
                                    </Input>
                                </FormGroup>
                            </Col>



                        </Row>
                        {/* TODO: category_id dropdown */}
                    </FormGroup>



                    <div className="d-flex">
                        <div className="ml-auto">
                            <Button onClick={() => this.handleSubmit()} className="btn btn-success mr-1">Enviar</Button>
                            <Link to="/" className="btn btn-danger mr-1">Cancelar</Link>
                        </div>

                    </div>
                </Form>
            </Container>
        );
    }
}

