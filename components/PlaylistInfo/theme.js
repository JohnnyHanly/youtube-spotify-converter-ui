import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
   
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
