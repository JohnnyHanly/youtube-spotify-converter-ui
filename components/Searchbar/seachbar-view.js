import React from "react";
import styles from "./searchbar.module.css";
import { TextField, Typography } from "@material-ui/core";

var view = function () {
  return (
    <section className="section">
      <TextField
        error={this.props.invalidUrl}
        className={styles.searchBar}
        onChange={(e) => this.props.handlePlaylistInput(e)}
        onKeyDown={(e) => this.props.handleKeyDown(e)}
        value={this.props.playlistId}
        type="text"
        placeholder="https://open.spotify.com/playlist/37i9dQZF1DWY7IeIP1cdjF"
        id="outlined-basic"
        label={
          !this.props.invalidUrl
            ? "Enter a Spotify playlist URL"
            : "Must be a valid Spotify URL ie: https://open.spotify.com/playlist/37i9dQZF1DWY7IeIP1cdjF "
        }
        variant="outlined"
      />
    </section>
  );
};

export default view;
