import React from "react";
import logo from "../../assets/png/icgc_logo.png";

function Navbar() {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll navbar-logo" href="#page-top">
            <img src={logo} alt="ICGC LOGO" />
            JOY TEMPLE
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#meeting-days" className="page-scroll">
                Meeting Days
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#values" className="page-scroll">
                Values
              </a>
            </li>
            <li>
              <a href="#gallery" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#statement-of-faith" className="page-scroll">
                Faith Statement
              </a>
            </li>
            <li>
              <a href="#leadership" className="page-scroll">
                Leadership
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
