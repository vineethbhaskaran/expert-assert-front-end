import React, { useEffect } from "react";
import QuickLaunchContainer from "./QuickLaunchContainer";
import EnrollmentStatus from "./EnrollmentStatus";
import CourseStatus from "./CourseStatus";
import { storeLoggedInInfo } from "../../reduxUtils/actions/authAction";
import { connect } from "react-redux";
import Navbar from "../common/Navbar";
import LeftPaneMenu from "../common/LeftPaneMenu";
import Footer from "../common/Footer";

function Home(props) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    props.auth.handleAuthentication();
    let isLoggedin = props.auth.isAuthenticated();
    props.storeLoggedInInfo(isLoggedin);
    console.log("use effect is triggered");
  });

  return (
    <div>
      <Navbar auth={props.auth} />
      <LeftPaneMenu />

      {/*<!-- BEGIN: Content-->*/}
      <div className="app-content content">
        {/*<!-- sidebar here -->*/}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h3>Get Started</h3>
              <div id="courses">
                <div className="row mt-2 row-eq-height">
                  <div className="col-sm-6 col-md-6 col-xl-6 py-1 bg-white">
                    {/*<!-- Create,Invite,attend course cards-->*/}
                    <QuickLaunchContainer />
                    {/*<!--End- Create,Invite,attend course cards-->*/}
                    {/*<!-- Enrollment status-->*/}
                    <EnrollmentStatus />
                    {/*<!--End of: Enrollment status-->*/}
                  </div>

                  {/*<!-- Right Panel: Course usage statistics-->*/}
                  <CourseStatus />
                  {/*<!--End Of: Right Panel: Course usage statistics-->*/}
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
      <Footer />
    </div>
  );
}

export default connect(null, { storeLoggedInInfo })(Home);
