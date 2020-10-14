import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../../reduxUtils/store";
import { setCurrentLesson } from "../../reduxUtils/actions/lessonAction";

export class LessonItem extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = () => {
    let currentLesson = this.props.lesson;
    console.log(JSON.stringify(currentLesson));
    store.dispatch(setCurrentLesson(currentLesson));
  };
  render() {
    return (
      <button className="list-group-item list-group-item-action" onClick={this.handleOnClick}>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {this.props.lesson.sequence}.{this.props.lesson.name}
          </h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Short description of {this.props.lesson.name}</p>
      </button>
    );
  }
}

export default connect(null, { setCurrentLesson })(LessonItem);
