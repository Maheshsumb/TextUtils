import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="\">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="\">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="\">
              About
            </a>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
      </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault" onClick={props.toggleMode}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Dark mode
        </label>
      </div>
    </nav>
  );
}
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};
NavBar.defaultProps = {
  title: "Title here",
};
