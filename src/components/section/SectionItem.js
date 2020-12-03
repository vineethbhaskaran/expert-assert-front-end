import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchLessonByCourseSection } from "../../reduxUtils/actions/lessonAction";
import { setCurrentSection } from "../../reduxUtils/actions/sectionAction";
import { connect } from "react-redux";
import store from "../../reduxUtils/store";

export class SectionItem extends Component {
  state = {
    currentClass: "list-group-item list-group-item-action",
  };
  handleOnClick = (currentSection) => {
    console.log(
      "Course:" + currentSection.courseId + " Section:" + currentSection._id + currentSection.name,
      currentSection.sectionSequence + currentSection.numberOfLessons
    );
    store.dispatch(fetchLessonByCourseSection(currentSection.courseId, currentSection._id));

    store.dispatch(setCurrentSection(currentSection));
    // dispatch an action to pull the sections from the API and set it in a store variable.
  };

  render() {
    return (
      <button
        type="button"
        className={this.state.currentClass}
        onClick={this.handleOnClick.bind(this, this.props.section)}
      >
        {this.props.section.sectionNumber}. {this.props.section.name}
      </button>
    );
  }
}

export default connect(null, { fetchLessonByCourseSection })(SectionItem);
