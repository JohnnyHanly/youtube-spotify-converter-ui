import React from "react";
import TracklistItem from "./TracklistItem";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";

import tracklist from "../../../data/trackList";
import Typography from "@material-ui/core/Typography";
import styles from "./tracklist.module.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme"
var view = function () {
  const trackList = this.props.trackList;
  return (
    <MuiThemeProvider theme={theme}>

    <Box className={styles.trackListContainer}>
      <List className={styles.trackList} dense={false}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >

          {trackList.map((x) => (
            <Grid key={x.track.id} item sm={3}>

                <TracklistItem key={x.track.id} track={x} />
            </Grid>
          ))}
        </Grid>
      </List>
    </Box>
    </MuiThemeProvider>
  );
};

export default view;
