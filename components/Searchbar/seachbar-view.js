import React from "react";
import styles from "./searchbar.module.css";
import { TextField, Typography, Box } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

var view = function () {
  return (
    <MuiThemeProvider theme={theme}>

    <Box component="div" className={styles.searchBarContainer}>
      <TextField
        id="searchBar"
        error={this.props.invalidUrl}
        variant="filled"
        className={styles.searchBar}
        onChange={(e) => this.props.handlePlaylistInput(e)}
        onKeyDown={(e) => this.props.handleKeyDown(e)}
        value={this.props.playlistId}
        type="text"
        placeholder="https://open.spotify.com/playlist/37i9dQZF1DWY7IeIP1cdjF"
        label={
          !this.props.invalidUrl
            ? "Enter a Spotify playlist URL"
            : "Must be a valid Spotify URL"
        }
      />
    </Box>
    </MuiThemeProvider>
  );
};

export default view;
