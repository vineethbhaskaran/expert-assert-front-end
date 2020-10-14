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

export class AttendCourse extends Component {
  componentDidMount() {
    //console.log(this.props.location.state.courseId);
    this.props.fetchSectionsByCourse(this.props.location.state.courseId);
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
                <h3 className="content-header-title mb-0">Section 1 (Course: Course 1)</h3>
              </div>
            </div>
            <div className="content-detached content-left">
              <div className="content-body">
                <div className="row panel-full-height">
                  <div className="col-sm-12 match-height">
                    {/*<!-- Kick start -->*/}

                    <div id=" kick-start" className="card ">
                      <div className="card-header">
                        <h4 className="card-title">Lesson 1</h4>
                        <a className="heading-elements-toggle">
                          <i className="fa fa-ellipsis-v font-medium-3"></i>
                        </a>
                      </div>
                      <div className="card-content collapse show">
                        <div className="card-body">
                          <div className="card-text">
                            <p>
                              Getting start with your project custom requirements using a ready template which is quite
                              difficult and time taking process, Stack Admin provides useful features to kick start your
                              project development with no efforts !
                            </p>
                            <ul>
                              <li>
                                Stack Admin provides you getting start pages with different layouts, use the layout as
                                per your custom requirements and just change the branding, menu & content.
                              </li>
                              <li>
                                It use template engine to generate pages and whole template quickly using node js. You
                                can generate entire template with your selected custom layout, branding & menu. Save
                                your time for doing the common changes for each page (i.e menu, branding and footer) by
                                generating template.
                              </li>
                              <li>
                                Every components in Stack Admin are decoupled, it means use use only components you
                                actually need! Remove unnecessary and extra code easily just by excluding the path to
                                specific SCSS, JS file.
                              </li>
                              <li>
                                It use template engine to generate pages and whole template quickly using node js. You
                                can generate entire template with your selected custom layout, branding & menu. Save
                                your time for doing the common changes for each page (i.e menu, branding and footer) by
                                generating template.
                              </li>
                              <li>
                                Every components in Stack Admin are decoupled, it means use use only components you
                                actually need! Remove unnecessary and extra code easily just by excluding the path to
                                specific SCSS, JS file.
                              </li>
                              <li>
                                It use template engine to generate pages and whole template quickly using node js. You
                                can generate entire template with your selected custom layout, branding & menu. Save
                                your time for doing the common changes for each page (i.e menu, branding and footer) by
                                generating template.
                              </li>
                              <li>
                                Every components in Stack Admin are decoupled, it means use use only components you
                                actually need! Remove unnecessary and extra code easily just by excluding the path to
                                specific SCSS, JS file.
                              </li>
                            </ul>
                          </div>
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
});
const actions = { fetchSectionsByCourse, fetchLessonByCourseSection };

export default connect(mapStateToProps, actions)(withRouter(AttendCourse));
