import Head from "next/head";
import Layout, { siteTitle } from "../components/layout-main";
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
      <Layout ></Layout>
    );
  }
}
export default Home;
