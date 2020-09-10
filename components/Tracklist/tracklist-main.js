import React from "react";
import ComponentView from "./tracklist-view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackList: [],
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
