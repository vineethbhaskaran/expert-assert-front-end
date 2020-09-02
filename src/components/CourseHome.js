import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import LeftPaneMenuComponent from "./LeftPaneMenuComponent";
import CourseContent from "./CourseContent";
import FooterComponent from "./FooterComponent";

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
