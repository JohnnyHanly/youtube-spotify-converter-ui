import React from "react";
import TracklistItem from ".";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemText from "@material-ui/core/ListItemText";
import styles from "./tracklistItem.module.css";

var view = function () {
  const { track } = this.props.track;
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar className={styles.albumImage} src={track.album.images[1].url} />
      </ListItemAvatar>
      <ListItemText primary={track.name} secondary={track.artists[0].name} />
    </ListItem>
  );
};

export default view;
