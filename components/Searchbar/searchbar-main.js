import React from "react"
import ComponentView from "./seachbar-view"

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
      }
      componentWillReceiveProps

      componentDidMount(){
          console.log(this.props)
      }

    render(){
        return ComponentView.bind(this)();
    }
}
export default Main;