import React, { Component } from "react";
import LessonList from "./LessonList";
import { connect } from "react-redux";
import { fetchLessonByCourseSection } from "../../reduxUtils/actions/lessonAction";

export class LessonContainer extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="col-3 panel-full-height p-0 bg-white">
        <div className="list-group">
          <LessonList lessons={this.props.lessons} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  lessons: state.lessonData.lessons,
});
export default connect(mapStateToProps, { fetchLessonByCourseSection })(LessonContainer);
