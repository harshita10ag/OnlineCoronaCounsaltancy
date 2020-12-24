import React, { Component } from 'react'
import RoomService from '../Services/RoomService'
import 'bootstrap/dist/css/bootstrap.min.css';
import history from '../history'
import {Button} from 'react-bootstrap'
import {getRooms} from '../actions/actions'
import {connect} from 'react-redux'
class ListRoomComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
                rooms: []
        }
       
        this.editRoom = this.editRoom.bind(this);
        
    }
    handleChange=()=>{
        RoomService.getAvail("single").then(res=>{
          console.log(res.data);
          history.push({pathname:`/avaliblity`,state: { data: res.data ,de:"single"}});
          window.location.reload();
        })
          }
          handleChange1=()=>{
            RoomService.getAvail("double").then(res=>{
              console.log(res.data);
              history.push({pathname:`/avaliblity`,state: { data: res.data ,de:"double"}});
              window.location.reload();
            })
              }
  
  
        editRoom(roomId){
        this.props.history.push(`/update-room/${roomId}`);
    }

    
    componentDidMount(){
        // RoomService.getAllRooms().then((res) => {
        //      this.setState({ rooms: res.data});
        //  });
        this.props.getRooms();
     }

    render() {
        const rooms1=this.props.data;
        
        console.log(rooms1);
        return (
            <div>
               <h3>&nbsp;&nbsp;&nbsp;&nbsp;Avalibility Rooms --- 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Button className='name'  onClick=
            {this.handleChange}>Single</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Button onClick=
            {this.handleChange1}>Double</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
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
                                {
                                    rooms1.map(
                                        room => 
                                         <tr key = {room.roomId}>
                                             <td> { room.roomId} </td> 
                                             <td>{room.roomPrice}</td> 
                                             <td>{room.type}</td>
                                             <td>
                                             {/* <button onClick={​​​​​​​() => this.editRoom(room.roomId)}​​​​​​​ className="btn btn-info"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-brush-fill" >
  <path fill-rule="evenodd" d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"/>
</svg> Update </button> */}
                                                 <button onClick={ () => this.editRoom(room.roomId)} className="btn btn-info">Update </button>
                                                                                         </td>
                                  </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("state"+state.rooms)
    return { data: state.rooms
       
     }
    }
    // Connecting this file with redux
    export default connect(mapStateToProps, { getRooms })(ListRoomComponents);
//export default ListRoomComponents
