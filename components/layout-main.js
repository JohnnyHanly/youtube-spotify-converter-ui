import React, { createRef } from "react";
import config from "../config";
import ComponentView from "./layout-view";
import { stringify } from "querystring";
import { animateScroll } from "react-scroll";
var Url = require("url-parse");

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
    this.state = {
      playlistId: "",
      trackList: [],
      invalidUrl: false,
      error: {
        errorName: "",
        visible: false,
      },
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
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "playList",
    });
  }
  async getPlaylist(playlistId) {
    const res = await fetch(`${config.proxyURL}/playlist/${playlistId}`);
    const playlist = await res.json();
    if (!playlist.errorCode) {
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
      });
    } else {
      console.log(playlist.errorName);

      this.setState({
        error: {
          errorName: playlist.errorName,
          visible: true,
        },
        searchStarted: false,
      });
    }
    this.setState({
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

  closeErrorAlert() {
    this.setState({
      error: {
        errorName: "",
        visible: false,
      },
    });
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
