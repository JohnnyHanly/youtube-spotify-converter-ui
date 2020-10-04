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
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
var view = function () {
  return (
    <div>
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
        open={this.state.false}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          this.setState({
            completionModalVisible: false,
          });
        }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClose={() => {
              this.setState({
                completionModalVisible: false,
              });
            }}
            color="primary"
          >
            Disagree
          </Button>
          <Button
            onClose={() => {
              this.setState({
                completionModalVisible: false,
              });
            }}
            color="primary"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default view;
