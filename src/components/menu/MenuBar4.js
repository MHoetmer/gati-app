import React from "react";
import Image from "../image/Image";
import Home4 from "../home/Home4";
import Fonts from "../Fonts";
import Logos from "../Logos";
import UploadU from "../upload/UploadU";
import Album4Controller from "../album/Album4Controller";
import "./../../App.css";
import { connect } from "react-redux";
import {
  changeStyle1,
  changeStyle3,
  setView,
  setHome
} from "../../actions/actions";
import Grid from "@material-ui/core/Grid";
import { Random2 } from "../experiment/AnimatedExamples";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  handleView = indx => {
    this.props.setView(indx);
  };

  leaveHome = () => {
    this.props.setHome(false);
  };

  setHome = () => {
    this.props.setHome(true);
    {
      console.log("set home", this.props.home);
    }
  };

  render() {
    return (
      <Router>
        <div className={"Body4"}>
          <Grid container className={"LeftMenuContainer4"}>
            <Grid item md={11} className={"LeftMenu4"}>
              <Link className={"NavigationBar4"} onClick={this.changeStyleOne}>
                Layout 1
              </Link>

              <Link className={"NavigationBar4"} onClick={this.changeStyleTwo}>
                Layout 2
              </Link>

              <Link
                className={"NavigationBar4"}
                onClick={this.changeStyleThree}
              >
                Layout 3
              </Link>
              <Link className={"NavigationBar4"} onClick={this.changeStyleFour}>
                Layout 4
              </Link>

              <Link to="/logos" className={"NavigationBar4"}>
                Logo's
              </Link>

              <Link to="/fonts " className={"NavigationBar4"}>
                Fonts
              </Link>

              <Link to="/upload" className={"NavigationBar4"}>
                Upload
              </Link>
            </Grid>
            <Grid item md={1} className={"LeftMenu4"}>
              <FontAwesomeIcon icon={faUserCircle} />
            </Grid>
            <Grid item md={12} className={"Gatiway4"}>
              <Link to={`/`} className={"ImageLink4"}>
                <Random2 text={"Gatiway"} />
              </Link>

              {!this.props.home & (this.props.album.length > 0) ? (
                <div>
                  <Link
                    to={`/image/${this.props.album[0].Uid}`}
                    style={{ color: "black" }}
                  >
                    <FontAwesomeIcon
                      icon={faSquare}
                      onClick={() => this.handleView(1)}
                    />
                  </Link>
                  <span>&nbsp;</span>
                  <Link
                    to={`/album/${this.props.album[0].Album}`}
                    style={{ color: "black" }}
                  >
                    <FontAwesomeIcon
                      icon={faThLarge}
                      onClick={() => this.handleView(2)}
                    />
                  </Link>
                  <span>&nbsp;</span>
                  <Link
                    to={`/album/${this.props.album[0].Album}`}
                    style={{ color: "black" }}
                  >
                    <FontAwesomeIcon
                      icon={faTh}
                      onClick={() => this.handleView(3)}
                    />
                  </Link>
                </div>
              ) : (
                <div>
                  <FontAwesomeIcon
                    icon={faSquare}
                    style={{ color: "#D3D3D3" }}
                  />
                  <span>&nbsp;</span>
                  <FontAwesomeIcon
                    icon={faThLarge}
                    style={{ color: "#D3D3D3" }}
                  />
                  <span>&nbsp;</span>
                  <FontAwesomeIcon style={{ color: "#D3D3D3" }} icon={faTh} />
                </div>
              )}
              {/**<nbsp /> <FontAwesomeIcon icon={faCamera} />
              <nbsp /> <FontAwesomeIcon icon={faFilm} />
    <nbsp /> <FontAwesomeIcon icon={faFileUpload} />**/}
            </Grid>
          </Grid>
          <br />

          <Grid container>
            {this.state.thumbnails.length > 0 ? (
              this.state.thumbnails.map((v, k) => {
                return (
                  <Grid key={1} item md={1}>
                    <Link
                      to={`/album/${v.Album}`}
                      className={"ImageLink4"}
                      onClick={this.leaveHome}
                    >
                      <Grid key={1} item md={12} className={"ImageLink4"}>
                        <Random2 text={v.Album} />
                      </Grid>
                      <Grid key={2} item md={1} />
                    </Link>
                    <br />
                  </Grid>
                );
              })
            ) : (
              <a>Loading..</a>
            )}
          </Grid>

          <Route path="/" exact component={Home4} />
          <Route path="/fonts" component={Fonts} />
          <Route path="/logos" component={Logos} />
          <Route
            path="/upload"
            render={props => <UploadU {...props} layout={3} />}
          />
          <Route path="/image/:id" component={Image} />
          <Route path="/album/:name" component={Album4Controller} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  style1: state.style1,
  style3: state.style3,
  view: state.view,
  album: state.album,
  home: state.home,
  images: state.images
});

export default connect(
  mapStateToProps,
  { changeStyle1, changeStyle3, setView, setHome }
)(MenuBar1);
