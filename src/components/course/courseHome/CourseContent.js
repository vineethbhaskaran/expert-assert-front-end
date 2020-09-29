import React, { Component } from "react";
import CourseStatusLeftPanel from "./CourseStatusLeftPanel";
import CourseCards from "./CourseCards";
import {fetchCourses} from "../../../reduxUtils/actions/courseAction"
import { connect } from 'react-redux';

class CourseContent extends Component {
 
  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    return (
      <div className="app-content content">
        {/* <!-- sidebar here --> */}
        <div className="container-fluid">
          <div className="row">
            {/* <!-- panel 1 start --> */}
            <CourseStatusLeftPanel />
            <div className="col-10 panel-full-height">
              <div id="courses">
                <div className="row match-height mt-2">
                  <CourseCards courses={this.props.courses} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courseData.courses,
});
//export default CourseContent;
export default connect(mapStateToProps, { fetchCourses })(CourseContent);
