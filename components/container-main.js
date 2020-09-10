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
      trackList: [],
      invalidUrl: false,
    };
  }

  async sendPlaylistId(playlistId) {
    const res = await fetch(`${config.proxyURL}/playlist/${playlistId}`);
    const trackList = await res.json();
    this.setState({
      trackList: trackList,
    });
  }

  parsePlaylistUrl(playlistUrl) {
    let invalidUrl = true;
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

    this.setState({
      invalidUrl: invalidUrl,
    });
  }
  handleKeyDown(e) {
    console.log(this.props);
    var playlistId = this.state.playlistId;
    if (e.key == "Enter" && playlistId) {
      this.parsePlaylistUrl(playlistId);
    }
    if (e.key == "Backspace") {
      this.setState({
        invalidUrl: false,
      });
    }
  }

  async handlePlaylistInput(e) {
    this.setState({
      playlistId: e.target.value,
    });

    if (e.target.value == "") {
      this.setState({
        invalidUrl: false,
      });
    }
  }
  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
