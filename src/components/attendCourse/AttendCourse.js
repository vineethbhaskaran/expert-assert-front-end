import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FooterComponent from "../common/FooterComponent";
import LeftPaneMenuComponent from "../common/LeftPaneMenuComponent";
import NavbarComponent from "../common/NavbarComponent";

export class AttendCourse extends Component {
  render() {
    return (
      <div>
        {/*<!-- BEGIN: Header-->*/}
        <NavbarComponent auth={this.props.auth} />
        <LeftPaneMenuComponent />

        <div class="app-content content">
          <div class="content-overlay"></div>
          <div class="content-wrapper">
            <div class="content-header row">
              <div class="content-header-left col-md-6 col-12 mb-2">
                <h3 class="content-header-title mb-0">Section 1 (Course: Course 1)</h3>
              </div>
            </div>
            <div class="content-detached content-left">
              <div class="content-body">
                <div class="row panel-full-height">
                  <div class="col-sm-12 match-height">
                    {/*<!-- Kick start -->*/}

                    <div id=" kick-start" class="card ">
                      <div class="card-header">
                        <h4 class="card-title">Lesson 1</h4>
                        <a class="heading-elements-toggle">
                          <i class="fa fa-ellipsis-v font-medium-3"></i>
                        </a>
                      </div>
                      <div class="card-content collapse show">
                        <div class="card-body">
                          <div class="card-text">
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
                        <div class="row d-flex my-1">
                          <div class="col-3 d-flex justify-content-center">
                            <button class="btn btn-outline-secondary">&lt;&lt;Previous</button>
                          </div>
                          <div class="col-6"></div>
                          <div class="col-3 d-flex justify-content-center">
                            <button class="btn btn-outline-secondary">&nbsp;&nbsp;&nbsp;&nbsp; Next &gt;&gt;</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sidebar-detached sidebar-right sidebar-sticky">
              <div class="sidebar">
                <div class="sidebar-content card d-none d-lg-block ">
                  <div class="card-header">
                    <div class="text-center border-bottom">
                      <h5 class="font-weight-bold">Notes</h5>
                    </div>
                  </div>
                  <div class="card-body">
                    {/*<!-- Card sample -->*/}
                    <div class="text-center">
                      <button class="btn btn-outline-secondary btn-block">Save Notes</button>
                    </div>
                  </div>
                  <div class="text-center">
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
        <div class="sidenav-overlay"></div>
        <div class="drag-target"></div>
        {/*<!-- BEGIN: Footer-->*/}

        <FooterComponent />
      </div>
    );
  }
}

export default AttendCourse;
