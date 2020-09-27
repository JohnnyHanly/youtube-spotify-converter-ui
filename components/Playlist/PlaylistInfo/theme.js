import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
const theme = createMuiTheme({
    overrides: {
        MuiLinearProgress: {
          barColorSecondary: {
            backgroundColor:"#00cc00"
          },
          colorSecondary:{
              backgroundColor:"#99ff99"
          }
        }
}});
  
  export default theme;
  