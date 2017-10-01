import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectProject } from '../actions/index'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class Projects extends Component{
    renderLinkButton(link){
        if(link){
            return <a className="btn btn-success" href={link} >Link</a>
        }

    }
    renderCodeButton(link){
        if(link){
            return <a className="btn btn-info" href={link} >Code</a>
        }

    }
    renderList(){
        return _.map(this.props.projects, project => {
            return(
                <div className="col-sm-4 portfolio-item" key={project.id}>

                    <div className="thumbnail">
                        <img src={project.image} alt="..."  className="img-centered" height="192px"/>
                        <div className="caption">

                            <h3>{project.title}</h3>
                            <p>{project.introduction}</p>
                            <div className="btn-group" role="group" >
                                <Link className="btn btn-primary" to={`/projects/${project.id}`}>More</Link>
                                {this.renderLinkButton(project.link)}
                                {this.renderCodeButton(project.codelink)}
                            </div>
                        </div>
                    </div>
                </div>
            )

        })
    }
    render(){
        return(
        <section id="portfolio" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Projects</h2>
                        <hr className="star-primary" />
                    </div>
                    <div className="row">
                        {this.renderList()}
                    </div>
                </div>
            </div>
        </section>
        )
        }

}

function mapStateToProps(state) {
    // Whatever is required will show up as props
    // inside of BookList
    return {
        projects: state.projects
    }
}


function mapDispatchtoProps(dispatch){
    //Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectProject: selectProject }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(Projects);