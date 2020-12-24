import { Router, Route, Switch} from 'react-router-dom'
import '../App.css';
import UpdateRoomComponent from '../components/UpdateRoomComponent'
import ListRoomComponents from '../components/ListRoomComponents'
import AvaliablityRooms from '../components/AvaliablityRooms'

import ListWardComponents from '../WardComponents/ListWardComponent'
import UpdateWardComponent from '../WardComponents/UpdateWardComponent'
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react'
import history from '../history';
import HomePage from './MainHomePage';
class Home extends React.Component{
 
          
 render(){
 
  return (
  
    <div className='class'>
     
   
            
            <Router history={history}>
            
            
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
               <div className="container">
                 
                   <Switch> 
                         <Route path = "/" exact component = {HomePage}></Route>
                         <Route path = "/room" exact component = {ListRoomComponents}></Route>
                         <Route path="/avaliblity" exact component={AvaliablityRooms}></Route>
                         <Route path = "/update-Room/:roomId" exact component = {UpdateRoomComponent}></Route>
                         <Route path = "/ward" exact component = {ListWardComponents}></Route>
                         <Route path="/avaliblity" exact component={AvaliablityRooms}></Route>
                         <Route path = "/update-Ward/:wardId" exact component = {UpdateWardComponent}></Route>
                   </Switch>
               </div>
       </Router>
   </div> 


  );
      }
}

export default Home;
