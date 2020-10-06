import React, { Component } from 'react'
import{Link} from 'react-router-dom';

export class CourseDetailsRightSideBarContent extends Component {
    render() {
        return (
            <div className="card-body">
                    {/*<!-- Card sample -->*/}
                    <div className="text-center">
                      <a href="#" className="btn btn-success btn-block">
                        Publish
                      </a>
                    </div>
                    <hr />
                    <div className="text-center">
                      <a href="./invite-team-member course.html" className="btn btn-success btn-block">
                        Invite Users
                      </a>
                    </div>
                    <hr />
                    <div className="text-center">
                      
                      <Link to={{
                        pathname:"/section/create",
                        state:{courseId:"course_id_placeholder"}
                      }} className="btn btn-success btn-block">
                        Edit Course
                      </Link>
                    </div>
                    <hr />
                    <div className="text-center">
                      <a href="#" className="btn btn-success btn-block">
                        Preview
                      </a>
                    </div>
                    {/*<!-- /Card sample -->*/}
                    <hr />
                    {/*<!-- Striped Progress sample -->*/}
                    <div className="category-title pb-1">
                      <h6>Completion Percent</h6>
                    </div>
                    <div>
                      <div className="progress progress-sm mt-1 mb-0">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          60%
                        </div>
                      </div>
                    </div>
                    {/*<!-- /Striped Progress sample -->*/}
                    <hr />

                    <hr />
                  </div>
        )
    }
}

export default CourseDetailsRightSideBarContent
