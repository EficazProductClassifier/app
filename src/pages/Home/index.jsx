import React, { Component } from 'react'
import './styles.css';
import Header from "../../components/Header"

export default class Home extends Component {
    render(){
        return (
            <div className="container">    
                <Header />
                <div align="center">
                    <h1 className="mt-2 mb-4">Home Page</h1>
                    <p> A ReactJS application utilizing Bootstrap framework with CRUD implementation for the Eficaz Product Classifier API.  </p>
                </div>

            </div>
        );
    }
}
