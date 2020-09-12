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
import theme from "./theme";
var view = function () {
  const playlistInfo = this.props.playlistInfo;
  console.log(playlistInfo);
  return (
    <MuiThemeProvider theme={theme}>
      <Paper  elevation={3}>
        <Grid justify="center" alignItems="center" container spacing={4}>
          <Grid item xs={3}>
            <Avatar variant="square" src={playlistInfo.images.url} />
          </Grid>
          <Grid item xs={6} justify="flex-start" container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h2">
                  {playlistInfo.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  By {playlistInfo.ownerName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {playlistInfo.trackNum} Tracks * {playlistInfo.followers}{" "}
                  Followers
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </MuiThemeProvider>
  );
};

export default view;
