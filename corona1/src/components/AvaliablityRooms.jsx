import React from 'react'
import SlideShow from './Slideshow'
class AvaliablityRooms extends React.Component{
render(){
    // console.log(this.props.location.state.de);
    return(
        <div>
       <h1>{this.props.location.state.de}:{this.props.location.state.data}</h1> 
      
<SlideShow/>
</div>
    );
}
}
export default AvaliablityRooms;