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
        },
        MuiButton:{
          contained:{
            backgroundColor:'#e62117',
            color:"white",
          },
          containedSizeLarge:{
            padding:"20px"
          },
          label:{
            fontSize:"16.5px"
          }
        }
}});
  
  export default theme;
  