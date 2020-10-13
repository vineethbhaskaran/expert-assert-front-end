import React, { Component } from "react";

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { sectionName: "", sectionNumber: "", lessonsCount: "" };
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose = () => {
    this.props.closeModal();
  };

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    let name = this.state.sectionName;
    let seq = this.state.sectionNumber;
    let lessonCount = this.state.lessonsCount;
    const sectionObject = {
      name: this.state.sectionName,
      sectionNumber: this.state.sectionNumber,
      numberOfSessions: this.state.lessonsCount,
    };
    this.props.createSection(sectionObject);
  }

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName} id="createSection" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h5 className="modal-title">Create New Section</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Section Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Section Name"
                    name="sectionName"
                    value={this.state.sectionName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Section Number</label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    placeholder="Section Number"
                    name="sectionNumber"
                    value={this.state.sectionNumber}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Number of Lessons</label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    placeholder="Number of Lessons"
                    name="lessonsCount"
                    value={this.state.lessonsCount}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                  Save Section
                </button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClose}>
                  Cancel2
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
