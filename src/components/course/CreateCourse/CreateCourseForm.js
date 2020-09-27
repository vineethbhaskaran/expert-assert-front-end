import React, { Component } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export class CreateCourseForm extends Component {
  
    render() {

      
        return (
            <div>
                <form className="form form-horizontal">
                            <div className="form-body">
                              <h4 className="form-section">
                                <i className="feather icon-book-open"></i> Course Info
                              </h4>
                              <div className="form-group row">
                                <label className="col-md-3 label-control" for="projectinput1">
                                  Course Name
                                </label>
                                <div className="col-md-9">
                                  <input
                                    type="text"
                                    id="projectinput1"
                                    className="form-control"
                                    placeholder="Course Name"
                                    name="course-name"
                                   
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-md-3 label-control" for="projectinput2">
                                  Course Code
                                </label>
                                <div className="col-md-9">
                                  <input
                                    type="text"
                                    id="projectinput2"
                                    className="form-control"
                                    placeholder="Course Code"
                                    name="course-code"
                                    
                                  />
                                </div>
                              </div>

                              <div className="form-group row">
                                <label className="col-md-3 label-control" for="projectinput9">
                                  Course Description
                                </label>
                                <div className="col-md-9">
                                  

                                 <CKEditor
                                    editor={ ClassicEditor }
                                    data="<p>About Project</p>"
                                    onInit={ editor => {
                                         // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                                </div>
                              </div>
                            </div>

                            <div className="form-actions">
                              <button type="button" className="btn btn-warning mr-1">
                                <i className="feather icon-x"></i> Cancel
                              </button>
                              <a href="./add-lesson-contents.html" className="btn btn-primary">
                                <i className="fa fa-check-square-o"></i> Create Course
                              </a>
                              
                            </div>
                          </form>
            </div>
        )
    }
}

export default CreateCourseForm
