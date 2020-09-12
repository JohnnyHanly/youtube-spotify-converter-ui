import React from "react";
import TracklistItemLoading from "./TracklistItemLoading";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "./tracklistLoading.module.css";

var view = function () {
  return (
    <Box className="div">
      <List className={styles.trackList} dense={false}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {this.state.trackList.map((x) => (
            <Grid key={x} item sm={3}>
              <TracklistItemLoading key={x} track={x} />
            </Grid>
          ))}
        </Grid>
      </List>
    </Box>
  );
};

export default view;
