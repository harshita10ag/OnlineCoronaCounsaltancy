import React, { Component } from 'react'
import {getService,createPatient} from '../actions/ServiceAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
 class UpdateLabService extends Component {
    constructor(props){
        super(props);
        this.state={
            "serviceId":"",
            "testName":"",
            "testPrice":"",
            "testDescription":""
            
        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        if(this.state.testName=="" &&  this.state.testPrice=="" && this.state.testDescription==""){
            alert("Please Fill all these fields");
        }else if(this.state.testName==""){
            
            alert("Please Enter Valid Test Name");
        }else if(!(this.state.testName).match(/^[a-zA-Z0-9 ]*$/)){
            alert("Please Enter alphanumeric character only");
        }
        else if(this.state.testPrice==""){
            alert("Please Enter Valid Test Price");
        }
        else if(!(this.state.testPrice).match(/^[0-9]*$/)){
            alert("Please Enter Valid Test Price");
        }else if(this.state.testDescription==""){
            alert("Please Enter Valid Test Description");
        }
        else{
        const newProject = {
            serviceId:this.state.serviceId,
            testName:this.state.testName,
            testPrice:this.state.testPrice,
            testDescription:this.state.testDescription,
           
        }
        this.props.createPatient(newProject,this.props.history);
    }
    }
    componentDidMount(){
        const {serviceId} = this.props.match.params;
        this.props.getService(serviceId,this.props.history);
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
            serviceId,
            testName,
            testPrice,
            testDescription
        }=nextProps.project;
        this.setState({
            serviceId,
            testName,
            testPrice,
            testDescription
        });
    }
    render() {

        return (
            <div className="project" id="editLab"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Edit Laboratory Form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                               
                            <div className="form-group">
                               
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Test Name" 
                                    name="testName" 
                                    onChange={this.onChange}
                                    value={this.state.testName}/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Test Price" 
                                    name="testPrice" 
                                    onChange={this.onChange}
                                    value={this.state.testPrice}
                                    />
                            </div>
                        
                            <div className="form-group">
                                <textarea rows="8"
                                    className="form-control form-control-lg" 
                                    placeholder="Test Description" 
                                    name="testDescription" 
                                    onChange={this.onChange}
                                    value={this.state.testDescription}></textarea>
                            </div>
                            

                            <input type="submit" className="btn btn-primary btn-block mt-4" value="Edit Service" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
UpdateLabService.propTypes = {
    getService:PropTypes.func.isRequired,
    createPatient:PropTypes.func.isRequired,
    project:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project: state.projects.project
  });

export default connect(mapStateToProps,{getService,createPatient})(UpdateLabService); 
            
 