import Axios from 'axios';
import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPatientServiceDetail } from '../actions/PatientServiceAction';
import classnames from "classnames";
class AddPatientServiceDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            fields: {},
            errors: {},
            price:0,
            data: [],
           
        }
    }
    
    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
      onChange=(event)=>{
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
          [event.target.name]:event.target.value
        });
        if(event.target.name==='testName'){
                    this.state.data.map(n=>{
        
                        if(n.testName===event.target.value){
                            this.setState({price:n.testPrice});
                        }
                    })
               }

    }

    onSubmit=(event)=>{
        console.log(this.validateForm());
        
        event.preventDefault();
        let fields = {};
        const newService = {
          
            patientId:this.state.patientId,
            testName:this.state.testName,
            totalBill:this.state.price,
            
        }
       
        if (this.validateForm()) {
            this.props.createPatientServiceDetail(newService,this.props.history);
            console.log(this.state);
            let fields = {};
            fields["patientId"] = "";
            fields["testName"] = "";
            fields[" testPrice"] = "";
            this.setState({fields:fields});
            console.log(this.state);
            
            alert('Your Bill - Patient ID - '+this.state.patientId+' Test Name - '+this.state.testName+' Total Bill - '+this.state.price);
            
        }
    
    }
    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["patientId"]) {
          formIsValid = false;
          errors["patientId"] = "*Enter valid patient id";
        }
  
        if (typeof fields["patientId"] !== "undefined") {
          if (!fields["patientId"].match(/^[a-zA-Z0-9 ]*$/)) {
            formIsValid = false;
            errors["patientId"] = "*Please enter alphanumeric characters only.";
          }
        }
        if (!fields["testName"]) {
            formIsValid = false;
            errors["testName"] = "*Choose valid test name.";
          }
        
  
        this.setState({
          errors: errors
        });
        return formIsValid;
      }
    componentDidMount() {
 
        Axios.get('/api/v1/laboratory/all').then(j => j.data).then(p => this.setState({ data: p }));
    }

       
    render() {
        const {errors,data}=this.state;
       
        return (
            
            <div className="project" id="createpatient">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="col-md-8  m-auto">
                        <h5 className="display-4 text-center">Create Patient Service</h5>
                        <hr />
                       
                        <form onSubmit={this.onSubmit}> 
                        <div className="form-group">
                               
                                <input 
                                   type="text" 
                                   className={classnames("form-control form-control-lg",{"is-invalid":errors.patientId})}
                                   placeholder="Patient Id" 
                                   name="patientId" 
                                   onChange={this.onChange}
                                   value={this.state.patientId}/>
                                   
                           </div>
                           <div className="errorMsg1">{this.state.errors.patientId}</div>
                            <div className="form-group">
                            <select className="form-control form-control-lg" name="testName" onChange={this.onChange} value={this.state.testName} >
                            <option value="none" selected disabled hidden>Choose test</option>
                            { 
                                data.map(data1 => <option value={data1.testName}>{data1.testName}</option>)
                            }
                            </select>
                               
                            </div>
                            <div className="errorMsg1">{this.state.errors.testName}</div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.testPrice})} 
                                    placeholder="Test Price" 
                                    name="testPrice" 
                                    onChange={this.onChange}
                                    disabled
                                    value={this.state.price}

                                    />
                                   
                            </div>
                            <div className="errorMsg1">{this.state.errors.testPrice}</div>
                        
                            

                            <input type="submit" className="btn btn-primary btn-block mt-4" value="Generate Bill" />
                        </form>
                    </div><br />
                    <div className="col-md-6  m-auto" id="description">
                    <br/>
                    <h4 className="display-4 text-center">Test Description</h4>
                    <div className="form-group1"  >
                    <p>
                { 
                    data.map(data1 => <ul><li><b><u>{data1.testName}</u><br />{data1.testDescription}<br/></b></li></ul>)
                }
                </p>
                </div>
                </div></div>
                </div>
               <br />
                
            </div>
        </div>
        )
    }
}
AddPatientServiceDetail.propTypes = {
    createPatientServiceDetail:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps,{createPatientServiceDetail})(AddPatientServiceDetail);