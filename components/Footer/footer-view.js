import React from "react";
import styles from "./footer.module.css"
var view = function () {
  return (
    <footer className={styles.footer}>
      <div class="content has-text-centered">
        <p>
          <strong style={{color:'white'}}>Spotify Youtube Converter</strong> by{" "}
          <a href="https://github.com/JohnnyHanly">Johnny Hanly</a>. 
          work in progress obv
        </p>
      </div>
    </footer>
  );
};

export default view;
