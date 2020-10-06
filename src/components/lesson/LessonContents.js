import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export class LessonContents extends Component {
  render() {
    return (
      <div className="col-7 panel-full-height p-0 bg-white">
        <div id="editor-container" className="container-fluid mt-1">
          <form className="form form-horizontal">
            <div className="form-body">
              <div id="button-container">
                <button type="button" className="btn btn-outline-dark mr-1 font-weight-bold">
                  Save & Exit
                </button>
                <button type="submit" className="btn btn-outline-dark mr-1 font-weight-bold">
                  Save
                </button>

                <a href="./add-question-for-lesson.html" className="btn btn-outline-warning mr-1 font-weight-bold">
                  Questions
                </a>
              </div>
              <div>
                <h4 className="my-1"> Lesson 1</h4>
                <div className="row">
                  <div className="col-md-12 ">
                    <CKEditor
                      editor={ClassicEditor}
                      data=""
                      name="courseDecription"
                      value=""
                      onInit={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const htmlData = editor.getData();
                        console.log(htmlData);
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

export default LessonContents;
