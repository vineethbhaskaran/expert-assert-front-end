import React, { Component } from 'react'

export class CourseDetailBreadcrumb extends Component {
    render() {
        return (
            <div className="breadcrumb-wrapper col-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="./course-home.html">Courses</a>
                      </li>
                      <li className="breadcrumb-item active">Course Summary</li>
                    </ol>
                  </div>
        )
    }
}

export default CourseDetailBreadcrumb
