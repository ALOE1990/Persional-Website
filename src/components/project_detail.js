import React, {Component} from 'react'
import { connect } from 'react-redux'


class ProjectDetail extends Component {

    render() {
        const{project} = this.props;
        if(!project){
            return <div>loading... </div>
        }
        return (
            <div>
                <header>.
                    <div className="container" id="maincontent" tabIndex="-1">
                        <h1 className="name">{project.title}</h1><hr className="star-light" />
                    </div>
                </header>
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 blog-main">

                                <div className="blog-post">
                                    <p>{project.introduction}</p>
                                    <hr />
                                        <h3>{project.subtitle}</h3>
                                        <p>{project.detail}</p>
                                    <hr />
                                        <h3>{project.subtitle1}</h3>
                                        <p>{project.subdetail1}</p>
                                        <p>{project.subdetail2}</p>
                                        <h3>{project.subtile2}</h3>
                                        <p>{project.subdetail3}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }
}

function mapStateToProps({projects}, ownProps) {
   return {
       project: projects[ownProps.match.params.id]
   }
}

export default connect(mapStateToProps)(ProjectDetail)
