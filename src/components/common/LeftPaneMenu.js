import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function LeftPaneMenu() {
  useEffect(() => {
    /* global $ */
    setTimeout(() => {
      if (!$(".main-menu-content").hasClass("ps")) {
        $.app.menu.changeMenu();
        $.app.menu.init(true);
      }
    }, 0);
  });

  return (
    <div>
      {/* <!-- BEGIN: Main Menu--> */}
      <div className="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
        <div className="main-menu-content">
          <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li className=" nav-item">
              <Link to="/">
                <i className="feather icon-home"></i>
                <span className="menu-title">Home</span>
              </Link>
            </li>
            <li className="active">
              <Link to="/courses">
                <i className="feather icon-book-open"></i>
                <span className="menu-title">Courses</span>
              </Link>
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
