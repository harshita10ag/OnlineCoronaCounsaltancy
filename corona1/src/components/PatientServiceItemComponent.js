import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from '../actions/PatientServiceAction';
class PatientServiceItemComponent extends React.Component {
    onDeleteClick=(id)=>{
        console.log('--------ProjectItemComponent:onDeleteClick Called--------')
        this.props.deleteProject(id);
       
        // console.log(id);
       }
    render() {
        const {project} = this.props;
       
        return (
            
             <div className="container">
             <div className="card card-body bg-light mb-3" id="viewLablist">
                 <div className="row">
                     <div className="col-4">
                         <span className="mx-auto">{project.patientId}</span>
                     </div>
                     <div className="col-lg-4 col-md-4 col-8">
                         <h3>{project.testName}</h3>
                         
                     </div>
                     <div className="col-lg-4 col-md-4 col-8">
                         <h3>{project.totalBill}</h3>
                         
                     </div>
                     {/* <div className="col-md-4 d-none d-lg-block">
                         <ul className="list-group">
                            
                             
                                 <li className="list-group-item delete"
                                  onClick={this.onDeleteClick.bind(this,project.id)}>
                                     <i className="fa fa-minus-circle pr-1">Delete Project</i>
                                 </li>
                                 
                         </ul>
                     </div> */}
                 </div>
             </div>
         </div>
        
        )
    }
}
PatientServiceItemComponent.propTypes = {
    deleteProject:PropTypes.func.isRequired  
}

export default connect(null,{deleteProject})(PatientServiceItemComponent);