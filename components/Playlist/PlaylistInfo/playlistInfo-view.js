import React from "react";
import styles from "./playlistInfo.module.css";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
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
  Button,
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
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h2">
                    {playlistInfo.name}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    By {playlistInfo.ownerName}
                  </Typography>
                  <Typography variant="body2">
                    {playlistInfo.trackNum} Tracks * {playlistInfo.followers}{" "}
                    Followers
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {this.props.confirmConvert ? (
            <Grid container xs={4}>
              <Box
                style={{ color: "white" }}
                display="flex"
                alignItems="center"
              >
                <Box width="35rem" mr={1}>
                  <LinearProgress
                    color="secondary"
                    
                    variant="determinate"
                    value={this.calculateProgress()}
                  />
                </Box>
                <Box minWidth={35}>
                  <Typography variant="body2">{`${Math.round(
                    this.calculateProgress()
                  )}%`}</Typography>
                </Box>
              </Box>
            </Grid>
          ) : (
            <Grid container xs={4}>
              <Button
                variant="contained"
                size="large"
                onClick={()=> this.props.beginConversion()}
                
                startIcon={<LibraryMusicIcon style={{ fontSize: 30 }} />}
              >
                Send to your Youtube Music Library
              </Button>
            </Grid>
          )}
        </Grid>
      </Paper>
    </MuiThemeProvider>
  );
};

export default view;
