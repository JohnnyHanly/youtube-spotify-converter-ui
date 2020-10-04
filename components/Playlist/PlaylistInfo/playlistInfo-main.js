import React from "react";
import ComponentView from "./playlistInfo-view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  calculateProgress() {
    console.log("PROGRESS");
    const { total, current, completed } = this.props.conversionProgress;

    if (completed) {
      return 100;
    } else {
      return (current / total) * 100;
    }
  }

  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
