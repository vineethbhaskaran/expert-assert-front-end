import React from "react";
import LogoutButton from "../login/LogoutButton";
import PropTypes from "prop-types";
function Navbar(props) {
  return (
    <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top navbar-semi-dark">
      <div className="navbar-wrapper">
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item mobile-menu d-lg-none mr-auto">
              <a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                <i className="feather icon-menu font-large-1"></i>
              </a>
            </li>
            <li className="nav-item mr-auto">
              <a className="navbar-brand" href="../html/ltr/vertical-collapsed-menu-template/index.html">
                <img className="brand-logo" alt="stack admin logo" src="/app-assets/images/logo/stack-logo-light.png" />
                <h2 className="brand-text">Stack</h2>
              </a>
            </li>
            <li className="nav-item d-none d-lg-block nav-toggle">
              <a className="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
                <i
                  className="toggle-icon feather icon-toggle-right font-medium-3 white"
                  data-ticon="feather.icon-toggle-right"
                ></i>
              </a>
            </li>
            <li className="nav-item d-lg-none">
              <a className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile">
                <i className="fa fa-ellipsis-v"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-container content">
          <div className="collapse navbar-collapse" id="navbar-mobile">
            <ul className="nav navbar-nav mr-auto float-left">
              <li className="dropdown nav-item mega-dropdown d-none d-lg-block">
                <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">
                  Mega
                </a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a className="nav-link nav-link-expand" href="#">
                  <i className="ficon feather icon-maximize"></i>
                </a>
              </li>
              <li className="nav-item nav-search">
                <a className="nav-link nav-link-search" href="#">
                  <i className="ficon feather icon-search"></i>
                </a>
                <div className="search-input">
                  <input
                    className="input"
                    type="text"
                    placeholder="Explore Stack..."
                    tabIndex="0"
                    data-search="template-search"
                  />
                  <div className="search-input-close">
                    <i className="feather icon-x"></i>
                  </div>
                  <ul className="search-list"></ul>
                </div>
              </li>
            </ul>
            <ul className="nav navbar-nav float-right">
              <li className="dropdown dropdown-language nav-item">
                <a
                  className="dropdown-toggle nav-link"
                  id="dropdown-flag"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="flag-icon flag-icon-gb"></i>
                  <span className="selected-language"></span>
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown-flag">
                  <a className="dropdown-item" href="#" data-language="en">
                    <i className="flag-icon flag-icon-us"></i> English
                  </a>
                </div>
              </li>
              <li className="dropdown dropdown-user nav-item">
                <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                  <div className="avatar avatar-online">
                    <img src="/app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" />
                    <i></i>
                  </div>
                  <span className="user-name">John Doe</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="user-profile.html">
                    <i className="feather icon-user"></i> Edit Profile
                  </a>
                  <div className="dropdown-divider"></div>
                  <LogoutButton auth={props.auth} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

//Prop types
Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Navbar;
