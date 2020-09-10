import React from "react";

var view = function () {
  return (
    <section className="section">
      <h4 class="subtitle is-4">
        Get started by entering a playlist URL bellow
      </h4>
      <div class="control">
        <input
          onChange={(e) => this.props.handlePlaylistInput(e)}
          onKeyDown={(e) => this.props.handleKeyDown(e)}
          value={this.props.playlistId}
          class="input is-hovered input is-large"
          type="text"
          placeholder="https://open.spotify.com/playlist/37i9dQZF1DWY7IeIP1cdjF?_ga=2.124864777.2021096444.1599550730-1971544164.1584218992"
        />
      </div>
    </section>
  );
};

export default view;
