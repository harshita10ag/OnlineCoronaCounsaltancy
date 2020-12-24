import React from 'react';
import PrescriptionService from '../Services/PrescriptionService';

class PrescriptionComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            prescriptions : []
        }
    }

    componentDidMount(){
        PrescriptionService.getPrescriptions().then((response) => {
            this.setState({prescriptions: response.data})
        });
    }

    render(){
        return (
            <div>
                <h1 className = "text-center">Prescription List</h1>
                <div className="row">
                    <a className = "btn btn-primary" href="add-prescription">Add Prescription</a>
                </div>
                <div className="row">
                <table className = "table table-striped table-bordered">
                    <thead>
			<tr>
				<th>Prescription Id</th>
                <th>Patient Name</th>
				<th>Age</th>
				<th>Blood Group</th>
				<th>Mobile Number</th>
				<th>Address</th>
				<th>Prescription Details</th>
			</tr>
            </thead>
			<tbody>
                {
                    this.state.prescriptions.map(
                        prescription => 
                        <tr key={prescription.prescriptionId}>
				<td>{prescription.prescriptionId}</td>
				<td>{prescription.patientName}</td>
				<td>{prescription.age}</td>
				<td>{prescription.bloodGroup}</td>
				<td>{prescription.mobileNumber}</td>
				<td>{prescription.address}</td>
                <td>{prescription.prescriptionDetails}</td>
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

export default PrescriptionComponent