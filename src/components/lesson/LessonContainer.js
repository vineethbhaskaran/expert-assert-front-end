import React, { Component } from "react";

export class LessonContainer extends Component {
  render() {
    return (
      <div className="col-3 panel-full-height p-0 bg-white">
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action active">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Lesson 1</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Lesson 2</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Lesson 3</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>
          </a>
        </div>
      </div>
    );
  }
}

export default LessonContainer;
