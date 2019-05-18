import React, { Component } from "react";
import PropTypes from "prop-types";
import autobind from "react-autobind";
import { InteractiveMap } from "react-map-gl";
import DeckGL, { ArcLayer } from "deck.gl";
import Immutable from "immutable";

import ScatterplotOverlay from "./scatterlay-overlay";

// San Francisco
import SF_FEATURE from "./feature-example-sf.json";
import CITIES from "./cities.json";
const location = CITIES[0];
var TOKEN =
  "pk.eyJ1IjoibWVsc21hcGJveCIsImEiOiJjamsxY2wxOGgwZXhjM3ZyeXkxazB3ZHdhIn0.yS4ilXYArrM45BUk1my2Vw";

// Example data.
const locations = Immutable.fromJS(
  new Array(4000)
    .fill(0)
    .map(() => [
      location.longitude + Math.random() * 0.01,
      location.latitude + Math.random() * 0.01
    ])
);

function buildStyle({ fill = "red", stroke = "blue" }) {
  return Immutable.fromJS({
    version: 8,
    name: "Example raster tile source",
    sources: {
      "my-geojson-polygon-source": {
        type: "geojson",
        data: SF_FEATURE
      }
    },
    layers: [
      {
        id: "geojson-polygon-fill",
        source: "my-geojson-polygon-source",
        type: "fill",
        paint: { "fill-color": fill, "fill-opacity": 0.4 },
        interactive: true
      },
      {
        id: "geojson-polygon-stroke",
        source: "my-geojson-polygon-source",
        type: "line",
        paint: { "line-color": stroke, "line-width": 4 },
        interactive: false
      }
    ]
  });
}

const propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

var MAPBOX_TOKEN =
  "pk.eyJ1IjoibWVsc21hcGJveCIsImEiOiJjamsxY2wxOGgwZXhjM3ZyeXkxazB3ZHdhIn0.yS4ilXYArrM45BUk1my2Vw";

class Map4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: location.latitude,
        longitude: location.longitude,
        zoom: 11,
        bearing: 180,
        pitch: 60
      },
      mapStyle: buildStyle({ stroke: "#FF00FF", fill: "green" })
    };
    autobind(this);
  }

  componentWillMount() {
    const colors = ["red", "green", "blue"];
    let i = 0;
    window.setInterval(
      function interval() {
        this.setState({
          mapStyle: buildStyle({
            stroke: colors[i % colors.length],
            fill: colors[(i + 1) % colors.length]
          })
        });
        i = i + 1;
      }.bind(this),
      2000
    );
  }

  _onViewportChange(opt) {
    this.setState({ viewport: opt });
  }

  _onClickFeatures(event) {
    window.console.log(event.features);
  }

  render() {
    const viewport = {
      // mapStyle: this.state.mapStyle,
      ...this.state.viewport,
      ...this.props
    };
    return (
      <InteractiveMap
        {...viewport}
        maxPitch={85}
        onViewportChange={this._onViewportChange}
        onClick={this._onClickFeatures}
        // setting to `true` should cause the map to flicker because all sources
        // and layers need to be reloaded without diffing enabled.
        preventStyleDiffing={false}
        mapboxApiAccessToken={TOKEN}
      >
        <ScatterplotOverlay
          {...viewport}
          locations={locations}
          dotRadius={2}
          globalOpacity={1}
          compositeOperation="screen"
          mapboxApiAccessToken={TOKEN}
        />

        <DeckGL
          mapboxApiAccessToken={TOKEN}
          {...viewport}
          layers={[
            new ArcLayer({
              data: [
                {
                  sourcePosition: [-122.41669, 37.7853],
                  targetPosition: [-122.45669, 37.781]
                }
              ],
              strokeWidth: 4,
              getSourceColor: x => [0, 0, 255],
              getTargetColor: x => [0, 255, 0]
            })
          ]}
        />
      </InteractiveMap>
    );
  }
}
export default Map4;
