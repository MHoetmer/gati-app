import React from "react";
import Image from "./../components/Image";
import Home1 from "./../components/Home1";
import Fonts from "./../components/Fonts";
import Logos from "./../components/Logos";
import UploadU from "./../components/UploadU";
import Album from "./../components/Album";
import "./../App.css";
import { connect } from "react-redux";
import { changeStyle1, changeStyle3 } from "./../actions/actions";
import Grid from "@material-ui/core/Grid";

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
            <Grid item md={3} />
            <Grid item md={1}>
              <a to="/" className={"Gatiway3"}>
                Gatiway
              </a>
            </Grid>
          </Grid>
          <br />

          <Grid container>
            {this.state.thumbnails.length > 0 ? (
              this.state.thumbnails.map((v, k) => {
                return (
                  <Grid key={1} item md={1}>
                    <Link to={`/album/${v.Album}`}>
                      <Grid key={1} item md={1} className={"ImageLink3"}>
                        <a>{v.Album}</a>
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

          <Route path="/" exact component={Home1} />
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
  { changeStyle1, changeStyle3 }
)(MenuBar1);
