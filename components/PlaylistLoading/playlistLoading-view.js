import React from "react";
import PlaylistInfoLoading from "./PlaylistInfoLoading";
import Tracklist from "./Tracklist";
import styles from "./playlist.module.css";
import {
  TextField,
  Typography,
  Box,
  Grid,
  Avatar,
  Paper,
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
var view = function () {
  return (
    <Paper elevation={5} className={styles.playlistContainer}>
      <PlaylistInfoLoading  />
    </Paper>
  );
};

export default view;
