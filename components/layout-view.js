import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Playlist from "./Playlist";
import PlaylistLoading from "./PlaylistLoading";
import Navbar from "./Navbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Snackbar from "@material-ui/core/Snackbar";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import styles from "./layout.module.css";
import { Typography } from "@material-ui/core";
const name = "Your Name";
const vertical = "top";
const horizontal = "right";
export const siteTitle = "Spotify-Youtube Converter";

var view = function () {
  return (
    <div className={styles.container} component="div">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <header className="header">
        <Navbar />
      </header> */}
      <Box className={styles.contentContainer} component="div">
        <Box className={styles.titleContainer}>
          <Typography variant="h1">
            <Typography variant="span" style={{ color: "#1db954" }}>
              Spotify
            </Typography>
            <Typography variant="span" style={{ color: "white" }}>
              -
            </Typography>
            <Typography variant="span" style={{ color: "#e62117" }}>
              Youtube
            </Typography>
            <Typography variant="span" style={{ color: "white" }}>
              {" "}
              Converter
            </Typography>
          </Typography>
          <Typography
            variant="h3"
            style={{ color: "white" }}
            class="subtitle is-3"
          >
            A simple tool to export Spotify Playlists to Youtube Music
          </Typography>
        </Box>
      </Box>
      <Box className={styles.contentContainer1}>
        <Snackbar
          style={{ marginTop: "3rem" }}
          anchorOrigin={{ horizontal, vertical }}
          open={this.state.error.visible}
          autoHideDuration={5000}
          onClose={this.closeErrorAlert.bind(this)}
        >
          <Alert variant="filled" severity="error">
            {this.state.error.errorName}
          </Alert>
        </Snackbar>

        <Searchbar
          handleKeyDown={this.handleKeyDown.bind(this)}
          playlistId={this.state.playlistId}
          handlePlaylistInput={this.handlePlaylistInput.bind(this)}
          invalidUrl={this.state.invalidUrl}
        />

        {this.state.searchStarted ? (
          <div>
            {this.state.searchComplete ? (
              <div id="playList">
                <Playlist
                  confirmConvert={this.state.confirmConvert}
                  beginConversion={this.beginConversion.bind(this)}
                  trackList={this.state.trackList}
                  playlistInfo={this.state.playlistInfo}
                  conversionProgress={this.state.conversionProgress}
                  
                />
              </div>
            ) : (
              <PlaylistLoading />
            )}
          </div>
        ) : null}
        <Backdrop open={this.state.loading} style={{ zIndex: 10 }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
      <Footer />
    </div>
  );
};

export default view;
