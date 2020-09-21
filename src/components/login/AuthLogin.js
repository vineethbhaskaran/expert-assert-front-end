import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export class AuthLogin extends Component {
  state = {
    userName: "",
  };
  LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
      <button className="btn btn-outline-primary btn-block" onClick={() => loginWithRedirect()}>
        <i className="feather icon-unlock"></i> Login
      </button>
    );
  };

  LogoutButton = () => {
    const { logout } = useAuth0();

    return (
      <button
        className="btn btn-outline-warning btn-block"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        <i className="feather icon-lock"></i> Logout
      </button>
    );
  };

  SignupButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
      <button
        className="btn btn-outline-danger btn-block"
        onClick={() =>
          loginWithRedirect({
            screen_hint: "signup",
          })
        }
      >
        <i className="feather icon-user"></i> Register
      </button>
    );
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
                        <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                          <span>Existing User ?</span>
                        </p>
                        <div className="card-body">
                          <this.LoginButton></this.LoginButton>
                        </div>
                        <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                          <span>Logout</span>
                        </p>
                        <div className="card-body">
                          <this.LogoutButton></this.LogoutButton>
                        </div>
                        <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                          <span>New to Express Assert ?</span>
                        </p>
                        <div className="card-body">
                          <this.SignupButton></this.SignupButton>
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

export default withRouter(AuthLogin);
