import React from "react";
import PropTypes from "prop-types";
import NavbarComponent from "../../common/NavbarComponent";
import LeftPaneMenuComponent from "../../common/LeftPaneMenuComponent";
import CourseContent from "./CourseContent";
import FooterComponent from "../../common/FooterComponent";

function CourseHome(props) {
  return (
    <div>
      <NavbarComponent auth={props.auth} />
      <LeftPaneMenuComponent />

      <CourseContent />

      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>
      <FooterComponent />
    </div>
  );
}

//Prop types
CourseHome.propTypes = {
  auth: PropTypes.object.isRequired,
};
export default CourseHome;
