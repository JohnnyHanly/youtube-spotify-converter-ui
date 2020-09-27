import React from "react";
import styles from "./playlistInfo.module.css";
import Skeleton from "@material-ui/lab/Skeleton";
import Fade from "@material-ui/core/Fade";
import {
  TextField,
  Typography,
  Box,
  Grid,
  Avatar,
  Paper,
  LinearProgress,
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
var view = function () {
  const playlistInfo = this.props.playlistInfo;
  return (
    <MuiThemeProvider theme={theme}>
      <Paper elevation={1}>
        <Grid
          className={styles.playListInfoContainer}
          justify="center"
          alignItems="center"
          container
        >
          <Grid container alignItems="center" justify="center" xs={8}>
            <Grid item xs={3}>
              <Avatar
                style={{ height: "225px", width: "225px" }}
                variant="square"
                src={playlistInfo.images.url}
              />
            </Grid>
            <Grid item xs={6} justify="flex-start" container>
              <Grid  item xs container direction="column" spacing={2}>
                <Grid  item xs>
                  <Typography  gutterBottom variant="h2">
                    {playlistInfo.name}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    By {playlistInfo.ownerName}
                  </Typography>
                  <Typography variant="body2" >
                    {playlistInfo.trackNum} Tracks * {playlistInfo.followers}{" "}
                    Followers
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={4}>
            <Typography>Progress bar goes here</Typography>
          </Grid>
        </Grid>
      </Paper>
    </MuiThemeProvider>
  );
};

export default view;
