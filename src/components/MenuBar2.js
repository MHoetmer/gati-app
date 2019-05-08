import React from "react";
import Image from "./../components/Image";
import Home from "./../components/Home";
import Fonts from "./../components/Fonts";
import Logos from "./../components/Logos";
import Upload1 from "./../components/Upload1";
import "./../App.css";
import { connect } from "react-redux";
import { changeStyle1, changeStyle3 } from "./../actions/actions";
import Grid from "@material-ui/core/Grid";
import Home2 from "./../components/Home2";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MenuBar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [1, 2],
      albums: ["Home", "Japan", "Georgië"],
      thumbnails: ["useless", "/photos/georgie/1.jpg", "/photos/japan/1.jpg"]
    };
  }

  changeStyleOne = () => {
    this.props.changeStyle1(true);
    this.props.changeStyle3(false);
  };

  changeStyleTwo = () => {
    this.props.changeStyle1(false);
    this.props.changeStyle3(false);
  };

  changeStyleThree = () => {
    this.props.changeStyle3(true);
    this.props.changeStyle1(false);
  };

  render() {
    return (
      <Router>
        <div className={"Body2"}>
          <ul>
            <Link className={"NavigationBar2"} onClick={this.changeStyleOne}>
              Layout 1
            </Link>

            <Link className={"NavigationBar2"} onClick={this.changeStyleTwo}>
              Layout 2
            </Link>

            <Link className={"NavigationBar2"} onClick={this.changeStyleThree}>
              Layout 3
            </Link>
            <Link to="/logos" className={"NavigationBar2"}>
              Logo's
            </Link>
            <Link to="/fonts " className={"NavigationBar2"}>
              Fonts
            </Link>
            <Link to="/upload" className={"NavigationBar2"}>
              Upload
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

          <Route path="/" exact component={Home2} />
          <Route path="/fonts" component={Fonts} />
          <Route path="/logos" component={Logos} />
          <Route path="/upload" component={Upload1} />
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
  { changeStyle1, changeStyle3 }
)(MenuBar1);
