import React from "react";
import Image from "../image/Image";
import Home3 from "../home/Home3";
import Fonts from "../Fonts";
import Logos from "../Logos";
import UploadU from "../upload/UploadU";
import Album from "../album/Album";
import "./../../App.css";
import { connect } from "react-redux";
import { changeStyle1, changeStyle3, setHome } from "../../actions/actions";
import Grid from "@material-ui/core/Grid";
import Text from "../experiment/AnimatedText";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MenuBar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/thumbnails`, {
      mode: "cors",
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => this.setState({ thumbnails: data.data }));
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

  changeStyleFour = () => {
    this.props.changeStyle3(true);
    this.props.changeStyle1(true);
  };

  leaveHome = () => {
    this.props.setHome(false);
  };

  setHome = () => {
    this.props.setHome(true);
  };

  render() {
    return (
      <Router>
        <div className={"Body3"}>
          <Grid container className={"LeftMenuContainer3"}>
            <Grid item md={8} className={"LeftMenu3"}>
              <Link className={"NavigationBar3"} onClick={this.changeStyleOne}>
                Layout 1
              </Link>

              <Link className={"NavigationBar3"} onClick={this.changeStyleTwo}>
                Layout 2
              </Link>

              <Link
                className={"NavigationBar3"}
                onClick={this.changeStyleThree}
              >
                Layout 3
              </Link>
              <Link className={"NavigationBar3"} onClick={this.changeStyleFour}>
                Layout 4
              </Link>

              <Link to="/logos" className={"NavigationBar3"}>
                Logo's
              </Link>

              <Link to="/fonts " className={"NavigationBar3"}>
                Fonts
              </Link>

              <Link to="/upload" className={"NavigationBar3"}>
                Upload
              </Link>
            </Grid>
            <Grid item md={2} />
            <Grid item md={1}>
              <Link to={`/`} className={"ImageLink3"} onClick={this.setHome}>
                <Text text={"Gatiway"} />
              </Link>
            </Grid>
          </Grid>
          <br />

          <Grid container>
            {this.state.thumbnails.length > 0 ? (
              this.state.thumbnails.map((v, k) => {
                return (
                  <Grid key={1} item md={1}>
                    <Link to={`/album/${v.Album}`} className={"ImageLink3"}>
                      <Grid key={1} item md={1} className={"ImageLink3"}>
                        <Link to={`/album/${v.Album}`} className={"ImageLink3"}>
                          {v.Album}
                        </Link>
                      </Grid>

                      <Grid key={2} item md={1}>
                        <img
                          src={process.env.PUBLIC_URL + v.Path}
                          className={"Thumbnail3"}
                        />
                      </Grid>
                    </Link>
                    <br />
                  </Grid>
                );
              })
            ) : (
              <a>Loading..</a>
            )}
          </Grid>

          <Route path="/" exact component={Home3} />
          <Route path="/fonts" component={Fonts} />
          <Route path="/logos" component={Logos} />
          <Route
            path="/upload"
            render={props => <UploadU {...props} layout={3} />}
          />
          <Route path="/image/:id" component={Image} />
          <Route path="/album/:name" component={Album} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  style1: state.style1,
  style3: state.style3
});

export default connect(
  mapStateToProps,
  { changeStyle1, changeStyle3, setHome }
)(MenuBar1);
