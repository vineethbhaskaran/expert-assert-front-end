import React from "react";
import CourseCardItem from "./CourseCardItem";
import PropTypes from "prop-types";

function CourseCards(props) {
  return props.courses.map((course) => <CourseCardItem key={course._id} course={course} />);
}

//Prop types
CourseCards.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseCards;
