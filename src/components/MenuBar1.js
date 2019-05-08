import React from "react";
import Image from "./../components/Image";
import Home1 from "./../components/Home1";
import Fonts from "./../components/Fonts";
import Logos from "./../components/Logos";
import "./../App.css";
import { connect } from "react-redux";
import { changeStyle1, changeStyle3 } from "./../actions/actions";

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
        <div className={"Body1"}>
          <ul>
            <Link className={"NavigationBar1"} onClick={this.changeStyleOne}>
              Layout 1
            </Link>

            <Link className={"NavigationBar1"} onClick={this.changeStyleTwo}>
              Layout 2
            </Link>
            <Link className={"NavigationBar1"} onClick={this.changeStyleThree}>
              Layout 3
            </Link>
            <Link to="/logos" className={"NavigationBar1"}>
              Logo's
            </Link>
            <Link to="/logos" className={"NavigationBar1"}>
              Fonts
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
          <Route path="/" exact component={Home1} />
          <Route path="/fonts" component={Fonts} />
          <Route path="/logos" component={Logos} />
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
