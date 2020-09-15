import React, { Component } from "react";
import PropTypes from "prop-types";
class CourseCardItem extends Component {
  render() {
    return (
      <div className="col-xl-3 col-md-6 col-sm-12">
        <div className="card">
          <div className="card-content">
            <img
              className="card-img-top img-fluid"
              src="../../../app-assets/images/carousel/06.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h4 className="card-title">{this.props.course.name}</h4>
              <p className="card-text">{this.props.course.description}</p>
              <a href="course-designer.html" className="btn btn-outline-amber">
                View Course
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Prop Types
CourseCardItem.prototypes = {
  course: PropTypes.object.isRequired,
};

export default CourseCardItem;
