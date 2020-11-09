import React, { useEffect } from "react";
import { fetchCourses } from "../../../reduxUtils/actions/courseAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CourseCards from "./CourseCards";
import CourseStatusLeftPanel from "./CourseStatusLeftPanel";

function CourseContent(props) {
  useEffect(() => {
    props.fetchCourses();
  });
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
                <CourseCards courses={props.courses} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//Prop types
CourseContent.propTypes = {
  courses: PropTypes.array.isRequired,
  fetchCourses: PropTypes.func,
};

const mapStateToProps = (state) => ({
  courses: state.courseData.courses,
});
//export default CourseContent;
export default connect(mapStateToProps, { fetchCourses })(CourseContent);
