import GridLayout from "react-grid-layout";
import React from "react";

export default class ScrollableImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      paths: []
    };
  }

  fetchResult = () => {
    let dataT = [];
    for (let i = 1; i < 30; i++) {
      fetch(`http://localhost:8000/api/image/${i}`, {
        mode: "cors",
        method: "GET"
      })
        .then(resp => {
          return resp.json();
        })
        .then(dataI => {
          dataT.push(dataI.data);
        });
    }
    this.setState({ data: dataT });
    console.log("scrollablehome did mount", dataT, dataT.length);
  };

  componentDidMount() {
    this.fetchResult();
    console.log(this.state.data);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data.length != this.state.data.length) {
      this.fetchResult();
    }
  }

  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      { i: "a", x: 0, y: -0.5, w: 2, h: 10, static: true },
      { i: "b", x: 2, y: -1.7, w: 3, h: 10, static: true },
      { i: "c", x: 5, y: -0.4, w: 1, h: 10 },
      { i: "d", x: 6, y: -1.2, w: 4, h: 10 },
      { i: "e", x: 10, y: -0.1, w: 2, h: 10 }
    ];

    let rendered = [];
    if (this.state.data.length > 0) {
      this.state.data.map((img, k) => {
        rendered.push(
          <div key="a" className={"container"}>
            <img
              style={{ zIndex: -2 }}
              src={process.env.PUBLIC_URL + this.state.data[k].Path}
              className={"slider"}
            />
            <p
              className={"sticky"}
              style={{
                marginTop: "-50px",
                color: "white",
                zIndex: 200,
                fontSize: 25,
                fontWeight: 900
              }}
            >
              TEXT
            </p>
            <img
              style={{ zIndex: -2 }}
              src={
                process.env.PUBLIC_URL +
                "/photos/Miami/34816984_191736838198418_2631664648536981504_n.png"
              }
              className={"slider"}
            />
            <img
              style={{ zIndex: -2 }}
              src={process.env.PUBLIC_URL + this.state.data[k].Path}
              className={"slider"}
            />
            <img
              style={{ zIndex: -2 }}
              src={process.env.PUBLIC_URL + this.state.data[k % 2].Path}
              className={"slider"}
            />
            <img
              style={{ zIndex: -2 }}
              src={process.env.PUBLIC_URL + this.state.data[k % 3].Path}
              className={"slider"}
            />
          </div>
        );
      });
    }
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={1000}
        width={2200}
      >
        {rendered}
      </GridLayout>
    );
  }
}
