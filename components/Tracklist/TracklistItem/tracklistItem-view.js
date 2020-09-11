import React from "react";
import TracklistItem from ".";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme"
var view = function () {
  const { track } = this.props.track;
  return (
    <MuiThemeProvider theme={theme}>
      <ListItem divider button>
        <ListItemAvatar>
          <Avatar
            src={track.album.images[1].url}
          />
        </ListItemAvatar>
        <ListItemText primary={track.name} secondary={track.artists[0].name} />
      </ListItem>
    </MuiThemeProvider>
  );
};

export default view;
