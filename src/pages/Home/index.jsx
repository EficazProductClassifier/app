import React, { Component } from 'react'
import './styles.css';
import Header from "../../components/Header"

export default class Home extends Component {
    render(){
        return (
            <div className="container">    
                <Header />
                <p>Home Page</p>
            </div>
        );
    }
}
