import React from "react";
import {Link} from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';

class dashboard extends React.Component{
    render() {
        return (
          <div >
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">Online Pharmacy</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-item nav-link active" to="/dashboard">Home</Link>
                <Link class="nav-item nav-link " to="/AddMedicine">Add Medicines</Link>
                <Link class="nav-item nav-link " to="/SearchMedicine">Order Medicines</Link>
                <span class="nav-item nav-link "><Cart/>Cart</span>
                </div>
                
                </div>
          
        </nav>
      
        <div id="fp">
                  <img src="https://wallpaperaccess.com/full/1464884.jpg" />
                </div>
               
        </div>
      
        )
    }
}
export default dashboard;
            