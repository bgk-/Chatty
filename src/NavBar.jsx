import React, { Component } from "react";

function NavBar({ userCount }) {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        Chatty
        <span className="user-count">{userCount} users online</span>
      </a>
    </nav>
  );
}
export default NavBar;
