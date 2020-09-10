import React from "react";
import TracklistItem from "./TracklistItem";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import tracklist from "../../data/trackList";

var view = function () {
  console.log(tracklist);
  return (
    <Box className="div">
      <h4 class="subtitle is-4">
        Get started by entering a playlist URL bellow
      </h4>

      <List dense={false}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {tracklist.map((x) => (
            <Grid item item md={5} spacing={1}>
              <TracklistItem track={x} />
            </Grid>
          ))}
        </Grid>
      </List>
    </Box>
  );
};

export default view;
