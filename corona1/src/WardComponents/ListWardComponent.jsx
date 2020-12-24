import React, { Component } from 'react'
import WardService from '../Services/WardService'
import history from '../history'
import { connect } from 'react-redux';
import { getEmployees } from '../actions/actions';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
class ListWardComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
                wards: []
        }
       
        this.editWard = this.editWard.bind(this);
        
    }

  
    handleChange2=()=>{
        WardService.getAvail("ICU").then(res=>{
          console.log(res.data);
          history.push({pathname:`/avaliblity`,state: { data: res.data ,de:"ICU"}});
          window.location.reload();
        })
       // this.props.getEmployees();
          }
        editWard(wardId){
        this.props.history.push(`/update-ward/${wardId}`);
    }

    
    componentDidMount(){
        // WardService.getAllWards().then((res) => {
        //      this.setState({ wards: res.data});
        //  });
        this.props.getEmployees();
     }

    render() {
        const wards= this.props.ward;
 console.log(wards);
 
        return (
            <div>
                <h3>Avalibility Wards --- 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button className='name'  onClick=
            {this.handleChange2}>ICU</Button></h3>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>ward Id</th>
                                    <th>Ward Price</th>
                                    <th>Ward Name</th>
                                    <th> Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wards.map(
                                        ward => 
                                         <tr key = {ward.wardId}>
                                             <td> { ward.wardId} </td>  
                                             <td>{ward.wardPrice}</td>
                                             <td>{ward.wardtype}</td>
                                             <td>
                                             {/* <button onClick={​​​​​​​() => this.editRoom(room.roomId)}​​​​​​​ className="btn btn-info"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-brush-fill" >
  <path fill-rule="evenodd" d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"/>
</svg> Update </button> */}
                                                 <button onClick={ () => this.editWard(ward.wardId)} className="btn btn-info">Update </button>
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
    return { ward: state.getlist,data1:state.data
     }
    }
    // Connecting this file with redux
    export default connect(mapStateToProps, { getEmployees })(ListWardComponents);
   