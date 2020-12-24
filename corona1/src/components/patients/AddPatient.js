import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPatient } from '../../actions/PatientAction';
class AddPatient extends Component {

    constructor(props){
        super(props);
        this.state={
            patientName:"",
            age:"",
            mobileNumber:"",
            address:"",
            bloodGroup:""
        }
        //this.onChange=this.onChange.bind(this);
    }

    // life cycle hook
   componentWillReceiveProps(nextProps) {
       console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
        }
    }

    onChange=(event)=>{
       this.setState(
           {[event.target.name]:event.target.value}
       );
    }

    onSubmit=(event)=>{
        event.preventDefault();
        if(this.state.patientName==="")
        {
            alert("Patient Name cannot be blank");
        }
        else if(this.state.age==="")
        {
            alert("Patient age cannot be blank");
        }
        else if(this.state.mobileNumber==="")
        {
            alert("Patient mobile number cannot be blank");
        }
        else if(this.state.address==="")
        {
            alert("Patient address cannot be blank");
        }
        else if(this.state.bloodGroup==="")
        {
            alert("Patient blood group cannot be blank");
        }
        else 
        {

        
        const newPatient = {
            patientName:this.state.patientName,
            age:this.state.age,
            mobileNumber:this.state.mobileNumber,
            address:this.state.address,
            bloodGroup:this.state.bloodGroup
        }
    
        this.props.createPatient(newPatient,this.props.history);
        this.setState({patientName:"",age:"",mobileNumber:"",address:"",bloodGroup:""});
    }
    }
    render() {
        return (
            <div className="patient">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create Patient form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Patient Name" 
                                    name="patientName" 
                                    onChange={this.onChange}
                                    value={this.state.patientName}
                                   />
                            </div>
        
                           
                            <div className="form-group">
                                <input 
                                    type="number"
                                    className="form-control form-control-lg" 
                                    placeholder="Patient Age" 
                                    name="age" 
                                    onChange={this.onChange}
                                    value={this.state.age}
                                    min="1"
                                    max="100"
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                   
                                    className="form-control form-control-lg" 
                                    name="mobileNumber" 
                                    placeholder="Mobile Number"
                                    onChange={this.onChange}
                                    value={this.state.mobileNumber}
                                    />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    type="text"
                                    placeholder="Patient Address" 
                                    className="form-control form-control-lg" 
                                    onChange={this.onChange}
                                    name="address" value={this.state.address}
                                    ></textarea>
                            </div>

                            
                            <div className="form-group">
                                <textarea 
                                    type="text"
                                    placeholder="Patient BloodGroup" 
                                    className="form-control form-control-lg" 
                                    onChange={this.onChange}
                                    name="bloodGroup" value={this.state.bloodGroup}
                                    ></textarea>
                            </div>
    
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

AddPatient.propTypes = {
    createPatient:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{createPatient})(AddPatient);