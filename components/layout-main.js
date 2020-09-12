import React from "react";
import config from "../config";
import ComponentView from "./layout-view";
import { stringify } from "querystring";
var Url = require("url-parse");

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistId: "",
      trackList: [],
      invalidUrl: false,
      playlistInfo: {
        trackNum: "",
        ownerName: "",
        followers: "",
        name: "",
        images: {},
      },
      searchComplete: false,
      searchStarted: false,
    };
  }

  async getPlaylist(playlistId) {
    const res = await fetch(`${config.proxyURL}/playlist/${playlistId}`);
    const playlist = await res.json();
    var trackList = playlist.tracks.filter((x) => x.track != null);
    this.setState({
      trackList: trackList,
      playlistInfo: {
        trackNum: playlist.trackNum,
        ownerName: playlist.owner,
        followers: playlist.followers,
        name: playlist.name,
        images: playlist.images[0],
      },
      searchComplete: true,
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
        this.setState({
          searchStarted: true,
        });
        invalidUrl = false;
        console.log("Playlist to find:", playlistId);
        this.getPlaylist(playlistId);
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
