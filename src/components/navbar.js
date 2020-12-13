import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logoOnelink from "../logoOnelink.svg";
function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <Link to="/">
          <img src={logoOnelink} alt="" />
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
export default Navbar;
