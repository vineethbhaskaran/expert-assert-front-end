import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class CourseCardItem extends Component {
  render() {
    return (
      <div className="col-xl-3 col-md-6 col-sm-12">
        <div className="card">
          <div className="card-content">
            <img
              className="card-img-top img-fluid"
              src="../../../app-assets/images/carousel/04.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h4 className="card-title font-weight-bold">{this.props.course.name}</h4>
              <p className="card-text font-weight-bold">Course Code: {this.props.course.code}</p>
              <Link to="/courses/courseDetail" className="btn btn-outline-primary">
                View Course
              </Link>
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
