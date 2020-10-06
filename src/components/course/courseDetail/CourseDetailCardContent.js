import React, { Component } from 'react'

export class CourseDetailCardContent extends Component {
    render() {
        return (
            <div className="card-content collapse show">
                        <div className="card-body">
                          <div className="card-text">
                            <p>
                            {this.props.coursecontent}
                            </p>
                          </div>
                        </div>
                      </div>
        )
    }
}

export default CourseDetailCardContent
