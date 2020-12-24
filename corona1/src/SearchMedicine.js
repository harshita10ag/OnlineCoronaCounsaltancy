import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import PropTypes from "prop-types";                    
import { connect } from "react-redux";
import { usermedicine } from './Action';
import { Search } from 'react-bootstrap-icons';

 
class SearchMedicine extends React.Component{  
    constructor(props){
        super(props);
        this.state={
            medicineName:'',
            medicineDosage:'',
            medicinePrice:'',
            instockMedicines:'',
            medicineDescription:'',
            Price:0,
            instock:0,
            desc:null,
            count:0,
            data: [],
            errors:{}
            
        }
    }
   
     
    shoot=()=> {
        
        alert(this.state.medicineName+" "+this.state.medicineDosage+" mg added successfully");
    }
    
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     
     if(event.target.name==='medicineName' || event.target.name==='medicineDosage' ){
        this.state.data.map(n=>{
            if(n.medicineName===event.target.value || n.medicineDosage===event.target.value){
                this.setState({Price:n.medicinePrice});
                this.setState({instock:n.instockMedicines});
                this.setState({medicineDescription:n.medicineDescription});
                this.setState({medicinePrice:n.medicinePrice});
                this.setState({medicineDosage:n.medicineDosage});
                this.setState({instockMedicines:n.instockMedicines});
            }
        })
    }
   }
   
    componentDidMount() {
 
        Axios.get('http://localhost:8080/api/medicine/all').then(j => j.data).then(p => this.setState({ data: p }));
      
    }

    render(){
        return(
          <div>
              
             <header>
             <div id="ex4">
  
              </div>                
             </header>
                 <h3>Order Medicines Online</h3> 
                 <div className="container">
                 <div >
                    
                 
        <div class="drop"> 
              
        <div class="input-group md-form form-sm form-2 pl-0">
           <h4 >Search for Medicines</h4>
          
        <select onChange={this.onChange} name="medicineName" value={this.state.medicineName} >  
         <option value="none" selected disabled hidden>Search Medicine..</option>
          {    
            this.state.data.map(n => <option value={n.medicineName}>{n.medicineName} {n.medicineDosage}mg</option>) 
          }
        </select>
            <div class="input-group-append">
            <span class="input-group-text " id="basic-text1"><Search/></span>
           </div>
            </div>
         </div>
         </div>
        </div>
        <div className="med">
             <div className="card card-body bg-light mb-3">
                 <div className="row">
                     <div className="col-2">
                         <span className="mx-auto">MEDICINE DETAILS</span>
                     </div>
                     <div className="col-lg-6 col-md-4 col-8">
                         <div className="form-group">
                             <label>Medicine Price per unit  &nbsp;&nbsp;</label>
                                <input 
                                    type="text" 
                                    className=" form-control-lg"
                                    placeholder="Medicine Price" 
                                    name="medicinePrice" 
                                    onChange={this.onChange}
                                    disabled
                                    value={this.state.Price}

                                    />
                                    
                            </div>
                         <div className="form-group" >
                             <label>Available Medicines &nbsp;  &nbsp;  &nbsp; &nbsp;</label>
                                <input 
                                    type="text" 
                                    className=" form-control-lg"
                                    placeholder="instock medicines" 
                                    name="instockmedicines" 
                                    onChange={this.onChange}
                                    disabled
                                    value={this.state.instock}
                                    />
                            </div>
                            <div class ="desc">
                             <label>Medicine Description &nbsp;</label>
                                <textarea
                                   
                                    placeholder="medicine description" 
                                    name="medicineDescription" 
                                    onChange={this.onChange}
                                    disabled
                                    value={this.state.medicineDescription}
                                    rows="5" cols="150"
                                    />
                            </div>
                            <br></br>
                            <div>
                            <button onClick={this.shoot}>Add Cart</button>
             
                            </div>
                            
                     </div>
                     
                     </div>
                     
                 </div>
             </div>
                 
           
         </div>
        
       

             );
    }
}

  export default SearchMedicine;


