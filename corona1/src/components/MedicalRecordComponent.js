import React from 'react';
import MedicalRecordService from '../Services/MedicalRecordService';

class MedicalRecordComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            medicalRecords : []
        }
    }

    componentDidMount(){
        MedicalRecordService.getMedicalRecords().then((response) => {
            this.setState({medicalRecords: response.data})
        });
    }

    render(){
        return (
            <div>
                <h1 className = "text-center">Medical Record List</h1>
                <div className="row">
                    <a className = "btn btn-primary" href="add-medical-record">Add Medical Record</a>
                </div>
                <div className = "row"> 
                <table className = "table table-striped table-bordered">
                    <thead>
			<tr>
				<th>Medical Record Id</th>
				<th>Patient Id</th>
				<th>Patient Name</th>
				<th>Doctor Name</th>
				<th>Diagnosis Status</th>
				<th>Treatment Status</th>
			</tr>
            </thead>
			<tbody>
                {
                    this.state.medicalRecords.map(
                        medicalRecord => 
                        <tr key={medicalRecord.medicalRecordId}>
				<td>{medicalRecord.medicalRecordId}</td>
				<td>{medicalRecord.patientId}</td>
				<td>{medicalRecord.patientName}</td>
				<td>{medicalRecord.doctorName}</td>
				<td>{medicalRecord.diagnosis}</td>
				<td>{medicalRecord.treatment}</td>
			</tr>
                    )
                }
            </tbody>
		</table>
        </div>
            </div>
        )
    }
}

export default MedicalRecordComponent