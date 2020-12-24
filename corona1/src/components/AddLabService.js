import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPatient } from '../actions/ServiceAction';
import classnames from "classnames";
class AddLabService extends Component{
    constructor(props){
        super(props);
        this.state={
            fields: {},
            errors: {}
           
        }
    }
   
    onChange=(event)=>{
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
          [event.target.name]:event.target.value
        });

    }
    onSubmit=(event)=>{
        console.log(this.validateForm());
        
        event.preventDefault();
        
        const newService = {
          
            testName:this.state.testName,
            testPrice:this.state.testPrice,
            testDescription:this.state.testDescription,
            
        }
       
        // this.props.createPatient(newService,this.props.history);
        if (this.validateForm()) {
            this.props.createPatient(newService,this.props.history);
            console.log(this.state);
            let fields = {};
            fields["testName"] = "";
            fields["testPrice"] = "";
            fields[" testDescription"] = "";
            this.setState({fields:fields});
            console.log(this.state);
            
            alert("Laboratory Service Added successfully");
        }
    
    }
    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["testName"]) {
          formIsValid = false;
          errors["testName"] = "*Enter valid test name.";
        }
  
        if (typeof fields["testName"] !== "undefined") {
          if (!fields["testName"].match(/^[a-zA-Z0-9 ]*$/)) {
            formIsValid = false;
            errors["testName"] = "*Please enter alphanumeric characters only.";
          }
        }
        if (!fields["testPrice"]) {
          formIsValid = false;
          errors["testPrice"] = "*Enter the test price";
        }
  
        if (typeof fields["testPrice"] !== "undefined") {
            if ((fields["testPrice"]<=0 || fields["testPrice"]>10000) || (!(fields["testPrice"].match(/^[0-9]*$/)) )) {
            formIsValid = false;
            errors["testPrice"] = "*Please enter valid test price";
          }
        }
        if (!fields["testDescription"]) {
            formIsValid = false;
            errors["testDescription"] = "*Enter the Test Description";
          }
    
        this.setState({
          errors: errors
        });
        return formIsValid;
      }

       
    render() {
        // const {errors}=this.state;
        return (
            
            <div className="project" id="addLab">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create Laboratory Service</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
            
                            <div className="form-group">
                               
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg")} 
                                    placeholder="Test Name" 
                                    name="testName" 
                                    onChange={this.onChange}
                                    value={this.state.testName} />
                                    
                            </div>
                            <div className="errorMsg">{this.state.errors.testName}</div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg")} 
                                    placeholder="Test Price" 
                                    name="testPrice" 
                                    onChange={this.onChange}
                                    value={this.state.testPrice}
                                    
                                    />
                                    
                            </div>
                            <div className="errorMsg">{this.state.errors.testPrice}</div>
                            <div className="form-group">
                                <textarea 
                                    className={classnames("form-control form-control-lg")}
                                    placeholder="Test Description" 
                                    name="testDescription" 
                                    onChange={this.onChange}
                                    value={this.state.testDescription}></textarea>
                                    
                            </div>
                            <div className="errorMsg">{this.state.errors.testDescription}</div>

                            <input type="submit" className="btn btn-primary btn-block mt-4" value="Add Service" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
AddLabService.propTypes = {
    createPatient:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps,{createPatient})(AddLabService);