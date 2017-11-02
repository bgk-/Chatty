import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          Chatty
          <span className="user-count">{this.props.userCount} users online</span>
        </a>
      </nav>
    );
  }
}
export default NavBar;
