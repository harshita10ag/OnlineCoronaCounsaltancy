import React,{Component} from 'react'
import PrescriptionService from '../Services/PrescriptionService';

class CreatePrescription extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            prescriptionId:'',
            age:'',
            patientName:'',
            bloodGroup:'',
            mobileNumber:'',
            address:'',
            prescriptionDetails:''
        }
        this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
        this.changeBloodGroupHandler = this.changeBloodGroupHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changePrescriptionIdHandler = this.changePrescriptionIdHandler.bind(this);
        this.changePatientNameHandler = this.changePatientNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePrescriptionDetailsHandler = this.changePrescriptionDetailsHandler.bind(this);
    }

    changePrescriptionIdHandler = (event) => {
        this.setState({prescriptionId:event.target.value});
    }

    changeAgeHandler = (event) => {
        this.setState({age:event.target.value});
    }

    changePatientNameHandler = (event) => {
        this.setState({patientName:event.target.value});
    }

    changeBloodGroupHandler = (event) => {
        this.setState({bloodGroup:event.target.value});
    }

    changeMobileNumberHandler = (event) => {
        this.setState({mobileNumber:event.target.value});
    }

    changePrescriptionDetailsHandler = (event) => {
        this.setState({prescriptionDetails:event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address:event.target.value});
    }

    onSaveHandler = (event) => {
        event.preventDefault();
        let prescription = {
            prescriptionId: this.state.prescriptionId,
            patientName:this.state.patientName,
            age : this.state.age,
            bloodGroup: this.state.bloodGroup,
            address : this.state.address,
            mobileNumber : this.state.mobileNumber,
            prescriptionDetails : this.state.prescriptionDetails
        };
        console.log('prescription =>'+JSON.stringify(prescription));
        PrescriptionService.createPrescription(prescription).then(res=>{
            this.props.history.push('/prescriptions');
        });
    }

    render(){
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 ">
                            <h1 className = "text-center">Prescription  Record</h1>
                            
                            <form action="" method="post" onSubmit={this.onSaveHandler}>
                            <div className="card-body">
			                    <div className="form-group">
                                    <label>Prescription Id</label>
                                    <input type="text" name="prescriptionId" id="prescriptionId" required pattern="[0-9]*" inputmode="numeric"
                                    placeholder="prescriptionId" className="form-control" value={this.state.prescriptionId} onChange={this.changePrescriptionIdHandler}></input> 
                                </div>
			
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="text" name="age" id="age" required pattern="[0-9]{2}" inputmode="numeric"
                                    placeholder="Age" className="form-control" value={this.state.age} onChange={this.changeAgeHandler}></input>
                                </div>
			
                                <div className="form-group">
                                    <label>Patient Name</label>
                                    <input type="text" name="patientName" id="patientName" required pattern="[a-zA-Z]*" 
                                    placeholder="Patient Name" className="form-control" value={this.state.patientName} onChange={this.changePatientNameHandler}></input>
                                </div>
                                
                                <div className="form-group">
                                    <label>Blood Group</label>
                                    <input type="text" name="bloodGroup" id="bloodGroup" required pattern="[a-zA-Z]*+-" 
                                    placeholder="Blood group" className="form-control" value={this.state.bloodGroup} onChange={this.changeBloodGroupHandler}></input>
                                </div>
                                
                                <div className="form-group">
                                    <label>MobileNumber</label>
                                    <input type="text" name="mobileNumber" id="mobileNumber" required pattern="[0-9]{10}" 
                                    placeholder="Mobile Number" className="form-control" value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler}></input>
                                </div>
                                
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" name="address" id="address" required pattern="[a-zA-Z]*" 
                                    placeholder="Address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler}></input>
                                </div>
                                
                                <div className="form-group">
                                    <label>Prescription Details</label>
                                    <input type="text" name="prescriptionDetails" id="prescriptionDetails" required pattern="[a-zA-Z]*" 
                                    placeholder="prescription Details" className="form-control" value={this.state.prescriptionDetails} onChange={this.changePrescriptionDetailsHandler}></input>
                                </div>
                                
                                <div className="form-group">
                                    <input type="submit" name="save" id="save" value="Save" className="form-control btn btn-primary"
                                    ></input>
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
        )
    }
}

export default CreatePrescription