import React, { Component } from "react";
import FooterComponent from "../../common/FooterComponent";
import LeftPaneMenuComponent from "../../common/LeftPaneMenuComponent";
import NavbarComponent from "../../common/NavbarComponent";
import CourseDetailBreadcrumb from "./CourseDetailBreadcrumb";
import CourseDetailCardContent from "./CourseDetailCardContent";
import CourseDetailCardHeader from "./CourseDetailCardHeader";
import CourseDetailsRightSideBar from "./CourseDetailsRightSideBar";
import {fetchCourseDetail} from "../../../reduxUtils/actions/courseAction"
import { connect } from 'react-redux';

export class CourseDetails extends Component {
  componentDidMount(){
    this.props.fetchCourseDetail("5f7c01e5fa304b059c343779");
  }
  render() {
    return (
      <div>
        <NavbarComponent auth={this.props.auth} />
        <LeftPaneMenuComponent />

        {/*<<!-- BEGIN: Content-->*/}
        <div className="app-content content">
          <div className="content-overlay"></div>
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-12 mb-2">
                <h3 className="content-header-title mb-0">Course Summary</h3>
                <div className="row breadcrumbs-top">
                  <CourseDetailBreadcrumb/>
                </div>
              </div>
            </div>
            <div className="content-detached content-left">
              <div className="content-body">
                <div className="row panel-full-height">
                  <div className="col-sm-12 match-height">
                    {/*<!-- Kick start -->*/}
                    <div id="kick-start" className="card ">
                      <CourseDetailCardHeader courseHeader={this.props.courseDetail.name}/>
                      <CourseDetailCardContent coursecontent={this.props.courseDetail.description}/>
                    </div>
                    {/*<!--/ Kick start -->*/}
                  </div>
                </div>
              </div>
            </div>
            <CourseDetailsRightSideBar/>
          </div>
        </div>
        {/*<!-- END: Content-->*/}

        <div className="sidenav-overlay"></div>
        <div className="drag-target"></div>

        {/*<!-- BEGIN: Footer-->*/}
       <FooterComponent/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courseDetail: state.courseData.courseDetail,
});

export default connect(mapStateToProps, { fetchCourseDetail })(CourseDetails);
