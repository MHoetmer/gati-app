import React from "react";
import { connect } from "react-redux";
import "./../../App.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      id: props.match.params.id,
      style2: false,
      left: "<",
      index: 0
    };
  }

  componentWillUpdate(prevProps) {
    if (prevProps.match.params.id != this.props.match.params.id) {
      this.fetchImage(this.props.match.params.id);
    }
  }
  componentWillMount() {
    this.fetchImage(this.state.id);
  }

  setHistory = idx => {
    const history = createBrowserHistory();
    this.props.setHome(false);
    const location = {
      pathname: `/image/${idx}`,
      state: { fromDashboard: true }
    };
    history.replace(location);
  };

  fetchImage(id) {
    if (this.props.index) {
      for (var i = 0; i < this.props.album.length; i++) {
        if (this.props.album[i].Uid == id) {
          this.setState({ album: this.props.album });
          this.setState({ image: this.props.album[i] });
          this.setState({ index: i });
        }
      }
    } else {
      {
        console.log("fetching image ...", this.props.match.params.id);
      }
      this.setState({ id: this.props.match.params.id });
      fetch(`http://localhost:8000/api/image/${this.props.match.params.id}`, {
        mode: "cors",
        method: "GET"
      })
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          this.setState({ image: data.data });
        });
      //to={`/image/${this.state.album[this.state.index - 1].Uid}`}
    }
  }

  goLeft = () => {
    this.fetchImage(this.state.index - 1);
  };

  render() {
    {
      console.log("image", this.props.album, this.state.album);
    }
    const style1 = this.props.style1;
    const style3 = this.props.style3;
    return this.props.album.length > 6 ? (
      <div>
        <Grid container justify="center" className={"ImageContainer"}>
          <Grid item md={12}>
            <a
              className={
                style1
                  ? style3
                    ? "ImageComment4"
                    : "ImageTitle1"
                  : style3
                  ? "ImageTitle3"
                  : "ImageTitle2"
              }
            >
              {this.state.image.Album}
            </a>
          </Grid>
          <Grid container md={12}>
            <Grid container md={2}>
              <Grid item md={12} />
              <Grid item md={12} />
              <Grid item md={12} className={"ImageColLeft"}>
                {this.state.index ? (
                  <Link className={"ImageTextCol"}>{this.state.left}</Link>
                ) : null}
              </Grid>
              <Grid item md={12} />
              <Grid item md={12} />
            </Grid>
            <Grid container md={8} className={"ImageCol"}>
              <img
                src={process.env.PUBLIC_URL + this.state.image.Path}
                className="Image"
                alt="img"
              />
            </Grid>
            <Grid container md={2}>
              <Grid item md={12} />
              <Grid item md={12} />
              <Grid item md={12} className={"ImageColRight"}>
                {this.state.index ? (
                  <Link className={"ImageTextCol"}>></Link>
                ) : null}
              </Grid>
              <Grid item md={12} />
              <Grid item md={12} />
            </Grid>
          </Grid>
          <Grid item md={12}>
            <a
              className={
                style1
                  ? style3
                    ? "ImageComment4"
                    : "ImageTitle1"
                  : style3
                  ? "ImageTitle3"
                  : "ImageTitle2"
              }
            >
              {this.state.image.Name}
            </a>
          </Grid>
          <Grid item md={12}>
            <a
              className={
                style1
                  ? style3
                    ? "ImageComment4"
                    : "ImageComment1"
                  : style3
                  ? "ImageComment3"
                  : "ImageComment2"
              }
            >
              {this.state.image.Note}
              {Date(this.state.image.Date).toString()}
            </a>
          </Grid>
        </Grid>
      </div>
    ) : null;
  }
}
const mapStateToProps = state => ({
  style1: state.style1,
  style3: state.style3,
  album: state.album,
  index: state.album
});

export default connect(mapStateToProps)(Image);
