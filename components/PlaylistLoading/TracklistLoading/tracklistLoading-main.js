import React from "react";
import ComponentView from "./tracklistLoading-view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trackList: [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20] };
  }

  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
