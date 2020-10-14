import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { connect } from "react-redux";
import store from "../../reduxUtils/store";
import { setCurrentLesson, updateLesson, fetchLessonByCourseSection } from "../../reduxUtils/actions/lessonAction";

export class LessonContents extends Component {
  constructor(props) {
    super(props);
    this.state = { lessonContents: "" };
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSave(event) {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    const currentLesson = {
      _id: this.props.currentLesson._id,
      contents: this.state.lessonContents,
    };
    store.dispatch(updateLesson(currentLesson));
    store.dispatch(fetchLessonByCourseSection(this.props.currentLesson.courseId, this.props.currentLesson.sectionId));
    store.dispatch(setCurrentLesson(currentLesson));
  }
  render() {
    return (
      <div className="col-7 panel-full-height p-0 bg-white">
        <div id="editor-container" className="container-fluid mt-1">
          <form className="form form-horizontal">
            <div className="form-body">
              <div id="button-container">
                <button type="button" className="btn btn-outline-dark mr-1 font-weight-bold" onClick={this.handleSave}>
                  Save & Exit
                </button>
                <button type="submit" className="btn btn-outline-dark mr-1 font-weight-bold" onClick={this.handleSave}>
                  Save
                </button>

                <button className="btn btn-outline-warning mr-1 font-weight-bold">Questions</button>
              </div>
              <div>
                <h4 className="my-1"> {this.props.currentLesson.name}</h4>
                <div className="row">
                  <div className="col-md-12 ">
                    <CKEditor
                      editor={ClassicEditor}
                      data={this.props.currentLesson.contents}
                      name="lessonContents"
                      value={this.state.lessonContents}
                      onInit={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const htmlData = editor.getData();
                        this.state.lessonContents = htmlData;
                        //console.log(htmlData);
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
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentLesson: state.lessonData.lesson,
});

const actions = { setCurrentLesson, updateLesson, fetchLessonByCourseSection };
export default connect(mapStateToProps, actions)(LessonContents);
