import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from '../actions/ServiceAction';
class ServiceItemComponent extends React.Component {
    onDeleteClick=(serviceId)=>{
        console.log('--------ProjectItemComponent:onDeleteClick Called--------')
        this.props.deleteProject(serviceId);
        //console.log(id);
       }
    render() {
        const {project} = this.props;
       
        return (
            
             <div className="container">
             <div className="card card-body bg-light mb-3" id="viewLablist">
                 <div className="row">
                     <div className="col-2">
                         <span className="mx-auto"></span>
                     </div>
                     <div className="col-lg-3 col-md-4 col-8">
                         <h3>{project.testName}</h3>
                         <p>{project.testDescription}</p>
                     </div>
                     <div className="col-lg-3 col-md-4 col-8">
                         <h3>INR {project.testPrice}</h3>
                         
                     </div>
                     <div className="col-md-4 d-none d-lg-block">
                         <ul className="list-group">
                            
                             <Link to={`/updateLabService/${project.serviceId}`}>
                                 <li className="list-group-item update">
                                     <i className="fa fa-edit pr-1">Update Project Info</i>
                                 </li>
                                 </Link>
                                 
                            
                                 <li className="list-group-item delete"
                                  onClick={this.onDeleteClick.bind(this,project.serviceId)}>
                                     <i className="fa fa-minus-circle pr-1">Delete Project</i>
                                 </li>
                                 
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
        
        )
    }
}
ServiceItemComponent.propTypes = {
    deleteProject:PropTypes.func.isRequired  
}

export default connect(null,{deleteProject})(ServiceItemComponent);