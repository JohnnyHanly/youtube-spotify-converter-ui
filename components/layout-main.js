import React, { createRef } from "react";
import config from "../config";
import ComponentView from "./layout-view";
import { stringify } from "querystring";
import { animateScroll } from "react-scroll";
import { CodeSharp } from "@material-ui/icons";
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
        playlistId: "",
        playlistUrl:"",
        ownerUrl:""
      },
      conversionProgress: {
        current: 0,
        state: "",
        status: "",
        total: 0,
        completed: false,
      },
      searchComplete: false,
      searchStarted: false,
      confirmConvert: false,
      completionModalVisible: false,
      convertedPlaylist: {
        id: null,
        owner: "",
        name: "",
        trackNum: 0,
        url: "",
        task_end_time: "",
        soungCount: 0,
      },
    };
  }

  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "playList",
    });
  }
  async getPlaylist(playlistId) {
    const res = await fetch(`${config.proxyURL}/playlist/${playlistId}`);
    const playlist = await res.json();
    console.log(playlist)
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
          playlistId: playlistId,
          playlistUrl: playlist.playlistUrl,
          ownerUrl : playlist.ownerUrl
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
      loading: false,
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
          loading: true,
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

  async beginConversion() {
    this.setState({
      confirmConvert: true,
    });
    const res = await fetch(
      `${config.apiURL}/playlist/convert/${this.state.playlistInfo.playlistId}`
    );
    const task = await res.json();

    this.getConversionProgress(task);
  }

  async getConversionProgress(task) {
    const res = await fetch(`${config.apiURL}${task.url}`);

    const progress = await res.json();
    if (progress.state != "PENDING" && progress.state != "PROGRESS") {
      if (progress.result) {
        // show result
        console.log("RES", progress);
        this.setState({
          conversionProgress: {
            ...this.state.conversionProgress,
            completed: true,
          },
          convertedPlaylist:{
            id: progress.result.id,
            owner: progress.result.owner,
            name: progress.result.name,
            trackNum: progress.result.trackNum,
            url: progress.result.url,
            task_end_time: progress.result.task_end_time,
            soungCount: progress.result.soungCount,

          },

          completionModalVisible: true,
        });
      } else {
        // something unexpected happened
        console.log("RES", progress.result, progress.state);
      }
    } else {
      // rerun in 2 seconds
      setTimeout(() => {
        this.getConversionProgress(task);
      }, 750);

      console.log(progress);
      this.setState({
        conversionProgress: progress,
      });
    }
  }

  handleModal() {
    this.setState({
      completionModalVisible: !this.state.completionModalVisible,
    });
  }
  handleKeyDown(e) {
    console.log(this.props);
    var playlistId = this.state.playlistId;
    if (e.key == "Enter" && playlistId) {
      this.setState({
        searchComplete: false,
        confirmConvert: false,
      });
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
