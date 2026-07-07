import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import Profile from "../assets/images/Saiteja.dev.png";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      moreOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  toggleMore = () => {
    this.setState((prevState) => ({
      moreOpen: !prevState.moreOpen,
    }));
  };

  closeMenu = () => {
    this.setState({
      menuOpen: false,
      moreOpen: false,
    });
  };

  render() {
    const { menuOpen, moreOpen } = this.state;

    return (
      <header className="navbar">
        <div className="max-container flex justify-between items-center">

          {/* Logo */}

          <NavLink
            to="/"
            className="navbar-logo"
            onClick={this.closeMenu}
          >
            <img
              src={Profile}
              alt="Sai Teja"
              className="navbar-profile"
            />
          </NavLink>

          {/* Mobile Button */}

          <button
            className="navbar-btn"
            onClick={this.toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation */}

          <nav className={menuOpen ? "navbar-nav active" : "navbar-nav"}>

            <NavLink to="/" onClick={this.closeMenu}>
              Home
            </NavLink>

            <NavLink to="/About" onClick={this.closeMenu}>
              About
            </NavLink>

            <NavLink to="/Skills" onClick={this.closeMenu}>
              Skills
            </NavLink>

            <NavLink to="/Projects" onClick={this.closeMenu}>
              Projects
            </NavLink>

            <NavLink to="/Experiences" onClick={this.closeMenu}>
              Experience
            </NavLink>

            {/* Dropdown */}

            <div className={moreOpen ? "dropdown open" : "dropdown"}>

              <button
                className="dropdown-btn"
                onClick={this.toggleMore}
              >
                More
                <FaChevronDown
                  className={moreOpen ? "arrow rotate" : "arrow"}
                />
              </button>

              <div className="dropdown-content">

                <NavLink
                  to="/CertificationsAndAchievements"
                  onClick={this.closeMenu}
                >
                  Certifications & Achievements
                </NavLink>

                {/* <NavLink
                  to="/awards"
                  onClick={this.closeMenu}
                >
                  Awards
                </NavLink> */}

              </div>

            </div>

          </nav>

        </div>
      </header>
    );
  }
}

export default Navbar;