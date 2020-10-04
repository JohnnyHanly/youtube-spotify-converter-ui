import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
const theme = createMuiTheme({
    overrides: {
        MuiDialogTitle: {
         
          root:{
           backgroundColor:'#e62117',
           color:'white'
          }
          
        },
      
}});
  
  export default theme;
  