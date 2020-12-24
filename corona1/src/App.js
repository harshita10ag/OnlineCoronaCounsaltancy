
import './App.css';
import AddLabService from './components/AddLabService';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import UpdateLabService from './components/UpdateLabService';
import AddPatientServiceDetail from './components/AddPatientServiceDetail';
import HeaderComponent from './layout/HeaderComponent';
import MainDashboard from './components/MainDashboard';
import React from 'react';
import ServiceItemComponent from './components/ServiceItemComponent';
import 'boxicons/css/boxicons.min.css';
import FooterComponent from './layout/FooterComponent';
import ViewLaboratory from './components/ViewLaboratory';
import ViewPatient from './components/ViewPatient';
import DashboardComponent from './components/Dashboard';
import AddPatient from "./components/patients/AddPatient";
import GetPatient from "./components/patients/GetPatient";
import Home from './Home/Home';
import MedicalRecordComponent from './components/MedicalRecordComponent';
import CreateMedicalRecord from './components/CreateMedicalRecord';
import CreatePrescription from './components/CreatePrescription';
import PrescriptionComponent from './components/PrescriptionComponent';
import UpdateRoomComponent from './components/UpdateRoomComponent';
import ListRoomComponents from './components/ListRoomComponents';
import AvaliablityRooms from './components/AvaliablityRooms';
import dashboard from './dashboard';
import SearchMedicine from './SearchMedicine';
import AddMedicine from './AddMedicine';
import ListWardComponents from './WardComponents/ListWardComponent'
import UpdateWardComponent from './WardComponents/UpdateWardComponent'



function App() {
  return (
    <Provider store={store}>
    <Router>
      <HeaderComponent />
      {/* <Home/> */}
    <Route exact path="/" component={MainDashboard}/>
    <Route exact path="/serviceItem" component={ServiceItemComponent}/>
    <Route exact path="/mainDashboard" component={MainDashboard}/>
    <Route exact path="/addLabService" component={AddLabService}/>
    <Route exact path="/updateLabService/:serviceId" component={UpdateLabService}/>
    <Route exact path="/addPatientServiceDetail" component={AddPatientServiceDetail}/>
    <Route exact path="/viewLaboratory" component={ViewLaboratory}/>
    <Route exact path="/viewPatient" component={ViewPatient}/>
    <Route exact path="/dashboard" component={DashboardComponent}/>
    <Route exact path="/addPatient" component={AddPatient}/>
    <Route exact path="/getPatient" component={GetPatient}/>
    <Route path="/medicalrecords" exact component={MedicalRecordComponent}></Route>
    <Route path="/add-medical-record" exact component={CreateMedicalRecord}></Route>
    <Route path="/prescriptions" exact component={PrescriptionComponent}></Route>
    <Route path="/add-prescription" exact component={CreatePrescription}></Route>
    <Route path = "/room" exact component = {ListRoomComponents}></Route>
    <Route path = "/update-Room/:roomId" exact component = {UpdateRoomComponent}></Route>
    <Route path = "/ward" exact component = {ListWardComponents}></Route>
    <Route path="/avaliblity"  component={AvaliablityRooms}></Route>
    <Route path = "/update-Ward/:wardId" exact component = {UpdateWardComponent}></Route>
    <Route exact path="/dashboard1" component={dashboard}/>
    <Route exact path="/AddMedicine" component={AddMedicine}/>
    <Route exact path="/SearchMedicine" component={SearchMedicine}/>
    <FooterComponent />
    </Router>
  </Provider>
  );
}

export default App;
