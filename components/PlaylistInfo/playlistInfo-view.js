import React from "react";
import styles from "./playlistInfo.module.css";
import { TextField, Typography, Box } from "@material-ui/core";

var view = function () {
  const playlistInfo = this.props.playlistInfo;

  return (
    <Box>
      <Typography>{playlistInfo.ownerName}</Typography>
      <Typography>{playlistInfo.followers}</Typography>
      <Typography>{playlistInfo.trackNum}</Typography>
      <Typography>{playlistInfo.name}</Typography>

    </Box>
  );
};

export default view;
