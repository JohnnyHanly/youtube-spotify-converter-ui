import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import React, { Component } from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/repos/vercel/next.js");
    const json = await res.json();
    return {
      stars: json.stargazers_count,
    };
  }

  render() {
    return (
      <Layout home>
        <section className="section"> efefef </section>{" "}
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-primary">
                  <p class="title"> Vertical... </p>{" "}
                  <p class="subtitle"> Top tile </p>{" "}
                </article>{" "}
                <article class="tile is-child notification is-warning">
                  <p class="title"> ...tiles </p>{" "}
                  <p class="subtitle"> Bottom tile </p>{" "}
                </article>{" "}
              </div>{" "}
              <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                  <p class="title"> Middle tile </p>{" "}
                  <p class="subtitle"> With an image </p>{" "}
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                  </figure>{" "}
                </article>{" "}
              </div>{" "}
            </div>{" "}
            <div class="tile is-parent">
              <article class="tile is-child notification is-danger">
                <p class="title"> Wide tile </p>{" "}
                <p class="subtitle"> Aligned with the right tile </p>{" "}
                <div class="content"> </div>{" "}
              </article>{" "}
            </div>{" "}
          </div>{" "}
          <div class="tile is-parent">
            <article class="tile is-child notification is-success">
              <div class="content">
                <p class="title"> Tall tile </p>{" "}
                <p class="subtitle"> With even more content </p>{" "}
                <div class="content"> </div>{" "}
              </div>{" "}
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </Layout>
    );
  }
}
export default Home;
