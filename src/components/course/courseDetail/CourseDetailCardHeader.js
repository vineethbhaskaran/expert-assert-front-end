import React, { Component } from "react";

export class CourseDetailCardHeader extends Component {
  render() {
    return (
      <div className="card-header">
        <h4 className="card-title">{this.props.courseHeader}</h4>
        <a className="heading-elements-toggle">
          <i className="fa fa-ellipsis-v font-medium-3"></i>
        </a>
      </div>
    );
  }
}

export default CourseDetailCardHeader;
