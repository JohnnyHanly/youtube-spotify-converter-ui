import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Tracklist from "./Tracklist";
import Navbar from "./Navbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import styles from "./layout.module.css";
const name = "Your Name";
export const siteTitle = "Spotify-Youtube Converter";

var view = function () {
  return (
      <Box className={styles.container} component="div">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />

          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className="header">
          <Navbar />
        </header>
        <Box className={styles.contentContainer} component="div">
          <Box className={styles.titleContainer}>
            <h1 class="title is-1">
              <span style={{ color: "#1db954" }}>Spotify</span>-
              <span style={{ color: "#e62117" }}>Youtube</span> Converter
            </h1>
            <h3 class="subtitle is-3">
              A simple tool to export Spotify Playlists to Youtube Music
            </h3>
          </Box>

          <Searchbar
            handleKeyDown={this.handleKeyDown.bind(this)}
            playlistId={this.state.playlistId}
            handlePlaylistInput={this.handlePlaylistInput.bind(this)}
            invalidUrl={this.state.invalidUrl}
          />
          <Tracklist trackList={this.state.trackList} />
        </Box>
        <Footer />

      </Box>
  );
};

export default view;
