import React, { Component } from 'react'
import WardService from '../Services/WardService'
import {updateData} from '../actions/actions'
import {connect} from 'react-redux'
class UpdateWardComponent extends Component {
    constructor(props) {
        super(props)

    this.state = {
               wardId: this.props.match.params.wardId,
            wardPrice: '',
            wardType: '',
            show:false,
            show1:false

    }
    this.changeWardPriceHandler=this.changeWardPriceHandler.bind(this);
    this.changeWardTypeHandler=this.changeWardTypeHandler.bind(this);
    this.updateWard=this.updateWard.bind(this);
}
componentDidMount(){
        WardService.getWardById(this.state.wardId).then( res => {
             let ward = res.data;
             console.log(res.data);
            this.setState({
                           wardId: ward.wardId,
                           wardPrice:ward.wardPrice,
                           wardType:ward.wardtype
                         });
         });
    }
    
    updateWard = (e) => {
             e.preventDefault();
             let ward={wardId: this.state.wardId, wardPrice: this.state.wardPrice, wardType:this.state.wardType};
             console.log('ward => ' + JSON.stringify(ward));
             console.log('wardId => ' + JSON.stringify(this.state.wardId));
            if(this.state.wardPrice!=='' && this.state.wardType!==''){
            // WardService.updateWard(this.state.wardId,ward).then( res =>{
            //      this.props.history.push('/ward');
            //  });
            this.props.updateData(this.state.wardId,ward);}
            else{
                if(this.state.wardType==='' && this.state.wardPrice==='')
                {
                    this.setState({show:true,show1:true})
                }else if(this.state.wardType==='')
                {
                    this.setState({show1:true})
                }else if( this.state.wardPrice==='')
                {
                    this.setState({show:true})
                }
            }

         }
         
          
       
        changeWardPriceHandler= (e) =>{
            this.setState({wardPrice: e.target.value});
        }
        changeWardTypeHandler= (e) =>{
            this.setState({wardType: e.target.value});
        }
       
        cancel(){
            this.props.history.push('/ward');
        }
    
        render() {
            
            return (
                <div>
                    
                     <div className = "row">
                            <table className = "table table-striped table-bordered">
    
                                <thead>
                                    <tr>
                                        <th>Ward Id</th>
                                        <th>Ward Price</th>
                                        <th>Ward Type</th>
                                        <th> Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                             <tr key = {this.state.wardId}>
                                                 <td> { this.state.wardId} </td>  
                                        <td><input placeholder="Ward Price" name="wardPrice"  
                                                    value={this.state.wardPrice} onChange={this.changeWardPriceHandler}/><br></br>{this.state.show?'*Required':''}</td> 
                                       <td> <input placeholder="wardType" name="wardType"  
                                                    value={this.state.wardType} onChange={this.changeWardTypeHandler}/><br></br>{this.state.show1?'*Required':''}</td>
                                                    <td><button className="btn btn-success" onClick={this.updateWard}>Save</button>
                                                    <button style={{marginLeft: "10px"}}className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button></td>
                                                    </tr>
                                 </tbody>
                        </table>
         
                 </div>

            </div>
        )
    }
}    
const mapStateToProps = (state) => {
    console.log('state'+state.data);
    return { data: state.data }
    }
    // Connecting this file with redux
    export default connect(mapStateToProps, { updateData })(UpdateWardComponent);
      
      
