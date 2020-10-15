import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FooterComponent from "../common/FooterComponent";
import LeftPaneMenuComponent from "../common/LeftPaneMenuComponent";
import NavbarComponent from "../common/NavbarComponent";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSectionsByCourse } from "../../reduxUtils/actions/sectionAction";
import { fetchLessonByCourseSection } from "../../reduxUtils/actions/lessonAction";
import { attendCourseAction } from "../../reduxUtils/actions/attendCourseAction";

export class AttendCourse extends Component {
  componentDidMount() {
    //console.log(this.props.location.state.courseId);
    this.props.attendCourseAction(this.props.location.state.courseId);
  }
  render() {
    return (
      <div>
        {/*<!-- BEGIN: Header-->*/}
        <NavbarComponent auth={this.props.auth} />
        <LeftPaneMenuComponent />

        <div className="app-content content">
          <div className="content-overlay"></div>
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-12 mb-2">
                <h3 className="content-header-title mb-0">
                  {this.props.courseCurrentPage.sectionName} (Course: {this.props.courseCurrentPage.courseName})
                </h3>
              </div>
            </div>
            <div className="content-detached content-left">
              <div className="content-body">
                <div className="row panel-full-height">
                  <div className="col-sm-12 match-height">
                    {/*<!-- Kick start -->*/}

                    <div id=" kick-start" className="card ">
                      <div className="card-header">
                        <h4 className="card-title">{this.props.courseCurrentPage.lessonName}</h4>
                        <a className="heading-elements-toggle">
                          <i className="fa fa-ellipsis-v font-medium-3"></i>
                        </a>
                      </div>
                      <div className="card-content collapse show">
                        <div className="card-body">
                          <div
                            className="card-text"
                            dangerouslySetInnerHTML={{ __html: this.props.courseCurrentPage.lessonContents }}
                          ></div>
                        </div>
                        <div className="row d-flex my-1">
                          <div className="col-3 d-flex justify-content-center">
                            <button className="btn btn-outline-secondary">&lt;&lt;Previous</button>
                          </div>
                          <div className="col-6"></div>
                          <div className="col-3 d-flex justify-content-center">
                            <button className="btn btn-outline-secondary">
                              &nbsp;&nbsp;&nbsp;&nbsp; Next &gt;&gt;
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-detached sidebar-right sidebar-sticky">
              <div className="sidebar">
                <div className="sidebar-content card d-none d-lg-block ">
                  <div className="card-header">
                    <div className="text-center border-bottom">
                      <h5 className="font-weight-bold">Notes</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    {/*<!-- Card sample -->*/}
                    <div className="text-center">
                      <button className="btn btn-outline-secondary btn-block">Save Notes</button>
                    </div>
                  </div>
                  <div className="text-center">
                    <CKEditor
                      editor={ClassicEditor}
                      data=""
                      name="notes"
                      value=""
                      onInit={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const htmlData = editor.getData();
                        console.log(htmlData);
                      }}
                      onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- END: Content-->*/}
        <div className="sidenav-overlay"></div>
        <div className="drag-target"></div>
        {/*<!-- BEGIN: Footer-->*/}

        <FooterComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sections: state.sectionData.sections,
  courseCurrentPage: state.courseProgress.attendCurrentCoursePage,
});
const actions = { fetchSectionsByCourse, fetchLessonByCourseSection, attendCourseAction };

export default connect(mapStateToProps, actions)(withRouter(AttendCourse));
