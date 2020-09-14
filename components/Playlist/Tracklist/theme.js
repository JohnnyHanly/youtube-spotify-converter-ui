import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiListSubheader: {
      sticky: {
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
      circle: {
        width: "70px",
        height: "70px",
        marginRight:"1.5rem"
      },
    },
  },
});

export default theme;
