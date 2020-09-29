import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Login extends Component {
  
  state = {
    userName: "",
  };
  handleChange = (event) => {
    this.setState({ userName: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      userName: this.state.userName,
    };
    /*authAxios
      .post(config.LOGIN_URL, user)
      .then((response) => {
        let httpResponse = response.data;
        localStorage.setItem(config.JWT_ACCESS_TOKEN_NAME, httpResponse.accessToken);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });*/
  };

  render() {
    return (
      <div>
        <div className="app-content content">
          <div className="content-overlay"></div>
          <div className="content-wrapper">
            <div className="content-header row"></div>
            <div className="content-body">
              <section className="row flexbox-container">
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <div className="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                    <div className="card border-grey border-lighten-3 px-1 py-1 m-0">
                      <div className="card-header border-0">
                        <div className="card-title text-center">
                          <h4 className="font-weight-bold"> Express Assert</h4>
                        </div>
                        <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                          <span>Easily Using</span>
                        </h6>
                      </div>
                      <div className="card-content">
                        <div className="text-center">
                          <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                            <span className="fa fa-facebook"></span>
                          </a>
                          <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                            <span className="fa fa-twitter"></span>
                          </a>
                          <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-linkedin">
                            <span className="fa fa-linkedin font-medium-4"></span>
                          </a>
                          <a href="#" className="btn btn-social-icon mr-1 mb-1 btn-outline-github">
                            <span className="fa fa-github font-medium-4"></span>
                          </a>
                        </div>
                        <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                          <span>OR Using Account Details</span>
                        </p>
                        <div className="card-body">
                          <form className="form-horizontal" onSubmit={this.handleSubmit} novalidate>
                            <fieldset className="form-group position-relative has-icon-left">
                              <input
                                type="text"
                                className="form-control"
                                id="user-name"
                                placeholder="Your Username"
                                name="user-name"
                                onChange={this.handleChange}
                                required
                              />
                              <div className="form-control-position">
                                <i className="feather icon-user"></i>
                              </div>
                            </fieldset>
                            <fieldset className="form-group position-relative has-icon-left">
                              <input
                                type="password"
                                className="form-control"
                                id="user-password"
                                placeholder="Enter Password"
                                required
                              />
                              <div className="form-control-position">
                                <i className="fa fa-key"></i>
                              </div>
                            </fieldset>
                            <div className="form-group row">
                              <div className="col-sm-6 col-12 text-center text-sm-left pr-0">
                                <fieldset>
                                  <input type="checkbox" id="remember-me" className="chk-remember" />
                                  <label for="remember-me"> Remember Me</label>
                                </fieldset>
                              </div>
                              <div className="col-sm-6 col-12 float-sm-left text-center text-sm-right">
                                <a href="recover-password.html" className="card-link">
                                  Forgot Password?
                                </a>
                              </div>
                            </div>
                            <a href="courses.html">
                              <button onClick={this.props.auth.login} className="btn btn-outline-primary btn-block">
                                <i className="feather icon-unlock"></i> Login
                              </button>
                            </a>
                          </form>
                        </div>
                        <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                          <span>New to Express Assert ?</span>
                        </p>
                        <div className="card-body">
                          <a href="register-with-bg-image.html" className="btn btn-outline-danger btn-block">
                            <i className="feather icon-user"></i> Register
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
