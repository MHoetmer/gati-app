import React from "react";
import Image from "./../components/Image";
import Home from "./../components/Home";
import "./../App.css";
import { connect } from "react-redux";
import { changeStyle1 } from "./../actions/actions";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MenuBar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [1, 2],
      albums: ["Home1", "Japan", "Georgie"],
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
            <Link className={"NavigationBar1"} onClick={this.changeStyleOne}>
              Layout 1
            </Link>

            <Link className={"NavigationBar1"} onClick={this.changeStyle2}>
              Layout 2
            </Link>
            <a to="/" className={"Gatiway1"}>
              Gatiway
            </a>
          </ul>
          <ul>
            <Link to="/" className={"ImageLink1"}>
              Home
            </Link>

            {this.state.images.map(i => {
              return (
                <Link to={`/image/${i}`} className={"ImageLink1"}>
                  {this.state.albums[i]}
                </Link>
              );
            })}
            <br />
          </ul>
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
