import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiListItem: {
      gutters: {
        paddingTop: "20px",
        paddingBottom: "20px",
      },
    },
    MuiTypography: {
      body1: {
        fontSize: "1.25rem",
      },
      body2: {
        fontSize: "1.1rem",
        color: "#696969",
      },
    },
    MuiAvatar: {
      root: {
        width: "65px",
        height: "65px",
        marginRight:"1.5rem"
      },
    },
  },
});

export default theme;
