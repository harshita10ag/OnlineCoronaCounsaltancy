import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getPatients} from '../../actions/PatientAction'

class GetPatientComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            patients:[]
        }
    }

    componentDidMount(){
        this.props.getPatients();
    }

    render() {
        const {patients} =  this.props.patients;
        return (
            <div class="container">
                <br/>
                <table class="table table-bordered table-striped table-hover table-lg">
                    <tr>
                       
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Blood Group</th>
                    </tr>

                    <tbody>
                        {
                            patients.map((patient) => {
                                const { patientName, age, mobileNumber, address,bloodGroup } = patient;
                                return (
                                    <tr>
                                        
                                        <td>{patientName}</td>
                                        <td>{age}</td>
                                        <td>{mobileNumber}</td>
                                        <td>{address}</td>
                                        <td>{bloodGroup}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

GetPatientComponent.propTypes={
    getPatients:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({
    patients:state.patients
});

export default connect(mapStateToProps,{getPatients})(GetPatientComponent);