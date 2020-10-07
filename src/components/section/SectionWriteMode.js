import React, { Component } from "react";
import FooterComponent from "../common/FooterComponent";
import LeftPaneMenuComponent from "../common/LeftPaneMenuComponent";
import NavbarComponent from "../common/NavbarComponent";
import LessonContainer from "../lesson/LessonContainer";
import LessonContents from "../lesson/LessonContents";
import SectionContainer from "./SectionContainer";
import {fetchSectionsByCourse} from "../../reduxUtils/actions/sectionAction"
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

export class SectionWriteMode extends Component {
  componentDidMount() {
    this.props.fetchSectionsByCourse(this.props.location.state.courseId);
  }
  render() {
    return (
      <div>
        <NavbarComponent auth={this.props.auth}/>
        <LeftPaneMenuComponent />

        {/*<!-- BEGIN: Content-->*/}
        <div className="app-content content">
          {/*<!-- sidebar here -->*/}
          <div className="container-fluid">
            <div className="row">
              {/*<!-- panel 1 start -->*/}
              <SectionContainer courseId={this.props.location.state.courseId}/>
              {/*<!-- panel 1 end -->*/}
              {/*<!-- panel 2 start -->*/}
              <LessonContainer/>
              {/*<!-- panel 2 end -->*/}
              {/*<!-- panel 3 start -->*/}
              <LessonContents/>
              {/*<!-- panel 3 end -->*/}
            </div>
          </div>
        </div>
        {/*<!-- END: Content-->*/}

        <div className="sidenav-overlay"></div>
        <div className="drag-target"></div>

        <FooterComponent />
      </div>
    );
  }
}
const mapStateToProps=state =>({
  sections:state.sectionData.sections
})

export default connect(mapStateToProps, { fetchSectionsByCourse })(withRouter(SectionWriteMode));