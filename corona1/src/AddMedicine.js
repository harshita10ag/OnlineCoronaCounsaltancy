import React from "react";
import PropTypes from "prop-types";                    
import { connect } from "react-redux";
import { createmedicine } from './Action';
class AddMedicine extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fields: {},
            errors: {}
           
        }
    }
    
    onChange=(event)=>{
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
          [event.target.name]:event.target.value
        });
     }
     onSubmit=(event)=> {
        console.log(this.validateForm());
        
        event.preventDefault();
        let fields = {};
        const newmedicine = {
          
            medicineName:this.state.medicineName,
            medicineDosage:this.state.medicineDosage,
            instockMedicines:this.state.instockMedicines,
            medicinePrice:this.state.medicinePrice,
            medicineDescription:this.state.medicineDescription
            
        }
       
       
        if (this.validateForm()) {
          this.props.createmedicine(newmedicine,this.props.history);
            console.log(this.state);
            let fields = {};
            fields["medicineName"] = "";
            fields["medicineDosage"] = "";
            fields[" instockMedicines"] = "";
            fields["medicinePrice"] = "";
            fields["medicineDescription"]="";
            this.setState({fields:fields});
            console.log(this.state);
            alert("Medicine Added successfully");
        }
      }

      validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["medicineName"]) {
          formIsValid = false;
          errors["medicineName"] = "*Enter valid medicine name.";
        }
  
        if (typeof fields["medicineName"] !== "undefined") {
          if (!fields["medicineName"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["medicineName"] = "*Please enter alphabet characters only.";
          }
        }
        if (!fields["medicineDosage"]) {
          formIsValid = false;
          errors["medicineDosage"] = "*Enter the medicine dosage";
        }
  
        if (typeof fields["medicineDosage"] !== "undefined") {
            if ((fields["medicineDosage"]<0 || fields["medicineDosage"]>10000) || (!(fields["medicineDosage"].match(/^[0-9]*$/)) )) {
            formIsValid = false;
            errors["medicineDosage"] = "*Please enter valid medicine dosage";
          }
        }
        if (!fields["instockMedicines"]) {
            formIsValid = false;
            errors["instockMedicines"] = "*Enter the available quantity of medicines";
          }
    
          if (typeof fields["instockMedicines"] !== "undefined") {
            if ((fields["instockMedicines"]<0 || fields["instockMedicines"]>10000) ||  (!(fields["medicineDosage"].match(/^[0-9]*$/)))) {
              formIsValid = false;
              errors["instockMedicines"] = "*Please enter instock medicines";
            }
          }
          if (!fields["medicinePrice"]) {
            formIsValid = false;
            errors["medicinePrice"] = "*Enter the medicine price";
          }
    
          if (typeof fields["medicinePrice"] !== "undefined") {
            if ((fields["medicinePrice"]<0 || fields["medicinePrice"]>10000)|| (!(fields["medicineDosage"].match(/^[0-9]*$/)) )) {
              formIsValid = false;
              errors["medicinePrice"] = "*Please enter valid medicine price";
            }
          }
          if (!fields["medicineDescription"]) {
            formIsValid = false;
            errors["medicineDescription"] = "*Enter valid medicine Description.";
          }
    
        this.setState({
          errors: errors
        });
        return formIsValid;
      }
  
  
 render(){
     return(
              <div className="medicine" id="fp1" >
               <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br></br>
                        <h5 className="display-6 text-center">Add Medicine </h5>
                        <hr/>
                        <form method="post" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label > Medicine Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text"  className=" form-control-lg" placeholder=" Medicine Name" name="medicineName" onChange={this.onChange}
                                    value={this.state.medicineName} /> 
                              <div className="errorMsg">{this.state.errors.medicineName}</div>
                                </label>
                            </div>
                            
                            <div className="form-group">
                                <label > Medicine Dosage: &nbsp;&nbsp;
                                <input type="text"   className=" form-control-lg"  placeholder=" Medicine Dosage" name="medicineDosage" onChange={this.onChange}
                                    value={this.state.medicineDosage} /> 
                                    <div className="errorMsg">{this.state.errors.medicineDosage}</div>
                                </label>
                            </div>
                            <div className="form-group">
                                <label > Medicine Price: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text"  className=" form-control-lg" placeholder=" Medicine Price" name="medicinePrice" onChange={this.onChange}
                                    value={this.state.medicinePrice} /> 
                                    <div className="errorMsg">{this.state.errors.medicinePrice}</div>
                                </label>
                            </div>
                            <div className="form-group">
                                <label > Instock Medicines: &nbsp;
                                <input type="text"  className=" form-control-lg" placeholder=" Instock Medicines" name="instockMedicines" onChange={this.onChange}
                                    value={this.state.instockMedicines} /> 
                                    <div className="errorMsg">{this.state.errors.instockMedicines}</div>
                                </label>
                            </div>
                            <div className="form-group">
                                <label > Medicine Description: &nbsp;
                                <textarea  className=" form-control-lg" placeholder=" Medicine description" name="medicineDescription" onChange={this.onChange}
                                    value={this.state.medicineDescription} /> 
                                    <div className="errorMsg">{this.state.errors.medicineDescription}</div>
                                </label>
                            </div>
                           <br></br>
                            <input type="submit" className="btn-primary " value="Add Medicine" />
                          <br />
                        </form>
                      
                    </div>
                </div>
            </div>
           
        </div> 
         
     );
 }
}

AddMedicine.propTypes = {
  createmedicine:PropTypes.func.isRequired,
  errors:PropTypes.object.isRequired
}

export default connect(null,{createmedicine})(AddMedicine);