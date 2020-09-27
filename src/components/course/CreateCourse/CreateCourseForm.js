import React, { Component } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import authAxios from "../../../helpers/AuthHelper";
import * as config from "../../../config";

export class CreateCourseForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {courseName: '',courseCode:'',courseDecription:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
   });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    let requestData={
      name:this.state.courseName,
      code:this.state.courseCode,
      description:this.state.courseDecription
    }

    authAxios
    .post(config.GET_ALL_COURSES_URL,requestData)
    .then((response) => {
      let httpResponse = response.data;
      //this.setState({ courses: httpResponse.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }
    render() {

      
        return (
            <div>
                <form className="form form-horizontal" onSubmit={this.handleSubmit}>
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
                                    name="courseName"
                                    value={this.state.courseName} 
                                    onChange={this.handleChange}
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
                                    name="courseCode"
                                    value={this.state.courseCode} 
                                    onChange={this.handleChange}
                                    
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
                                    data="About Course"
                                    name="courseDecription"
                                    value={this.state.courseDecription} 
                                    onInit={ editor => {
                                     
                                         // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const htmlData = editor.getData();
                                        var data = htmlData.replace(/<\/?[^>]+(>|$)/g, "");
                                        this.state.courseDecription=data;
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
                             
                              <button type='submit' className="btn btn-primary">
                              <i className="fa fa-check-square-o"></i> Create Course
                              </button>
                            </div>
                          </form>
            </div>
        )
    }
}

export default CreateCourseForm
