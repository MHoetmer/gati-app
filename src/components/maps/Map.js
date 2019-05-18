import { Component } from "react";
import ReactMapGL from "react-map-gl";
import React from "react";
import { fromJS } from "immutable";
import DeckGL, { ScatterplotLayer, TextLayer } from "deck.gl";
import { StaticMap } from "react-map-gl";

export const INITIAL_VIEW_STATE = {
  longitude: 4.47917,
  latitude: 51.9225,
  zoom: 11,
  maxZoom: 16,
  pitch: 0,
  bearing: 0
};

// Set your mapbox token here
const MALE_COLOR = [0, 128, 255];
const FEMALE_COLOR = [255, 0, 128];

// Source data CSV
const DATA_URL = [
  [4.47917, 51.9225, 2],
  [4.46817, 51.9225, 1],
  [-73.987752, 40.732017, 1],
  [-73.986887, 40.730105, 2]
];

var MAPBOX_TOKEN =
  "pk.eyJ1IjoibWVsc21hcGJveCIsImEiOiJjamsxY2wxOGgwZXhjM3ZyeXkxazB3ZHdhIn0.yS4ilXYArrM45BUk1my2Vw";

var TOKEN =
  "pk.eyJ1IjoibWVsc21hcGJveCIsImEiOiJjamsxY2wxOGgwZXhjM3ZyeXkxazB3ZHdhIn0.yS4ilXYArrM45BUk1my2Vw";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 500,
        height: 400,
        longitude: 4.47917,
        latitude: 51.9225,
        zoom: 11,
        maxZoom: 16
      }
    };
    this.onChangeViewport.bind(this);
  }

  _renderLayers() {
    const {
      data = DATA_URL,
      radius = 300,
      maleColor = MALE_COLOR,
      femaleColor = FEMALE_COLOR
    } = this.props;

    return [
      new ScatterplotLayer({
        id: "scatter-plot",
        data,
        radiusScale: radius,
        radiusMinPixels: 0.25,
        getPosition: d => [d[0], d[1], 0],
        getFillColor: d => (d[2] === 1 ? maleColor : femaleColor),
        getRadius: 1,
        updateTriggers: {
          getFillColor: [maleColor, femaleColor]
        }
      }),
      new TextLayer({
        data: [{ position: [4.47917, 51.9225], text: "Hello World" }]
      })
    ];
  }

  onChangeViewport = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  render() {
    const { viewState, controller = true, baseMap = true } = this.props;
    const { viewport } = this.state;

    return (
      <DeckGL
        layers={this._renderLayers()}
        mapboxApiAccessToken={TOKEN}
        viewState={viewport}
        onChangeViewport={this.onChangeViewport}
      >
        <StaticMap
          reuseMaps
          mapStyle="mapbox://styles/mapbox/light-v9"
          preventStyleDiffing={true}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </DeckGL>
    );
  }
}
export default Map;
