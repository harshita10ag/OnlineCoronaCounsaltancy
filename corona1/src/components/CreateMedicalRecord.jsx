import React,{Component} from 'react'
import MedicalRecordService from '../Services/MedicalRecordService';

class CreateMedicalRecord extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            medicalRecordId:'',
            patientId:'',
            patientName:'',
            doctorName:'',
            diagnosis:'',
            treatment:''
        }
        this.changeDiagnosisHandler = this.changeDiagnosisHandler.bind(this);
        this.changeDoctorNameHandler = this.changeDoctorNameHandler.bind(this);
        this.changePatientIdHandler = this.changePatientIdHandler.bind(this);
        this.changeMedicalRecordIdHandler = this.changeMedicalRecordIdHandler.bind(this);
        this.changePatientNameHandler = this.changePatientNameHandler.bind(this);
        this.changeTreatmentHandler = this.changeTreatmentHandler.bind(this);
        
    }

    changeMedicalRecordIdHandler = (event) => {
        this.setState({medicalRecordId:event.target.value});
    }

    changePatientIdHandler = (event) => {
        this.setState({patientId:event.target.value});
    }

    changePatientNameHandler = (event) => {
        this.setState({patientName:event.target.value});
    }

    changeDoctorNameHandler = (event) => {
        this.setState({doctorName:event.target.value});
    }

    changeDiagnosisHandler = (event) => {
        this.setState({diagnosis:event.target.value});
    }

    changeTreatmentHandler = (event) => {
        this.setState({treatment:event.target.value});
    }

    onSaveHandler = (event) => {
        event.preventDefault();
        let medicalRecord = {
            medicalRecordId: this.state.medicalRecordId,
            patientName:this.state.patientName,
            patientId : this.state.patientId,
            doctorName: this.state.doctorName,
            treatment : this.state.treatment,
            diagnosis : this.state.diagnosis
        };
        console.log('medicalRecord =>'+JSON.stringify(medicalRecord));
        MedicalRecordService.createMedicalRecord(medicalRecord).then(res=>{
            this.props.history.push('/medicalrecords');
        });
    }

    render(){
        return (
            <div  id="fp1">
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 ">
                            <h1 className = "text-center">Add Medical Record</h1>
                        
                            <form action="" method="post" onSubmit={this.onSaveHandler}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>Medical Record Id</label>
                                        <input type="text" name="medicalRecordId" id="medicalRecordId" required pattern="[0-9]*" inputmode="numeric"
                                        placeholder="Medical Record Id" className="form-control" value={this.state.medicalRecordId} onChange={this.changeMedicalRecordIdHandler}></input> 
                                    </div>
                                    <div className="form-group">
                                        <label>Patient Id</label>
                                        <input type="text" name="patientId" id="patientId" required pattern="[0-9]*" inputmode="numeric"
                                        placeholder="Patient Id" className="form-control" value={this.state.patientId} onChange={this.changePatientIdHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Patient Name</label>
                                        <input type="text" name="patientName" id="patientName" required pattern="[a-zA-Z]*" 
                                        placeholder="Patient Name" className="form-control" value={this.state.patientName} onChange={this.changePatientNameHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Doctor Name</label>
                                        <input type="text" name="doctorName" id="doctorName" required 
                                        placeholder="Doctor Name" className="form-control" value={this.state.doctorName} onChange={this.changeDoctorNameHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Diagnosis Status</label>
                                        <input type="text" name="diagnosisStatus" id="diagnosisStatus" required 
                                        placeholder="Diagnosis Status" className="form-control" value={this.state.diagnosis} onChange={this.changeDiagnosisHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Treatment Status</label>
                                        <input type="text" name="treatmentStatus" id="treatmentStatus" required
                                        placeholder="Treatment Status" className="form-control" value={this.state.treatment} onChange={this.changeTreatmentHandler}></input>
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

export default CreateMedicalRecord