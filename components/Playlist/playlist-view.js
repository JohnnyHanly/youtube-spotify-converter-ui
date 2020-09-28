import React from "react";
import PlaylistInfo from "./PlaylistInfo";
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
    <Paper className={styles.playlistContainer}>
      <PlaylistInfo
        confirmConvert={this.props.confirmConvert}
        beginConversion={this.props.beginConversion}
        playlistInfo={this.props.playlistInfo}
      />
      <Tracklist trackList={this.props.trackList}></Tracklist>
    </Paper>
  );
};

export default view;
