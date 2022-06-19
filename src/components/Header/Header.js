import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", setWidth(window.innerWidth));
    };
  });

  return (
    <header>
      <div className="logo-container">
        <h1>CODAGER</h1>
        <p>A Programmer's Client Manager</p>
      </div>

      <div className="add-btn">
        <Link to="/codager-frontend/new-client">
          <h1>{width >= 450 && "New "} &#43;</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
