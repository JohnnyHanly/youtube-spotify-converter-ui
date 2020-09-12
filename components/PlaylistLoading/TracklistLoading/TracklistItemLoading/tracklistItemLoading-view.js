import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import theme from "./theme";
var view = function () {
  const { track } = this.props.track;
  return (
    <MuiThemeProvider theme={theme}>
      <ListItem divider button>
        <ListItemAvatar>
          <Skeleton
            animation="wave"
            style={{ marginRight: "1.5rem" }}
            variant="circle"
            width={70}
            height={70}
          />
        </ListItemAvatar>
        <ListItemText
          primary={<Skeleton animation="wave" variant="text" />}
          secondary={<Skeleton animation="wave" variant="text" />}
        />
      </ListItem>
    </MuiThemeProvider>
  );
};

export default view;
