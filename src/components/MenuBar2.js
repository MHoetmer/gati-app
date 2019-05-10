import React from "react";
import Image from "./../components/Image";
import Home from "./../components/Home";
import Fonts from "./../components/Fonts";
import Logos from "./../components/Logos";
import UploadU from "./../components/UploadU";
import Album from "./../components/Album";
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

  render() {
    console.log("thumbnails", this.state.thumbnails);
    return (
      <Router>
        <div className={"Body2"}>
          <Grid container className={"LeftMenuContainer2"}>
            <Grid item md={12}>
              <a to="/" className={"Gatiway2"}>
                Gatiway
              </a>
            </Grid>

            <Grid item md={2} className={"LeftMenu2"}>
              <Link className={"NavigationBar2"} onClick={this.changeStyleOne}>
                Layout 1
              </Link>
            </Grid>

            <Grid item md={2} className={"LeftMenu2"}>
              <Link className={"NavigationBar2"} onClick={this.changeStyleTwo}>
                Layout 2
              </Link>
            </Grid>
            <Grid item md={2} className={"LeftMenu2"}>
              <Link
                className={"NavigationBar2"}
                onClick={this.changeStyleThree}
              >
                Layout 3
              </Link>
            </Grid>
            <Grid item md={2} className={"LeftMenu2"}>
              <Link to="/logos" className={"NavigationBar2"}>
                Logo's
              </Link>
            </Grid>
            <Grid item md={2} className={"LeftMenu2"}>
              <Link to="/fonts " className={"NavigationBar2"}>
                Fonts
              </Link>
            </Grid>
            <Grid item md={2} className={"LeftMenu2"}>
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
                  <Grid key={1} item md={12} className={"AlbumMenu2"}>
                    <Link to={`/album/${v.Album}`}>
                      <Grid key={1} item md={1} className={"ImageLink2"}>
                        <a>{v.Album}</a>
                      </Grid>

                      <Grid key={2} item md={1}>
                        <img
                          src={process.env.PUBLIC_URL + v.Path}
                          className="Thumbnail"
                        />
                      </Grid>
                    </Link>
                  </Grid>
                );
              })
            ) : (
              <a>Loading..</a>
            )}
          </Grid>

          <Route path="/" exact component={Home2} />
          <Route path="/fonts" component={Fonts} />
          <Route path="/logos" component={Logos} />
          <Route
            path="/upload"
            render={props => <UploadU {...props} layout={2} />}
          />
          <Route path="/image/:id" component={Image} />
          <Route path="/album/:name" component={Album} />
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
