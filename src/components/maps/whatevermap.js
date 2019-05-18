import React, { PureComponent } from "react";
import MapGL from "react-map-gl";
import DeckGL, { ScatterplotLayer } from "deck.gl";

const MALE_COLOR = [0, 128, 255];
const FEMALE_COLOR = [255, 0, 128];

var mapbox_token =
  "pk.eyJ1IjoibWVsc21hcGJveCIsImEiOiJjamsxY2wxOGgwZXhjM3ZyeXkxazB3ZHdhIn0.yS4ilXYArrM45BUk1my2Vw";

const mapConfig = {
  center: [52.540875, 13.438545],
  zoom: 13
};

const DATA_URL =
  "https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/scatterplot/manhattan.json"; // eslint-disable-line

export const INITIAL_VIEW_STATE = {
  longitude: -74,
  latitude: 40.7,
  zoom: 11,
  maxZoom: 16,
  pitch: 0,
  bearing: 0
};

class WhateverMap extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: 960,
        height: 600,
        latitude: mapConfig.center[0],
        longitude: mapConfig.center[1],
        zoom: mapConfig.zoom
      }
    };

    this.onChangeViewport = this.onChangeViewport.bind(this);
  }

  onChangeViewport(viewport) {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  }

  initialize(gl) {
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE, gl.ONE_MINUS_DST_ALPHA, gl.ONE);
    gl.blendEquation(gl.FUNC_ADD);
  }

  render() {
    const { viewport } = this.state;
    const { data } = this.props;

    const plot_position_layer = new ScatterplotLayer({
      id: "scatterplot-layer",
      data,
      pickable: true,
      opacity: 20,
      radiusScale: 300,
      radiusMinPixels: 300,
      radiusMaxPixels: 500,
      getPosition: d => [d.coordinates[1], d.coordinates[0]] // -> Essential Change here
    });

    return (
      <div className="reactmapgldeckgl">
        <MapGL
          {...viewport}
          mapboxApiAccessToken={mapbox_token}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onChangeViewport={this.onChangeViewport}
        >
          <DeckGL
            {...viewport}
            onWebGLInitialized={this.initialize}
            layers={[plot_position_layer]}
          />
        </MapGL>
      </div>
    );
  }
}

export default WhateverMap;
