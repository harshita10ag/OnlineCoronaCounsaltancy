import React from 'react'
import AddPatientServiceDetail from './AddPatientServiceDetail';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getProjects} from '../actions/PatientAction';
import PatientServiceItemComponent from './PatientServiceItemComponent';
import { Link } from 'react-router-dom';

class GenerateBill extends React.Component {
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
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Laboratory Service</h1>
                        <br />
                        <div className="col-md-4">
                            <Link to={`/addLabService`}>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create Laboratory Service" />
                                    
                                    </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/addPatientServiceDetail`}>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create Patient Service Detail" />
                                    
                                    </Link>
                        </div>
                        
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
GenerateBill.propTypes={
    getProjects:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({
    projects:state.projects
});
export default connect(mapStateToProps,{getProjects})(GenerateBill);