import React from "react";
import Image from "./../components/Image";
import Home1 from "./../components/Home1";
import Fonts from "./../components/Fonts";
import Logos from "./../components/Logos";
import Album from "./../components/Album";
import Upload1 from "./../components/Upload1";
import "./../App.css";
import { connect } from "react-redux";
import { changeStyle1, changeStyle3 } from "./../actions/actions";
import Grid from "@material-ui/core/Grid";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MenuBar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [1, 2],
      albums: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/albums`, {
      mode: "cors",
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => this.setState({ albums: data.data }));
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
    // console.log("ALUBM", this.state.albums);
    return (
      <Router>
        <div className={"Body1"}>
          <Grid container className={"LeftMenuContainer"}>
            <Grid item lg={5} md={6} sm={8} xs={10} className={"LeftMenu"}>
              <Link className={"NavigationBar1"} onClick={this.changeStyleOne}>
                Layout 1
              </Link>
              <Link className={"NavigationBar1"} onClick={this.changeStyleTwo}>
                Layout 2
              </Link>
              <Link
                className={"NavigationBar1"}
                onClick={this.changeStyleThree}
              >
                Layout 3
              </Link>
              <Link to="/logos" className={"NavigationBar1"}>
                Logo's
              </Link>
              <Link to="/logos" className={"NavigationBar1"}>
                Fonts
              </Link>
              <Link to="/upload" className={"NavigationBar1"}>
                Upload
              </Link>
            </Grid>
            <Grid item lg={5} md={1} sm={0} xs={0} className={"HomeColumn"} />
            <Grid item sm={1} className={"HomeColumn"}>
              <a to="/" className={"Gatiway1"}>
                Gatiway
              </a>
            </Grid>
          </Grid>
          <br />
          <Grid container className={"LeftMenuContainer"}>
            <Grid item lg={6} md={7} sm={9} xs={11} className={"LeftMenu"}>
              <Link to="/" className={"ImageLink1"}>
                Home
              </Link>
              {this.state.albums.length > 0
                ? this.state.albums.map(i => {
                    return (
                      <Link
                        to={`/album/${this.state.albums[i]}`}
                        className={"ImageLink1"}
                      >
                        {this.state.albums[i]}
                      </Link>
                    );
                  })
                : null}
              <br />
            </Grid>
          </Grid>
          <Route path="/" exact component={Home1} />
          <Route path="/fonts" component={Fonts} />
          <Route path="/logos" component={Logos} />
          <Route path="/upload" component={Upload1} />
          <Route path="/album/:name" component={Album} />
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
