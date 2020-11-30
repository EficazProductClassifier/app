import React, { Component } from 'react';
import Header from "../../components/Header";
import CategoriesService from "../../services/categories.js";
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class EditCategory extends Component {
    render(){
        return (
            <Container >
                <Header />
                <Form>
                    <FormGroup>
                        <Label>Nome</Label>
                        <Input type="text" placeholder="Nome da Categoria"></Input>
                        <Label>Descricao</Label>
                        <Input type="text" placeholder="Descricao da Categoria"></Input>
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
