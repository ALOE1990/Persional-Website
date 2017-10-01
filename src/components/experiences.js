import React, { Component } from 'react';

export default class Experiences extends Component {
    render() {
        return (
            <div>
                <section id="about" className="success">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>About Me</h2>
                                <hr className="star-light" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-lg-offset-2">
                                <p>Welcome! My name is Pan. I graduated from the University of Texas at Dallas in May, 2016. After that I became a Software Engineer job at HUAWEI Technologies R&D in Plano, TX. Now I am actively looking for a new job opportunity. I am familiar with Java programming language and MySQL database. I am really interested about cutting edge technologies. Thus, I did several big data projects by Hadoop and Spark and Web development by React-Redux during my master degree. If you want to learn me more, please download my resume or just click the "learn more" button below.</p>
                            </div>
                            <div className="col-lg-4">
                                <p>I develop this website by React-Redux. I really appreciate that Start Bootstrap provide a very clean and pretty CSS template. If you are interested about React and like this style, you can get the source code in my <a href="https://github.com/ALOE1990">git</a>. Please contact me, if you have any question about this web application. Welcome again! Please learn more about me by the projects above. Visit my linkedIn, git and Facebook! Email me whenever you like. </p>
                            </div>
                            <div className="col-lg-8 col-lg-offset-2 text-center">
                                <a href="https://drive.google.com/file/d/0B78bWiD6qfx7a2MxNzYtN1lfSkU/view?usp=sharing" className="btn btn-lg btn-outline">
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
