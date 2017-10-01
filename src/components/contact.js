import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container" id="maincontent" tabIndex="-1">
                        <h1>Contact</h1>
                        <hr className="star-light" />
                    </div>

                </header>
                <section id="portfolio" className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>E-mail:</h4>
                            </div>
                            <div className="col-md-6">
                                <p><a href="mailto:pangaojob@gmail.com/">pangaojob@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>LinkedIn:</h4>
                            </div>
                            <div className="col-md-6">
                                <p><a href="https://www.linkedin.com/in/pangaopublic/">www.linkedin.com/in/pangaopublic/</a></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Facebook:</h4>
                            </div>
                            <div className="col-md-6">
                                <p><a href="https://www.facebook.com/pan.aloe.3">www.facebook.com/pan.aloe.3</a></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Git:</h4>
                            </div>
                            <div className="col-md-6">
                                <p><a href="https://github.com/ALOE1990">github.com/ALOE1990</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}
