import React, { Component } from 'react';
import Header from "../../components/Header";
import CategoriesService from "../../services/categories.js";
import ProductsService from "../../services/products.js";
import { Container, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class CreateProduct extends Component {
    render(){
        return (
            <Container >
                <Header />
                <Form>
                    <FormGroup>
                        <Label>Nome</Label>
                        <Input type="text" placeholder="Nome do Produto"></Input>
                        <Label>Descricao</Label>
                        <Input type="text" placeholder="Descricao do Produto"></Input>
                        <Row>
                            <Col md={3}>
                                <FormGroup>
                                    <Label>Valor</Label>
                                    <Input type="value" placeholder="Valor do Produto"></Input>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label>Estoque</Label>
                                    <Input type="text" placeholder="Quantidade em Estoque"></Input>
                                </FormGroup>
                            </Col>

                            <Col md={6}>
                                <FormGroup>
                                    <Label>Categoria</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Col>



                        </Row>
                        {/* TODO: category_id dropdown */}
                    </FormGroup>



                    <div className="d-flex">
                        <div className="ml-auto">
                            <Button type="submit" className="btn btn-success mr-1">Enviar</Button>
                            <Link to="/" className="btn btn-danger mr-1">Cancelar</Link>
                        </div>

                    </div>
                </Form>
            </Container>
        );
    }
}

