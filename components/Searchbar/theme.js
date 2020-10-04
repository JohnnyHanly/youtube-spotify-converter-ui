import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
         
          input:{
           fontSize:'27px',
           background:'white'
          }
          
        },
        MuiFormLabel:{
          root:{
            fontSize:'20px'
          }
        }
      
}});
  
  export default theme;
  