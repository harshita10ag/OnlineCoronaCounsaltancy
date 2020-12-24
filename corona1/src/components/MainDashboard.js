import React from 'react'
import AddPatientServiceDetail from './AddPatientServiceDetail';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getProjects} from '../actions/ServiceAction';
import ServiceItemComponent from './ServiceItemComponent';
import { Link } from 'react-router-dom';
import box1 from '../img/box1.png';
import box2 from '../img/box2.png';
import box3 from '../img/box3.png';
import home from '../img/home-seven-about.jpg';
import 'boxicons';

class MainDashboard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            projects:[]
        }
    }

    componentDidMount(){
        this.props.getProjects();
    }
    render() {
        const {projects} =  this.props.projects;

        return (
            <div className="projects" >
                <section id="showcase">
                <div class="container" >
			        <h1>Welcome to Online Corona Counsaltancy</h1>
			        <p>Corona Consulting just launched their company from part-time to full-time. Kerri Nelson and Jill Corona knew they wanted their consulting business’ website make an excellent first impression.</p>
                    <div class="slider-btn">
                    <center><a class="default-btn" href="/addPatientServiceDetail">
                        <button id="book" class="btn btn-primary btn-block mt-4"> Book a Test</button></a></center></div>
                </div>
                </section>
                <section id="boxes">
                        <div class="container">
                            <div class="box">
                                <img src={box1} alt="Laboratory Service"/>
                                        <h3>Laboratory Service</h3>
                                        <p>Lab services must be consistent and dependable to correctly assess and manage patients with various illnesses</p>
                                    
                            </div>
                            <div class="box">
                            <img src={box2} alt="Laboratory Accreditation"/>
                                        <h3>Laboratory Accreditation</h3>
                                        <p>Laboratory accreditation is a widely accepted process of evaluation of a laboratory's quality, performance, reliability and efficiency. </p>
                            </div>
                            <div class="box">
                            <img src={box3} alt="Leading Technology"/>
                                        <h3>Leading Technology</h3>
                                        <p>Technology trends can greatly increase the capabilities of the laboratory. Innovative technology and methods allow laboratory technicians and scientists to work more efficiently and accurately than ever before. </p>
                            </div>
                        
                    </div>
                    
                </section>
                
                <section id="about-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <h2>We Employ Latest Technology & Company</h2>
                                <p>Innovation in laboratory technology, which includes both new tests and advances in equipment and testing techniques, has made testing more efficient and automated.</p>
                                <ul >
                                    <li id="points"><i class='bx bxs-check-circle' ></i>Chemical Research</li><br/>
                                    <li id="points"><i class='bx bxs-check-circle' ></i>Pathology Testing</li><br/>
                                    <li id="points"><i class='bx bxs-check-circle' ></i>Sample Preparation</li><br/>
                                    <li id="points"><i class='bx bxs-check-circle' ></i>Healthcare Labs</li><br/>
                                    <li id="points"><i class='bx bxs-check-circle' ></i>Environmental Testing</li><br/>
                                    </ul>
                            </div>
                            <div class="col-lg-6">
                                <div class="about-img">
                                    <img src={home} alt="laboratory" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
             
        </div>
        
        )
    }
}
MainDashboard.propTypes={
    getProjects:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({
    projects:state.projects
});
export default connect(mapStateToProps,{getProjects})(MainDashboard);