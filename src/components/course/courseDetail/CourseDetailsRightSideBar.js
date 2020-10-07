import React, { Component } from 'react'
import CourseDetailsRightSideBarContent from './CourseDetailsRightSideBarContent'

export class CourseDetailsRightSideBar extends Component {
    render() {
        return (
            <div className="sidebar-detached sidebar-right sidebar-sticky">
              <div className="sidebar">
                <div className="sidebar-content card d-none d-lg-block">
                  <CourseDetailsRightSideBarContent courseId={this.props.courseId}/>
                </div>
              </div>
            </div>
        )
    }
}

export default CourseDetailsRightSideBar

