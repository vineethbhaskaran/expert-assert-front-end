import React, { Component } from "react";

export class LessonModal extends Component {
  constructor(props) {
    super(props);
    this.state = { lessonName: "", lessonSequence: "" };
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose = () => {
    this.setState({ lessonName: "", lessonSequence: "" });
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
    const lessonObject = {
      name: this.state.lessonName,
      lessonSequence: parseInt(this.state.lessonSequence),
      tenantId: "dummy tenant",
    };
    this.props.createLesson(lessonObject);
    this.handleClose();
  }
  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName} id="createLesson" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h5 className="modal-title">Add New Lesson</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Lesson Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Lesson Name"
                    name="lessonName"
                    value={this.state.lessonName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Lesson Number</label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    placeholder="Lesson Sequence"
                    name="lessonSequence"
                    value={this.state.lessonSequence}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                  Save Lesson
                </button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LessonModal;
