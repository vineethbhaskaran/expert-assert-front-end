import React, { Component } from 'react'

export class SectionContainer extends Component {
    render() {
        return (
            <div className="col-2 panel-full-height p-0 bg-grey">
                <a href="#" className="btn btn-outline-primary .btn-block mx-1 my-1 ">
                  Create New Section
                </a>
                <h6 className="px-2 pb-25 pt-25 mb-0 border-bottom font-weight-bold">SECTIONS</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">1. Section 1</li>
                  <li className="list-group-item">2. Section 2</li>
                  <li className="list-group-item active">3. Section 3</li>
                  <li className="list-group-item">4. Section 4</li>
                  <li className="list-group-item">5. Section 5</li>
                </ul>
              </div>
        )
    }
}

export default SectionContainer
