import React, { Component } from 'react'

export class EnrollmentStatus extends Component {
    render() {
        return (
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
        )
    }
}

export default EnrollmentStatus
