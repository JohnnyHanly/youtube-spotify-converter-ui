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
import theme from "./theme";
var view = function () {
  return (
    <div>
      <PlaylistInfo playlistInfo={this.props.playlistInfo} />
      <Tracklist></Tracklist>
    </div>
  );
};

export default view;
