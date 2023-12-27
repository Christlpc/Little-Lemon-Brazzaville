import React from "react";
import logo from "./Images/Logo.svg";

function nav() {
  return (
    <nav>
      <img src={logo} alt="logo" id="logo"></img>
      <ul className="tete">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#aboutus">About</a>
        </li>
        <li>
          <a href="login">Menu</a>
        </li>
        <li>
          <a href="login">Reservations </a>
        </li>
        <li>
          <a href="/login">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default nav;
