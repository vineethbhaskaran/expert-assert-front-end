import React, { Component } from "react";
import NavbarComponent from "../common/NavbarComponent";
import LeftPaneMenuComponent from "../common/LeftPaneMenuComponent";
import CourseContent from "./CourseContent";
import FooterComponent from "../common/FooterComponent";

class CourseHome extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <LeftPaneMenuComponent />

        <CourseContent />

        <div className="sidenav-overlay"></div>
        <div className="drag-target"></div>
        <FooterComponent />
      </div>
    );
  }
}

export default CourseHome;
