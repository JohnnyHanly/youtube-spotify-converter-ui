import React from "react";
import ComponentView from "./playlist-view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completionModalVisible: false,
    };
  }

  componentDidMount() {}

  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
