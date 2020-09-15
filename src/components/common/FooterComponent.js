import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <div>
        {/* <!-- BEGIN: Footer--> */}
        <footer className="footer fixed-bottom footer-light navbar-border">
          <p className="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
            <span className="float-md-left d-block d-md-inline-block">
              Copyright &copy; 2020{" "}
              <a
                className="text-bold-800 grey darken-2"
                href="https://express-assert"
                target="_blank"
              >
                Express Assert{" "}
              </a>
            </span>
            <span className="float-md-right d-none d-lg-block">
              Hand-crafted & Made with <i className="feather icon-heart pink"></i>
            </span>
          </p>
        </footer>
        {/* <!-- END: Footer--></div> */}
      </div>
    );
  }
}

export default FooterComponent;
