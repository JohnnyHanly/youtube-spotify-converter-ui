import React from "react";
import TracklistItem from "./TracklistItem";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import tracklist from "../../data/trackList";
import Typography from "@material-ui/core/Typography"
import styles from "./tracklist.module.css";

var view = function () {
  console.log(tracklist);
  return (
    <Box className="div">
      <Typography variant="h4">
        Get started by entering a playlist URL bellow
      </Typography>

        <List  className={styles.trackList} dense={false}>
          <Grid
            container
            direction="row"
            justify="start"
            alignItems="center"
          >
            {tracklist.map((x) => (
              <Grid item  sm={3} >
                <TracklistItem track={x} />
              </Grid>
            ))}
          </Grid>
        </List>
    </Box>
  );
};

export default view;
