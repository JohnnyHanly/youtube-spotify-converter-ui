import React from "react"
import ComponentView from "./playlistInfoLoading-view"

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount(){
      }

    render(){
        return ComponentView.bind(this)();
    }
}
export default Main;