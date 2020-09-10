import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

var view = function () {
  return (
    <div>
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
      <div className="container">
        <section className="section">
          <h1 class="title is-1">
            <span style={{ color: "#1db954" }}>Spotify</span>-
            <span style={{ color: "#e62117" }}>Youtube</span> Converter
          </h1>
          <h3 class="subtitle is-3">
            A simple tool to export Spotify Playlists to Youtube Music
          </h3>
        </section>

        <Searchbar
          handleKeyDown={this.handleKeyDown.bind(this)}
          playlistId={this.state.playlistId}
          handlePlaylistInput={this.handlePlaylistInput.bind(this)}
        />
      </div>

      <Footer />
    </div>
  );
};

export default view;
