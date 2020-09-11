import React from "react";
import styles from "./navbar.module.css"
var view = function () {
  return (
    <nav class="navbar is-black"  role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <p>converter</p>
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>

          <a class="navbar-item">Documentation</a>
        </div>
      </div>
    </nav>
  );
};

export default view;
