import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiAvatar: {
      square: {
        width: "200px",
        height: "200px",
      },
    },
  },
});

export default theme;
