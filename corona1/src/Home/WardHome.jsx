import { Router, Route, Switch} from 'react-router-dom'
import '../App.css';
import AvaliablityRooms from '../components/AvaliablityRooms'
import WardService from '../Services/WardService'
import ListWardComponents from '../WardComponents/ListWardComponent'
import UpdateWardComponent from '../WardComponents/UpdateWardComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import HeaderComponent from '../components/Headercomponent'
import FooterComponent from '../components/FooterComponent'
import React from 'react'
import history from '../history';
import HomePage from './MainHomePage';
class Home extends React.Component{
  handleChange=()=>{
    WardService.getAvail("ICU").then(res=>{
      console.log(res.data);
      history.push({pathname:`/avaliblity`,state: { data: res.data ,de:"ICU"}});
    })
      }
      
 render(){
 
  return (
  
    <div className='class'>
     
   
            <HeaderComponent/>
            
            <Router history={history}>
            
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;Avalibility Rooms --- 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Button className='name'  onClick=
            {this.handleChange}>ICU</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             </h3>
            
               <div className="container">
                 
                   <Switch> 
                         <Route path = "/" exact component = {HomePage}></Route>
                         <Route path = "/ward" exact component = {ListWardComponents}></Route>
                         <Route path="/avaliblity" exact component={AvaliablityRooms}></Route>
                         <Route path = "/update-Ward/:wardId" exact component = {UpdateWardComponent}></Route>

                   </Switch>
               </div>
            <FooterComponent/>
       </Router>
   </div> 


  );
      }
}

export default Home;
