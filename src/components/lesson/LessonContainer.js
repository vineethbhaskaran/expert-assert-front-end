import React, { Component } from "react";
import LessonList from "./LessonList";
import { connect } from "react-redux";
import { fetchLessonByCourseSection, createLesson } from "../../reduxUtils/actions/lessonAction";
import LessonModal from "../modals/LessonModal";
import store from "../../reduxUtils/store";

export class LessonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { showLessonModal: false };
    this.openLessonModal = this.openLessonModal.bind(this);
    this.closeLessonModal = this.closeLessonModal.bind(this);
    this.createLesson = this.createLesson.bind(this);
  }

  openLessonModal = () => {
    this.setState({
      showLessonModal: true,
    });
  };

  closeLessonModal = () => {
    this.setState({
      showLessonModal: false,
    });
  };

  createLesson(lessonObject) {
    lessonObject.contents = lessonObject.name + " content";
    let courseId = this.props.section.courseId;

    let sectionId = this.props.section._id;
    if (courseId != null && courseId != undefined) {
      lessonObject.courseId = courseId;
      lessonObject.sectionId = sectionId;

      console.log(JSON.stringify(lessonObject));
      store.dispatch(createLesson(lessonObject));
      //fetching lessons to update ui
      setTimeout(() => {
        store.dispatch(fetchLessonByCourseSection(courseId, sectionId));
      }, 50);

      this.closeLessonModal();
    } else {
      alert("please select a valid section");
    }
  }
  render() {
    return (
      <div className="col-3 panel-full-height p-0 bg-white">
        <div className="list-group">
          <LessonList lessons={this.props.lessons} />
          <button className="list-group-item d-flex justify-content-between" onClick={this.openLessonModal}>
            <div className="btn btn-outline-primary .btn-block mx-1 d-flex justify-content-between">
              <h5 className="font-weight-bold justify-content-between">Create New Lesson</h5>
            </div>
          </button>
          <LessonModal
            show={this.state.showLessonModal}
            closeModal={this.closeLessonModal}
            createLesson={this.createLesson}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  lessons: state.lessonData.lessons,
  section: state.sectionData.section,
});
const actions = { fetchLessonByCourseSection, createLesson };
export default connect(mapStateToProps, actions)(LessonContainer);
