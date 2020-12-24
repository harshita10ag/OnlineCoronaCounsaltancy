import React from 'react';
import { Link } from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';


class HeaderComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
        <Link to={`/mainDashboard`}>
                               
                        <a className="navbar-brand">
                Online Cororna Counsaltancy
            </a>             
                                    </Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    
                    <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                        Patient
                        </a>
                           
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/room">
                        Room
                        </a>
                        </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/ward">
                    Ward
                        </a>
                           
                    </li>
                   
                   
                    <div clasName="dropdown">

      <Dropdown>
          <Dropdown.Toggle >
              Laboratory Services
          </Dropdown.Toggle>
          <Dropdown.Menu>
              <Dropdown.Item  href="/addLabService">Add Laboratory Services</Dropdown.Item>
              <Dropdown.Item  href="/addPatientServiceDetail">Add Patient Laboratory Services</Dropdown.Item>
              <Dropdown.Item href="/viewLaboratory">View Laboratory Services</Dropdown.Item>
              <Dropdown.Item href="/viewPatient">View Patient Services Detail</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
      </div>
     
                     <li>
                    <a className="nav-link" href="/prescriptions">
                    Prescriptions
                        </a>
                     </li>
                     <li>
                    <a className="nav-link" href="/medicalrecords" id="mnav">
                   Medical Records
                        </a>
                     </li>
                     <li className="nav-item">
                    <a className="nav-link" href="/AddMedicine">
                    Add Medicines
                        </a>
                           
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/SearchMedicine">
                    Order Medicines
                        </a>
                           
                    </li>
                
                </ul>

            </div>
        </div>
    </nav>
        )
    }
}
export default HeaderComponent;