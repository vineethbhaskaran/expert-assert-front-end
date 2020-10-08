import React, { Component } from "react";

export class LessonItem extends Component {
  render() {
    return (
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {this.props.lesson.sequence}.{this.props.lesson.name}
          </h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Short description of {this.props.lesson.name}</p>
      </a>
    );
  }
}

export default LessonItem;
