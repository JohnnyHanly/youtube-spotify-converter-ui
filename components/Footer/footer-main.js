import React from "react"
import ComponentView from "./footer-view"

class Main extends React.Component{
   

    render(){
        return ComponentView.bind(this)();
    }
}
export default Main;