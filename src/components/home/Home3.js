import React from "react";
import Grid from "@material-ui/core/Grid";
import "./../../App.css";
import { BrowserRouter as Link } from "react-router-dom";
import { connect } from "react-redux";

var itter = 0;

class Home1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    {
      console.log("home1 styles", this.props.style1, this.props.style3);
    }
    this.fetchResult();
    itter = 0;
  }

  fetchResult = () => {
    fetch(`http://localhost:8000/api/allimages`, {
      mode: "cors",
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({ images: data.data });
      });
  };

  render() {
    var layout = [
      { i: "a", x: 0, y: -0.2, w: 2, h: 10, static: true },
      { i: "b", x: 2, y: -0.3, w: 2, h: 10, static: true },
      { i: "c", x: 4, y: -1.4, w: 2, h: 10 },
      { i: "d", x: 6, y: -1.2, w: 2, h: 10 },
      { i: "e", x: 8, y: -1.8, w: 2, h: 10 },
      { i: "f", x: 10, y: -3.3, w: 2, h: 10 },
      { i: "g", x: 12, y: -1.1, w: 2, h: 10 },
      { i: "h", x: 14, y: -0.1, w: 2, h: 10 },
      { i: "h", x: 16, y: -1.8, w: 3, h: 10 },
      { i: "h", x: 18, y: -0.2, w: 2, h: 10 }
    ];

    var keys = ["a", "b", "c", "d", "e", "f", "g", "h"];

    var classnames = [
      "ShiftedRow1",
      "ShiftedRow2",
      "ShiftedRow1",
      "ShiftedRow2"
    ];
    let rendered = [];
    if (this.state.images.length > 9) {
      {
        for (let k = 0; k < this.state.images.length / 6; k++) {
          {
            console.log("itter", k + itter + 1, k + itter + 4, k + itter + 10);
          }
          rendered.push(
            <Grid
              item
              md={12}
              key={keys[k % 8]}
              className={classnames[1 + (k % 2)]}
            >
              <img
                src={process.env.PUBLIC_URL + this.state.images[k + itter].Path}
                className={"HomeImage1"}
                alt="img"
              />
              <img
                src={
                  process.env.PUBLIC_URL + this.state.images[k + itter + 1].Path
                }
                className={"HomeImage1"}
                alt="img"
              />
              <img
                src={
                  process.env.PUBLIC_URL + this.state.images[k + itter + 5].Path
                }
                className={"HomeImage1"}
                alt="img"
              />
              <img
                src={
                  process.env.PUBLIC_URL + this.state.images[k + itter + 8].Path
                }
                className={"HomeImage1"}
                alt="img"
              />
              <img
                src={
                  process.env.PUBLIC_URL + this.state.images[k + itter + 9].Path
                }
                className={"HomeImage1"}
                alt="img"
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  this.state.images[k + itter + 12].Path
                }
                className={"HomeImage1"}
                alt="img"
              />
            </Grid>
          );
          {
            itter += 1;
          }
        }
      }
    }

    return (
      <header>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item>{rendered}</Grid>
        </Grid>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  style1: state.style,
  style3: state.style3
});

export default connect(mapStateToProps)(Home1);
