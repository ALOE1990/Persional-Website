import React, { Component } from 'react';

class Introduction extends Component{
    render(){
        return(

            <header>
                <div className="container" id="maincontent" tabIndex="-1">
                    <div className="row" marginHeight="40px">
                        <div className="col-lg-12">
                            <img className="img-responsive" src="../../images/pic.png" />
                            <div className="intro-text">
                                <h1 className="name">Pan Gao HomePage</h1>
                                <hr className="star-light" />
                                    <span className="skills">Software Engineer - Web Developer - Cat Lover</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            )

    }
}

export default Introduction;
