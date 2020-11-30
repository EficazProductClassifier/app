import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render(){
        return(
            <div className="container">
                <nav>
                    <ul>
                        <li> <a href="/" >Home</a> </li>
                        <li> <a href="/products" >Products</a> </li>
                        <li> <a href="/categories" >Categories</a> </li>
                    </ul>
                </nav>

            </div>
        );
    }
} 
