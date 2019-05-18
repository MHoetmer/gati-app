import React from "react";
import Image2 from "../image/Image2";
import Home2 from "../home/Home2";
import Fonts from "../Fonts";
import Logos from "../Logos";
import UploadU from "../upload/UploadU";
import Album from "../album/Album";
import "./../../App.css";
import { connect } from "react-redux";
import { changeStyle1, changeStyle3, setHome } from "../../actions/actions";
import Grid from "@material-ui/core/Grid";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MenuBar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: [],
      home: true
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
    const history = createBrowserHistory();
    this.props.setHome(true);
    const location = {
      pathname: "/",
      state: { fromDashboard: true }
    };
    history.replace(location);
  };

  render() {
    {
      console.log(
        "logic?",
        this.props.home,
        this.props.style1,
        this.props.style3
      );
    }
    return (
      <Router>
        {this.props.home & !this.props.style1 & !this.props.style3 ? (
          <Home2 />
        ) : (
          <div className={"Body2"}>
            <Grid container className={"LeftMenuContainer2"}>
              <Grid item md={12}>
                <a to="/" className={"Gatiway2"} onClick={this.setHome}>
                  Gatiway
                </a>
              </Grid>

              <Grid item md={1} className={"LeftMenu2"}>
                <Link
                  className={"NavigationBar2"}
                  onClick={this.changeStyleOne}
                >
                  Layout 1
                </Link>
              </Grid>

              <Grid item md={1} className={"LeftMenu2"}>
                <Link
                  className={"NavigationBar2"}
                  onClick={this.changeStyleTwo}
                >
                  Layout 2
                </Link>
              </Grid>
              <Grid item md={1} className={"LeftMenu2"}>
                <Link
                  className={"NavigationBar2"}
                  onClick={this.changeStyleThree}
                >
                  Layout 3
                </Link>
              </Grid>
              <Grid item md={1} className={"LeftMenu2"}>
                <Link
                  className={"NavigationBar2"}
                  onClick={this.changeStyleFour}
                >
                  Layout 4
                </Link>
              </Grid>
              <Grid item md={1} className={"LeftMenu2"}>
                <Link to="/logos" className={"NavigationBar2"}>
                  Logo's
                </Link>
              </Grid>
              <Grid item md={1} className={"LeftMenu2"}>
                <Link to="/fonts " className={"NavigationBar2"}>
                  Fonts
                </Link>
              </Grid>
              <Grid item md={1} className={"LeftMenu2"}>
                <Link to="/upload" className={"NavigationBar2"}>
                  Upload
                </Link>
              </Grid>
            </Grid>
            <br />
            <Grid container>
              {this.state.thumbnails.length > 0 ? (
                this.state.thumbnails.map((v, k) => {
                  return (
                    <Grid key={1} item md={1}>
                      <Link to={`/album/${v.Album}`} className={"ImageLink2"}>
                        <Grid key={1} item md={1} className={"ImageLink2"}>
                          <Link
                            to={`/album/${v.Album}`}
                            className={"ImageLink2"}
                          >
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
          </div>
        )}

        <Route path="/fonts" component={Fonts} />
        <Route path="/logos" component={Logos} />
        <Route
          path="/upload"
          render={props => <UploadU {...props} layout={2} />}
        />
        <Route path="/image/:id" component={Image2} />
        <Route path="/album/:name" component={Album} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  style1: state.style1,
  style3: state.style3,
  home: state.home
});

export default connect(
  mapStateToProps,
  { changeStyle1, changeStyle3, setHome }
)(MenuBar1);
