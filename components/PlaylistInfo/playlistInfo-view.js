import React from "react";
import styles from "./playlistInfo.module.css";
import {
  TextField,
  Typography,
  Box,
  Grid,
  Avatar,
  Paper,
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme"
var view = function () {
  const playlistInfo = this.props.playlistInfo;
  console.log(playlistInfo)
  return (
    <Paper>
      <Grid justify="center" alignItems="center" container spacing={4}>
        <Grid item xs={3}>
          <Avatar src={playlistInfo.images.url} >H</Avatar>
        </Grid>
        <Grid item xs={6} justify="flex-start"  container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ID: 1030114
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default view;
