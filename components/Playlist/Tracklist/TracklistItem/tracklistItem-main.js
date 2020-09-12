import React from "react";
import ComponentView from "./tracklistItem-view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackList: [],
    };
  }

  componentDidMount() {
  }

  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
