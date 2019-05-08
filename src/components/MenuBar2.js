import React from "react";
import Image from "./../components/Image";
import Home from "./../components/Home";
import "./../App.css";
import { connect } from "react-redux";
import { changeStyle1 } from "./../actions/actions";
import Grid from "@material-ui/core/Grid";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MenuBar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [1, 2],
      albums: ["Home", "Japan", "Georgie"],
      thumbnails: ["useless", "/photos/georgie/1.jpg", "/photos/japan/1.jpg"]
    };
  }

  changeStyleOne = () => {
    this.props.changeStyle1(true);
  };

  changeStyle2 = () => {
    this.props.changeStyle1(false);
  };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <Link className={"NavigationBar2"} onClick={this.changeStyleOne}>
              Layout 1
            </Link>

            <Link className={"NavigationBar2"} onClick={this.changeStyle2}>
              Layout 2
            </Link>
            <a to="/" className={"Gatiway2"}>
              Gatiway
            </a>
          </ul>

          <Grid item>
            <Grid container justify="center">
              {this.state.images.map(i => {
                return (
                  <Link to={`/image/${i}`} className={"ImageLink2"}>
                    <Grid key={i} item>
                      <a>{this.state.albums[i]}</a>
                    </Grid>
                    <img
                      src={process.env.PUBLIC_URL + this.state.thumbnails[i]}
                      className="Thumbnail"
                    />
                  </Link>
                );
              })}
            </Grid>
          </Grid>

          <Route path="/" exact component={Home} />
          <Route path="/image/:id" component={Image} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  style1: state.style1
});

export default connect(
  mapStateToProps,
  { changeStyle1 }
)(MenuBar1);
