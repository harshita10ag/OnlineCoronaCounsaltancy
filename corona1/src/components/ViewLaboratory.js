import React from 'react'
import AddPatientServiceDetail from './AddPatientServiceDetail';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getProjects} from '../actions/ServiceAction';
import ServiceItemComponent from './ServiceItemComponent';
import { Link } from 'react-router-dom';

class ViewLaboratory extends React.Component {
    constructor(props){
        super(props);
        this.state={
            projects:[]
        }
    }

    componentDidMount(){
        this.props.getProjects();
    }
    render() {
        const {projects} =  this.props.projects;

        return (
            <div className="projects" id="viewLab">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">All Laboratory Service</h1>
                        
                        <br />
                        <hr />
                        {
                                projects.map((project)=>{
                                    return  <ServiceItemComponent key={project.serviceId} project={project}/>
                                })
                            }
                        
    
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
ViewLaboratory.propTypes={
    getProjects:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({
    projects:state.projects
});
export default connect(mapStateToProps,{getProjects})(ViewLaboratory);