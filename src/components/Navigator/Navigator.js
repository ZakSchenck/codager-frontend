import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigator.css";

function Navigator() {
  return (
    <section className="navigation-container">
      <NavLink to="/" activeclassname="active">All</NavLink>
      <NavLink to="/completed" activeclassname="active">Completed</NavLink>
      <NavLink to="/pending" activeclassname="active">Pending</NavLink>
    </section>
  );
}

export default Navigator;
