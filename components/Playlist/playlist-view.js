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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Button,
  Link,
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
var view = function () {
  const convertedPlaylist = this.props.convertedPlaylist;

  console.log(this.props)
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Paper className={styles.playlistContainer}>
          <PlaylistInfo
            confirmConvert={this.props.confirmConvert}
            beginConversion={this.props.beginConversion}
            playlistInfo={this.props.playlistInfo}
            conversionProgress={this.props.conversionProgress}
          />
          <Tracklist trackList={this.props.trackList}></Tracklist>
        </Paper>
        <Dialog
          open={this.props.completionModalVisible}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => {
            this.props.handleModal();
          }}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {this.props.playlistInfo.name} has been transfered to Youtube Music
          </DialogTitle>
          <DialogContent dividers>
            <DialogContentText id="alert-dialog-slide-description">
              Spotify Playlist <b>{this.props.playlistInfo.name}</b> has been
              successfuly transfererd to your Youtube Music library.
            </DialogContentText>
            <DialogContentText id="alert-dialog-slide-description">
              {convertedPlaylist.songCount} out of {convertedPlaylist.trackNum}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClose={() => {
                this.props.handleModal();
              }}
              color="primary"
            >
              CLOSE
            </Button>

            <Link
              href={convertedPlaylist.url}
              variant="body2"
            >
              NAVIGATE TO YOUTUBE MUSIC
            </Link>
          </DialogActions>
        </Dialog>
      </MuiThemeProvider>
    </div>
  );
};

export default view;
