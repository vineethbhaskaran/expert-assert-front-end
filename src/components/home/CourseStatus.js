import React, { Component } from 'react'

export class CourseStatus extends Component {
    render() {
        return (
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
        )
    }
}

export default CourseStatus
