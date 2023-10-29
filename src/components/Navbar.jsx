// Navbar.jsx
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <p className="logo">LEARNIFY</p>
      <nav className="nav-links">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
      </nav>
      <Link to="/login" className="login-button-link">
        <button className="login-button">LOG IN</button>
      </Link>
    </div>
  );
}

export default Navbar;
