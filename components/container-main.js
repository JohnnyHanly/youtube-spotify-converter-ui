import React from "react";
import config from "../config";
import ComponentView from "./container-view";
import { stringify } from "querystring";
var Url = require("url-parse");

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistId: "",
    };
  }

  async sendPlaylistId(playlistId) {
    console.log("SEND PLAYLIST", playlistId);

    const res = await fetch(`${config.proxyURL}/playlist/${playlistId}`);
    const json = await res.json();
    console.log(json);
  }

  parsePlaylistUrl(playlistUrl) {
    let validUrl = false;
    console.log("Playlist to Parse", playlistUrl);
    var url = Url(playlistUrl);
    let { host, pathname } = url;
    if (pathname) {
      var path = pathname.split("/").filter((el) => el != "");
      var [pathDest, playlistId] = path;
      if (host === config.host && pathDest == config.playlistPath) {
        validUrl = true;
        console.log("Playlist to find:", playlistId);
        this.sendPlaylistId(playlistId);
      }
    }
  }
  handleKeyDown(e) {
    console.log(this.props);
    var playlistId = this.state.playlistId;
    if (e.key == "Enter" && playlistId) {
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
