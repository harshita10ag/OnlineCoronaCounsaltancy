import React, { Component } from 'react'
import '../components/styles.css'
import {Link,Router} from  'react-router-dom'

import history from '../history'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-custom">
                    <div >
                        <Router history={history}>
                    <Link to="/">
                    <img className="n" src='https://image.shutterstock.com/image-vector/house-icon-vector-260nw-1313371010.jpg' alt="home" ></img>&nbsp;&nbsp;<b style={{ color: 'black' ,textAlign:'right' }}>Online Corona App</b></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<Link to='/room' style={{ color: 'black',fontWeight:'bold' }}>Room</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <Link to='/ward' style={{ color: 'black',fontWeight:'bold' }}>Ward</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <Link to='/' style={{ color: 'black',fontWeight:'bold' }}>Department</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <Link to='/' style={{ color: 'black',fontWeight:'bold' }}>User</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <Link to='/' style={{ color: 'black',fontWeight:'bold' }}>Service</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <Link to='/' style={{ color: 'black',fontWeight:'bold' }}>Doctor</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <Link to='/' style={{ color: 'black',fontWeight:'bold' }}>Medicine</Link>
                    </Router> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
