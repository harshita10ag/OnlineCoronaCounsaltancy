import React from 'react'
import AddPatientServiceDetail from './AddPatientServiceDetail';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getProjects} from '../actions/PatientServiceAction';
import PatientServiceItemComponent from './PatientServiceItemComponent';
import { Link } from 'react-router-dom';

class ViewPatient extends React.Component {
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
            <div className="projects" id="viewPatientlist">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">All Patient Service Detail</h1>
                        
                        <br />
                        <hr />
                        {
                                projects.map((project)=>{
                                    return  <PatientServiceItemComponent key={project.id} project={project}/>
                                })
                            }
                        
    
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
ViewPatient.propTypes={
    getProjects:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({
    projects:state.projects
});
export default connect(mapStateToProps,{getProjects})(ViewPatient);