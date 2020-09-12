import React from "react";
import PlaylistInfoLoading from "./PlaylistInfoLoading";
import TracklistLoading from "./TracklistLoading"
import styles from "./playlistLoading.module.css";
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
      <TracklistLoading/>
    </Paper>
  );
};

export default view;
