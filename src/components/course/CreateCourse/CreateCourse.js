import React, { Component } from "react";
import NavbarComponent from "../../common/NavbarComponent";
import LeftPaneMenuComponent from "../../common/LeftPaneMenuComponent";
import FooterComponent from "../../common/FooterComponent";
import CreateCourseBreadcrumb from "./CreateCourseBreadcrumb";
import CreateCourseForm from "./CreateCourseForm";
export class CreateCourse extends Component {
  render() {
    return (
      <div>
        <NavbarComponent auth={this.props.auth} />
        <LeftPaneMenuComponent />
        {/* <!-- BEGIN: Content-->*/}
        <div className="app-content content">
          <div className="content-overlay"></div>
          <div className="content-wrapper">
            <div className=" container-fluid">
              <div className="content-header row">
                <div className="content-header-left col-md-6 col-12 mb-2">
                  <h3 className="content-header-title mb-0">Create Course</h3>
                  <CreateCourseBreadcrumb/>
                </div>
              </div>
            </div>

            <div className="content-detached content-left">
              <div className="content-body container-fluid">
                <div className="row">
                  <div className="col-sm-12 match-height">
                    {/*<!--/ Kick start -->*/}
                    <div id="kick-start" className="card ">
                      <div className="card-header">
                        <h4 className="card-title">Create Course</h4>
                        <a className="heading-elements-toggle">
                          <i className="fa fa-ellipsis-v font-medium-3"></i>
                        </a>
                      </div>
                      <div className="card-content collpase show">
                        <div className="card-body">
                          <div className="card-text">
                            <p></p>
                          </div>
                          <CreateCourseForm/>
                        </div>
                      </div>
                    </div>

                    {/*<!--/ Kick start -->*/}
                  </div>
                </div>
              </div>
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

export default CreateCourse;
