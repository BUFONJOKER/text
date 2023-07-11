import React from "react";
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";


export default function Navbar(props) {



  return (
    <>
      <nav
        className={`sticky-top navbar navbar-expand-lg bg-${props.navBarColor} text-emphasis-secondary `}
      >
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.text_color}`} to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className={`nav-link active text-${props.text_color}`} aria-current="page" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to = "/about" className={`nav-link text-${props.text_color}`}>
                  {props.aboutText}
                </Link>
              </li>
             
            </ul>
            <div className="form-check form-switch m-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.switchButtonClicked}
              />
              <label
                className={`form-check-label text-${props.text_color}`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.modeText}
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TextUtils",
  aboutText: "About",
};