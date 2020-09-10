import React from "react";
import ComponentView from "./container-view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistId: "",
    };
  }

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/repos/vercel/next.js");
    const json = await res.json();
    return {
      stars: json.stargazers_count,
    };
  }

  async sendPlaylistId(playlistId) {}
  parsePlaylistUrl(playlistUrl) {
    console.log("Playlist to Parse", playlistUrl);
  }
  handleKeyDown(e) {
    var playlistId = this.state.playlistId;
    if (e.key == "Enter" && this.state.playlistId) {
      this.parsePlaylistUrl(playlistId);
    }
  }

  async handlePlaylistInput(e) {
    console.log(e.target.value);
    this.setState({
      playlistId: e.target.value,
    });
  }
  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
