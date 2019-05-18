import GridLayout from "react-grid-layout";
import React from "react";
import one from "./../../photos/fotos/1.jpg";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Link } from "react-router-dom";
import { changeStyle1, changeStyle3, setHome } from "../../actions/actions";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";

class MyFirstGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      load: false
    };
  }

  componentDidMount() {
    this.fetchResult();
    this.setState({ load: true });
  }

  componentWillUpdate(prevProps, prevState) {
    if (this.state.load == false) {
      this.fetchResult();
      this.setState({ load: true });
    }
  }

  leaveHome = () => {
    const history = createBrowserHistory();
    this.props.setHome(false);
    const location = {
      pathname: "/album/japan",
      state: { fromDashboard: true }
    };
    history.replace(location);
  };

  setHome = () => {
    this.props.setHome(true);
  };

  fetchResult = () => {
    let images = [];
    for (let i = 1; i < 30; i++) {
      fetch(`http://localhost:8000/api/image/${i}`, {
        mode: "cors",
        method: "GET"
      })
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          images.push(data.data);
          this.setState({ images: images });
        });
    }
  };

  render() {
    {
      console.log("images...", this.state.images);
    }
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      { i: "a", x: 0, y: -0.2, w: 2, h: 10, static: true },
      { i: "b", x: 2, y: -4.6, w: 2, h: 10, static: true },
      { i: "c", x: 4, y: -1.2, w: 2, h: 10 },
      { i: "d", x: 6, y: -3.6, w: 2, h: 10 },
      { i: "e", x: 8, y: -0.2, w: 2, h: 10 },
      { i: "f", x: 10, y: -3.8, w: 2, h: 10 },
      { i: "g", x: 12, y: -0.2, w: 2, h: 10 },
      { i: "h", x: 14, y: -5.1, w: 2, h: 10 },
      { i: "h", x: 16, y: -1.8, w: 3, h: 10 },
      { i: "h", x: 18, y: -0.2, w: 2, h: 10 }
    ];

    var keys = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let rendered = [];

    if (this.state.images.length > 6) {
      {
        console.log("loaded..", this.state.images);
      }
      for (var i = 0; i < 6; i++) {
        rendered.push(
          <div key={keys[i % 8]} className={"container"}>
            <div className={"Home2Container"}>
              <img
                style={{ zIndex: -2 }}
                src={process.env.PUBLIC_URL + this.state.images[2].Path}
                className={"slider"}
              />
              <Link
                to={`/album/${this.state.images[2].Album}`}
                className={"ImageLink2"}
              >
                <p onClick={this.leaveHome} className={"Home2Text"}>
                  {this.state.images[2].Album}
                </p>
              </Link>
            </div>
            <div className={"Home2Container"}>
              <img
                style={{ zIndex: -2 }}
                src={process.env.PUBLIC_URL + this.state.images[i].Path}
                className={"slider"}
              />
              <Link
                to={`/album/${this.state.images[i].Album}`}
                className={"ImageLink2"}
              >
                <p onClick={this.leaveHome} className={"Home2Text"}>
                  {this.state.images[i].Album}
                </p>
              </Link>
            </div>
            <div className={"Home2Container"}>
              <img
                style={{ zIndex: -2 }}
                src={process.env.PUBLIC_URL + this.state.images[4].Path}
                className={"slider"}
              />
              <Link
                to={`/album/${this.state.images[4].Album}`}
                className={"ImageLink2"}
              >
                <p onClick={this.leaveHome} className={"Home2Text"}>
                  {this.state.images[4].Album}
                </p>
              </Link>
            </div>
            <div className={"Home2Container"}>
              <img
                style={{ zIndex: -2 }}
                src={process.env.PUBLIC_URL + this.state.images[3].Path}
                className={"slider"}
              />
              <Link
                to={`/album/${this.state.images[3].Album}`}
                className={"ImageLink2"}
              >
                <p onClick={this.leaveHome} className={"Home2Text"}>
                  {this.state.images[3].Album}
                </p>
              </Link>
            </div>
            <div className={"Home2Container"}>
              <img
                style={{ zIndex: -2 }}
                src={process.env.PUBLIC_URL + this.state.images[1].Path}
                className={"slider"}
              />
              <Link
                to={`/album/${this.state.images[1].Album}`}
                className={"ImageLink2"}
              >
                <p onClick={this.leaveHome} className={"Home2Text"}>
                  {this.state.images[i].Album}
                </p>
              </Link>
            </div>
            <div className={"Home2Container"}>
              <img
                style={{ zIndex: -2 }}
                src={process.env.PUBLIC_URL + this.state.images[i].Path}
                className={"slider"}
              />
              <Link
                to={`/album/${this.state.images[i].Album}`}
                className={"ImageLink2"}
              >
                <p onClick={this.leaveHome} className={"Home2Text"}>
                  {this.state.images[i].Album}
                </p>
              </Link>
            </div>
            <div className={"Home2Container"}>
              <img
                style={{ zIndex: -2 }}
                src={process.env.PUBLIC_URL + this.state.images[i].Path}
                className={"slider"}
              />
              <Link
                to={`/album/${this.state.images[i].Album}`}
                className={"ImageLink2"}
              >
                <p onClick={this.leaveHome} className={"Home2Text"}>
                  {this.state.images[i].Album}
                </p>
              </Link>
            </div>
            <div className={"Home2Container"}>
              <img
                style={{ zIndex: -2 }}
                src={process.env.PUBLIC_URL + this.state.images[0].Path}
                className={"slider"}
              />
              <Link
                to={`/album/${this.state.images[0].Album}`}
                className={"ImageLink2"}
              >
                <p onClick={this.leaveHome} className={"Home2Text"}>
                  {this.state.images[0].Album}
                </p>
              </Link>
            </div>
          </div>
        );
      }
    }

    return this.state.images.length > 6 ? (
      <div className={"Body2"}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={250}
          width={1950}
        >
          {rendered}
        </GridLayout>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => ({
  style1: state.style1,
  home: state.home
});

export default connect(
  mapStateToProps,
  { changeStyle1, changeStyle3, setHome }
)(MyFirstGrid);
