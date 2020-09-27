import React, { Component } from 'react'

export class CreateCourseBreadcrumb extends Component {
    render() {
        return (
            <div>
                <div className="row breadcrumbs-top">
                    <div className="breadcrumb-wrapper col-12">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="./course-home.html">Courses</a>
                        </li>
                        <li className="breadcrumb-item active">Create Course</li>
                      </ol>
                    </div>
                  </div>
            </div>
        )
    }
}

export default CreateCourseBreadcrumb
