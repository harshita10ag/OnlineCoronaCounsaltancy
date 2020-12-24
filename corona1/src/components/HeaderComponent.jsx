import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a className="navbar-brand">ONLINE CORONA CONSULTATION</a>
                            <a className="navbar-brand" href="medicalrecords"><b>Medical Records</b></a>
                            <a className="navbar-brand" href="prescriptions"><b>Prescriptions</b></a>

                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;