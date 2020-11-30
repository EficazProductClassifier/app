import React, { Component } from 'react';
import Header from "../../components/Header";
import CategoriesService from "../../services/categories.js";
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class EditCategory extends Component {
    constructor(props){
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.render = this.render.bind(this);
        this.state = {
            name: '',
            desc: ''
        };
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeDesc(event){
        this.setState({desc: event.target.value});
    }

    handleSubmit(){
        let uuid = this.props.match.params.uuid;
        let payload = {
            'nome': this.state.name,
            'descricao': this.state.desc
        };
        CategoriesService.update(uuid, payload)
            .then(console.log('updated'))
    }


    render(){
        return (
            <Container >
                <Header />
                <Form>
                    <FormGroup>
                        <Label>Nome</Label>
                        <Input type="text" placeholder="Nome da Categoria" onChange={e => this.handleChangeName(e)}></Input>
                        <Label>Descricao</Label>
                        <Input type="text" placeholder="Descricao da Categoria" onChange={e => this.handleChangeDesc(e)}></Input>
                    </FormGroup>

                    <div className="d-flex">
                        <div className="ml-auto">
                            <Button className="btn btn-success mr-1" onClick={() => this.handleSubmit()}>Enviar</Button>
                            <Link to="/" className="btn btn-danger mr-1">Cancelar</Link>
                        </div>
                    </div>
                </Form>
            </Container>
        );
    }
}
