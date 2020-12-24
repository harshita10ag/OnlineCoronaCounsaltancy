import React, { Component } from 'react'
import RoomService from '../Services/RoomService'
import {updateRooms} from '../actions/actions'
import {connect} from 'react-redux'
class UpdatePatientComponent extends Component {
    constructor(props) {
        super(props)

    this.state = {
               roomId: this.props.match.params.roomId,
            roomPrice: '',
            type: '',
            show:false,
            show1:false

    }
    this.changeRoomPriceHandler=this.changeRoomPriceHandler.bind(this);
    this.changeTypeHandler=this.changeTypeHandler.bind(this);
    this.updateRoom=this.updateRoom.bind(this);
}
componentDidMount(){
        RoomService.getRoomById(this.state.roomId).then( res => {
             let room = res.data;
             console.log(res.data);
            this.setState({
                           roomId: room.roomId,
                           roomPrice:room.roomPrice,
                           type:room.type
                         });
         });
    }
    updateRoom = (e) => {
             e.preventDefault();
             let room={roomId: this.state.roomId, roomPrice: this.state.roomPrice, type:this.state.type};
             console.log('patient => ' + JSON.stringify(room));
             console.log('patientId => ' + JSON.stringify(this.state.roomId));
            
            // RoomService.updateRoom(this.state.roomId,room).then( res =>{
            //      this.props.history.push('/room');
            //  });
           // this.props.updateRooms(this.state.roomId,room);
            if(this.state.roomPrice!=='' && this.state.type!==''){
                // WardService.updateWard(this.state.wardId,ward).then( res =>{
                //      this.props.history.push('/ward');
                //  });
                this.props.updateRooms(this.state.roomId,room);}
                else{
                    if(this.state.type==='' && this.state.roomPrice==='')
                    {
                        this.setState({show:true,show1:true})
                    }else if(this.state.type==='')
                    {
                        this.setState({show1:true})
                    }else if( this.state.roomPrice==='')
                    {
                        this.setState({show:true})
                    }
                }
    
             }
         

         
          
       
        changeRoomPriceHandler= (e) =>{
            this.setState({roomPrice: e.target.value});
        }
        changeTypeHandler= (e) =>{
            this.setState({type: e.target.value});
        }
       
        cancel(){
            this.props.history.push('/room');
        }
    
        render() {
            return (
                <div>
                    
                     <div className = "row">
                            <table className = "table table-striped table-bordered">
    
                                <thead>
                                    <tr>
                                        <th>Room Id</th>
                                        <th>Room Price</th>
                                        <th>Room Type</th>
                                        <th> Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                             <tr key = {this.state.roomId}>
                                                 <td> { this.state.roomId} </td>  
                                        <td><input placeholder="Room Price" name="roomPrice"  
                                                    value={this.state.roomPrice} onChange={this.changeRoomPriceHandler}/><br></br>{this.state.show?'*Required':''}</td> 
                                       <td> <input placeholder="type" name="type"  
                                                    value={this.state.type} onChange={this.changeTypeHandler}/><br></br>{this.state.show1?'*Required':''}</td>
                                                    <td><button className="btn btn-success" onClick={this.updateRoom}>Save</button>
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
    console.log('state'+state.updateRoom.action);
    return { data: state.updateRoom }
    }
    // Connecting this file with redux
    export default connect(mapStateToProps, { updateRooms })( UpdatePatientComponent);    
//export default UpdatePatientComponent