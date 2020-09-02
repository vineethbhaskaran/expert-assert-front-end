import React, { Component } from "react";

class LeftPaneMenuComponent extends Component {
  render() {
    return (
      <div>
        {/* <!-- BEGIN: Main Menu--> */}
        <div className="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
          <div className="main-menu-content">
            <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
              <li className=" nav-item">
                <a href="app-email.html">
                  <i className="feather icon-home"></i>
                  <span className="menu-title">Home</span>
                </a>
              </li>
              <li className="active">
                <a href="app-chat.html">
                  <i className="feather icon-book-open"></i>
                  <span className="menu-title">Courses</span>
                </a>
              </li>
              <li className=" nav-item">
                <a href="app-todo.html">
                  <i className="feather icon-bar-chart-2"></i>
                  <span className="menu-title">Reports</span>
                </a>
              </li>
              <li className=" nav-item">
                <a href="app-kanban.html">
                  <i className="feather icon-users"></i>
                  <span className="menu-title">Team</span>
                </a>
              </li>
              <li className=" nav-item">
                <a href="app-contacts.html">
                  <i className="feather icon-settings"></i>
                  <span className="menu-title">Settings</span>
                </a>
              </li>

              <li className=" nav-item">
                <a href="https://pixinvent.com/stack-bootstrap-admin-template/documentation" target="_blank">
                  <i className="feather icon-folder"></i>
                  <span className="menu-title" data-i18n="Documentation">
                    Documentation
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- END: Main Menu--> */}
      </div>
    );
  }
}

export default LeftPaneMenuComponent;
