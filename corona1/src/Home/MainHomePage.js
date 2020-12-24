import history from '../history'

import {Link} from 'react-router-dom'
import React from 'react'
import './styles.css'
class HomePage extends React.Component{

wardHandle=()=>{
    history.push("/ward");
}
roomHandle=()=>{
    history.push("/room")
}
    render(){
        return(
            <div className='size'>
                   <div className='nn'>
                    <Link to='/room'><img style={{ width: '380px', height: '350px', alignSelf: 'flex-end' }} src='https://images.livemint.com/img/2020/06/14/600x338/AFP_1QP65B_1587470324695_1592132878576.jpg' alt='room'></img>Room</Link>
            {/* <Button onClick={this.roomHandle} size='lg' >Room</Button> */}
            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <div className='nnn'><Link to='/ward'><img style={{ width: '380px', height: '350px', alignSelf: 'flex-end' }} src='https://cdn.technologynetworks.com/tn/images/thumbs/webp/640_360/virus-dna-spread-through-a-hospital-ward-within-10-hours-335833.webp?v=10750065' alt='ward'></img>Ward</Link></div>
             </div>);

    }
}
export default HomePage;