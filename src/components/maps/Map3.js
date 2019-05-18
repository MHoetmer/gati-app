import { Component } from "react";
import ReactMapGL from "react-map-gl";
import React from "react";
import { fromJS } from "immutable";
import { ScatterplotLayer } from "deck.gl";

var TOKEN =
  "pk.eyJ1IjoibWVsc21hcGJveCIsImEiOiJjamsxY2wxOGgwZXhjM3ZyeXkxazB3ZHdhIn0.yS4ilXYArrM45BUk1my2Vw";

const data = [
  {
    timestamp: Date.now() - 10000,
    coordinates: [52.536131, 13.447444],
    temperature: 19
  },
  {
    timestamp: Date.now() - 9000,
    coordinates: [52.538221, 13.44376],
    temperature: 20
  },
  {
    timestamp: Date.now() - 8000,
    coordinates: [52.540247, 13.43899],
    temperature: 21
  },
  {
    timestamp: Date.now() - 7000,
    coordinates: [52.541751, 13.43513],
    temperature: 22
  },
  {
    timestamp: Date.now() - 6000,
    coordinates: [52.54264, 13.433692],
    temperature: 23
  },
  {
    timestamp: Date.now() - 5000,
    coordinates: [52.543007, 13.431339],
    temperature: 24
  },
  {
    timestamp: Date.now() - 4000,
    coordinates: [52.543755, 13.428731],
    temperature: 25
  },
  {
    timestamp: Date.now() - 3000,
    coordinates: [52.544295, 13.427207],
    temperature: 27
  }
];

const plot_position_layer = new ScatterplotLayer({
  id: "scatterplot-layer",
  data,
  pickable: true,
  opacity: 0.8,
  radiusScale: 30, // make the dots visible or darker background
  radiusMinPixels: 15, // make the dots visible or darker background
  radiusMaxPixels: 100,

  getPosition: d => [d.coordinates[1], d.coordinates[0]], // -> Essential Change here

  getColor: d => [255, 255, 255] // make the dots visible or darker background
});

const layer1 = new ScatterplotLayer({
  data: [{ position: [51.92, 4.48], color: [255, 210, 210], radius: 1000 }]
});
class Map extends React.Component {
  state = {
    viewport: {
      width: 2000,
      height: 400,
      latitude: 51.92,
      longitude: 4.48,
      zoom: 5
    }
  };

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={TOKEN}
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        layers={plot_position_layer}
      />
    );
  }
}
export default Map;
