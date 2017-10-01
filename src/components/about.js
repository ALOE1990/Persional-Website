import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <header>.
                    <div className="container" id="maincontent" tabIndex="-1">
                        <h1 className="name">About Me</h1><hr className="star-light" />
                    </div>
                </header>
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 blog-main">
                                <div className="blog-post">
                                    <p>Hi! Welcome to my homepage. My name is Pan Gao. I graduated from the University of Texas at Dallas in May, 2016. After that I became a software engineer at HUAWEI Technologies R&D in Plano, Texas. Now, I am actively looking for new opportunity of software engineer!!! </p>
                                    <h3>Skills: </h3>
                                    <div className="col-md-4">
                                        <p>Programming:</p>
                                    </div>
                                    <div className="col-md-8">
                                        <p>Java</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>Web:</p>
                                    </div>
                                    <div className="col-md-8">
                                        <p>HTML, CSS, JavaSctrip, React, Redux, AngularJS</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>Database:</p>
                                    </div>
                                    <div className="col-md-8">
                                        <p>MySQL, MongoDB</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>Big Data:</p>
                                    </div>
                                    <div className="col-md-8">
                                        <p>Hadoop(MapReduce), Spark</p>
                                    </div>
                                    <hr />
                                    <p>   </p>
                                    <h3>Work Experience</h3>
                                    <p>I joined for Big Data Team at Huawei Technologies R&D in Plano, TX, which is developing a complex graphic data analysis studio and supporting other teams.</p>
                                    <hr />
                                    <h4>Java Development</h4>
                                    <ul>
                                        <li><p>Implemented the function to edit and execute Script languages, including Python, R and Ruby in work flow by Java and SWT.</p></li>
                                        <li><p>Connected with MySQL database. Provided functions of inserting and getting Script code from both local files and database.</p></li>
                                    </ul>
                                    <hr />
                                    <h4>Web Front-End Development</h4>
                                    <ul>
                                        <li><p>Constructed data analysis flow display model for web. Implemented flow display and modification by JavaScript and JointJS.</p></li>
                                        <li><p>Used AngularJS framework. Provided forms for adjusting arguments of data flow. Implemented data passing by JSON.</p></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="success">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="blog-post-title text-center">About This HomePage</h2><hr className="star-light" />
                                <p>I developed this web by React-Redux. Used part css and html from the project from Start Bootstrap. If you are interested about it, you can get the source code by my git. Thanks for your support. Please contact by any method to discuss about React</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}
