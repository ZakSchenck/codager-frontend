import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigator.css";

function Navigator() {
  return (
    <section className="navigation-container">
      <NavLink to="/codager-frontend" activeclassname="active">All</NavLink>
      <NavLink to="/codager-frontend/completed" activeclassname="active">Completed</NavLink>
      <NavLink to="/codager-frontend/pending" activeclassname="active">Pending</NavLink>
    </section>
  );
}

export default Navigator;
