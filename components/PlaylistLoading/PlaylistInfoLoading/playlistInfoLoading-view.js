import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  TextField,
  Typography,
  Box,
  Grid,
  Avatar,
  Paper,
  LinearProgress,
} from "@material-ui/core";
var view = function () {
  return (
    <Grid justify="center" alignItems="center" container spacing={4}>
      <Grid container alignItems="center" justify="center" xs={8}>
        <Grid item xs={3}>
          <Skeleton animation="pulse" variant="rect" width={225} height={225} />
        </Grid>
        <Grid item xs={6} justify="flex-start" container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h2">
                <Skeleton variant="text" />
              </Typography>
              <Typography variant="body1" gutterBottom>
                <Skeleton variant="text" />
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <Skeleton variant="text" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={4}>
        <Skeleton variant="rect" width={500} height={30} />
      </Grid>
    </Grid>
  );
};

export default view;
