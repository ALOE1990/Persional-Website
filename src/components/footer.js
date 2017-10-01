import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component{
    render(){
        return(
            <div>
                <footer className="text-center">
                    <div className="footer-above">
                        <div className="container">
                            <div className="row">
                                <div className="footer-col col-md-6">
                                    <h3>Address</h3>
                                    <p>3048 Baylis St.
                                        Fremont, CA 94538</p>
                                </div>
                                <div className="footer-col col-md-6">
                                    <h3>Contact</h3>
                                    <ul className="list-inline">
                                        <li>
                                            <a href="https://www.facebook.com/pan.aloe.3" className="btn-social btn-outline"><span className="sr-only">Facebook</span><i className="fa fa-fw fa-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/pangaopublic/" className="btn-social btn-outline"><span className="sr-only">Linked In</span><i className="fa fa-fw fa-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/ALOE1990" className="btn-social btn-outline"><span className="sr-only">git</span><i className="fa fa-fw fa-git" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-below">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    Copyright &copy; Your Website 2016
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
