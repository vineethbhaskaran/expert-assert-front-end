import React, { Component } from "react";
import CourseStatusLeftPanel from "./CourseStatusLeftPanel";
import CourseCards from "./CourseCards";
import * as config from "../../config";
import authAxios from "../../helpers/AuthHelper"


class CourseContent extends Component {
  state = {
    courses: [],
  };
 
  componentDidMount() {
    authAxios
      .get(config.GET_ALL_COURSES_URL)
      .then((response) => {
        let httpResponse = response.data;
        this.setState({ courses: httpResponse.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app-content content">
        {/* <!-- sidebar here --> */}
        <div className="container-fluid">
          <div className="row">
            {/* <!-- panel 1 start --> */}
            <CourseStatusLeftPanel />
            <div className="col-10 panel-full-height">
              <div id="courses">
                <div className="row match-height mt-2">
                  <CourseCards courses={this.state.courses} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseContent;
