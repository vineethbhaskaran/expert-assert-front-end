import React, { Component } from 'react'
import NavbarComponent from "../common/NavbarComponent";
import LeftPaneMenuComponent from "../common/LeftPaneMenuComponent";
import FooterComponent from '../common/FooterComponent';

export class Home extends Component {
    render() {
        return (
          
            <div>
             <NavbarComponent/>


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
                                <div className="row mt-2 row-eq-height">
                                    <div className="col-sm-6 col-md-4 col-xl-4 py-1 bg-white">
                                        <div className="card card-block d-flex">
                                            <div className="card-body align-items-center d-flex justify-content-center">
                                                <table>
                                                    <tr>
                                                        <td className="align-items-center d-flex justify-content-center">
                                                            <svg width="3em" height="3em" viewBox="0 0 16 16"
                                                                className="bi bi-book-fill" fill="currentColor"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                    d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                                            </svg>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            className="align-items-center d-flex justify-content-center mt-1">
                                                                <h4 className="card-title">Create Course</h4>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-items-center d-flex justify-content-center"><a
                                                                href="./create-course.html"
                                                                className="btn btn-outline-primary">Get
                                                                Started</a></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-4 col-xl-4 py-1 bg-white">
                                        <div className="card card-block d-flex">
                                            <div className="card-body align-items-center d-flex justify-content-center">
                                                <table>
                                                    <tr>
                                                        <td className="align-items-center d-flex justify-content-center">
                                                            <svg width="3em" height="3em" viewBox="0 0 16 16"
                                                                className="bi bi-envelope-fill" fill="currentColor"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                                            </svg>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            className="align-items-center d-flex justify-content-center mt-1">
                                                            <h4 className="card-title">Invite Users</h4>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-items-center d-flex justify-content-center"><a
                                                                href="./invite-team-mamber.html"
                                                                className="btn btn-outline-primary">Get
                                                                Started</a></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-4 col-xl-4 py-1 bg-white">
                                        <div className="card card-block d-flex">
                                            <div className="card-body align-items-center d-flex justify-content-center">
                                                <table>
                                                    <tr>
                                                        <td className="align-items-center d-flex justify-content-center">
                                                            <svg width="3em" height="3em" viewBox="0 0 16 16"
                                                                className="bi bi-layers-fill" fill="currentColor"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                    d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z" />
                                                                <path fill-rule="evenodd"
                                                                    d="M2.125 8.567l-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z" />
                                                            </svg>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            className="align-items-center d-flex justify-content-center mt-1">
                                                            <h4 className="card-title">Attend Course</h4>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-items-center d-flex justify-content-center"><a
                                                                href="./course-home.html"
                                                                className="btn btn-outline-primary">Get
                                                                Started</a></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!--End- Create,Invite,attend course cards-->*/}
                                {/*<!-- Enrollment status-->*/}
                                <div className="row mt-2 row-eq-height">
                                    <div className="col-sm-12 col-md-12 col-xl-12 py-1 bg-white">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title">Your Enrollments</h4>
                                            </div>
                                            <div className="card-content">
                                                <div className="card-body">
                                                    <ul className="nav nav-tabs" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" id="base-tab1" data-toggle="tab"
                                                                aria-controls="tab1" href="#tab1" role="tab"
                                                                aria-selected="true">Inprogress</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" id="base-tab2" data-toggle="tab"
                                                                aria-controls="tab2" href="#tab2" role="tab"
                                                                aria-selected="false">Completed</a>
                                                        </li>

                                                    </ul>
                                                    <div className="tab-content px-1 pt-1 scrollable-div">
                                                        <div className="tab-pane active progress-bar-container" id="tab1"
                                                            role="tabpanel" aria-labelledby="base-tab1">
                                                            <h6>Node Js classes</h6>
                                                            <div className="progress" style={{height:'10px'}}>
                                                                <div className="progress-bar" role="progressbar"
                                                                    style={{width: '60%'}} aria-valuenow="60"
                                                                    aria-valuemin="0" aria-valuemax="100">60%
                                                                </div>
                                                            </div>
                                                            <h6>ReactJs classes</h6>
                                                            <div className="progress" style={{height:'10px'}}>
                                                                <div className="progress-bar" role="progressbar"
                                                                    style={{width: '60%' }} aria-valuenow="60"
                                                                    aria-valuemin="0" aria-valuemax="100">60%
                                                                </div>
                                                            </div>
                                                            <h6>VueJs classes</h6>
                                                            <div className="progress" style={{height:'10px'}}>
                                                                <div className="progress-bar" role="progressbar"
                                                                    style={{width: '60%'}} aria-valuenow="60"
                                                                    aria-valuemin="0" aria-valuemax="100">60%
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="tab-pane" id="tab2" role="tabpanel"
                                                            aria-labelledby="base-tab2">
                                                            <h6>Python classes</h6>
                                                            <div className="progress" style={{height:'10px'}}>
                                                                <div className="progress-bar" role="progressbar"
                                                                    style={{width: '100%'}} aria-valuenow="100"
                                                                    aria-valuemin="0" aria-valuemax="100">100%
                                                                </div>
                                                            </div>
                                                            <h6>PHP classes</h6>
                                                            <div className="progress" style={{height:'10px'}}>
                                                                <div className="progress-bar" role="progressbar"
                                                                    style={{width: '100%'}} aria-valuenow="100"
                                                                    aria-valuemin="0" aria-valuemax="100">100%
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!--End of: Enrollment status-->*/}

                            </div>

                            {/*<!-- Right Panel: Course usage statistics-->*/}
                            <div className="col-sm-6 col-md-6 col-xl-6 py-1 bg-white scrollable-div-large">
                                <div className="ml-1">
                                    <h4 className="card-title">Your Courses</h4>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Node Js classes</h4>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="progress-bar-container">
                                                <h6>Completion Rate</h6>
                                                <div className="progress" style={{height:'10px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%
                                                    </div>
                                                </div>
                                                <h6>Enrollment Rate</h6>
                                                <div className="progress" style={{height:'10px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%
                                                    </div>
                                                </div>
                                                <h6>Average Score</h6>
                                                <div className="progress" style={{height:'10px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Python classes</h4>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="progress-bar-container">
                                                <h6>Completion Rate</h6>
                                                <div className="progress" style={{height:'10px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%
                                                    </div>
                                                </div>
                                                <h6>Enrollment Rate</h6>
                                                <div className="progress" style={{height:'10px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%
                                                    </div>
                                                </div>
                                                <h6>Average Score</h6>
                                                <div className="progress" style={{height:'10px'}}>
                                                    <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
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
