import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component{
    render(){
        return(
            <div>

                <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
                    <div className="container">
                        <div className="navbar-header page-scroll">
                            <Link className="navbar-brand" to="/">Pan HomePage</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="page-scroll">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="page-scroll">
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li className="page-scroll">
                                    <a href="mailto:pangaojob@gmail.com/">E-mail</a>
                                </li>
                                <li className="page-scroll">
                                    <a href="https://www.linkedin.com/in/pangaopublic/">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Menu;