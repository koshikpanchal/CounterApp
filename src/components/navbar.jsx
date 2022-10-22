import React from "react";

const NavBar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Counters{" "}
        <span className="badge badge-pill badge-secondary">{totalCounter}</span>
      </a>
    </nav>
  );
};

export default NavBar;
