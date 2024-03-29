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
                      </div>
                      <div className="card-content">
                        <div className="card-body">
                          <form className="form-horizontal" onSubmit={this.handleSubmit} novalidate>
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
