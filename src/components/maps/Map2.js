import React, { Component } from "react";
import WhateverMap from "./whatevermap";

class Map2 extends Component {
  state = {
    // Trip along the Ringbahn
    data: [
      {
        coordinates: [52.540875, 13.438545],
        temperature: 20
      },
      {
        coordinates: [52.540875, 13.438545],
        temperature: 20
      },
      {
        coordinates: [52.540875, 13.438545],
        temperature: 20
      },
      {
        coordinates: [52.540875, 13.438545],
        temperature: 20
      }
    ]
  };
  render() {
    return (
      <div className="container">
        <WhateverMap data={this.state.data} />
      </div>
    );
  }
}

export default Map2;
