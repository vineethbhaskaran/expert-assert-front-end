import React, { Component } from 'react'
import NavbarComponent from "../common/NavbarComponent";
import LeftPaneMenuComponent from "../common/LeftPaneMenuComponent";
import FooterComponent from '../common/FooterComponent';
import Auth from '../auth/Auth';
import QuickLaunchContainer from './QuickLaunchContainer';
import EnrollmentStatus from './EnrollmentStatus';
import CourseStatus from './CourseStatus';

export class Home extends Component {
    componentDidMount(){
        this.props.auth.handleAuthentication()
    }
    render() {
        return (
          
            <div>
             <NavbarComponent auth={this.props.auth}/>


             <LeftPaneMenuComponent/>

    {/*<!-- BEGIN: Content-->*/}
    <div className="app-content content">
        {/*<!-- sidebar here -->*/}
        <div className="container-fluid">
            <div className="row">


                <div className="col-md-12">
                    <h3>Get Started</h3>
                    <div id="courses">
                        <div className="row mt-2 row-eq-height">
                            <div className="col-sm-6 col-md-6 col-xl-6 py-1 bg-white">

                                {/*<!-- Create,Invite,attend course cards-->*/}
                                <QuickLaunchContainer/>
                                {/*<!--End- Create,Invite,attend course cards-->*/}
                                {/*<!-- Enrollment status-->*/}
                                <EnrollmentStatus/>
                                {/*<!--End of: Enrollment status-->*/}

                            </div>

                            {/*<!-- Right Panel: Course usage statistics-->*/}
                            <CourseStatus/>
                            {/*<!--End Of: Right Panel: Course usage statistics-->*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*<!-- END: Content-->*/}

    <div className="sidenav-overlay"></div>
    <div className="drag-target"></div>

    {/*<!-- BEGIN: Footer-->*/}
    <FooterComponent/>
            </div>
        )
    }
}

export default Home
