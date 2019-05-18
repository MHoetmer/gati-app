import React from "react";
import "./../../App.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { saveAlbum } from "../../actions/actions";
import ImageScroller from "react-image-scroller";
import Image from "../image/Image";

class Album4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      album: this.props.match.params.name
    };
  }
  componentDidMount() {
    this.fetchAlbum();
    {
      console.log(this.props.album, "props.view", this.props.view);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name != this.props.match.params.name) {
      this.fetchAlbum();
    }
    {
      console.log("props.view", this.props.view);
    }
  }

  fetchAlbum() {
    fetch(`http://localhost:8000/api/album/${this.props.match.params.name}`, {
      mode: "cors",
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({ images: data.data });
        this.props.saveAlbum(data.data);
      });
  }

  render() {
    let rendered = [];
    return this.state.images.length > this.props.album.length - 2 ? (
      <div>
        <div className={"sliderVertical"}>
          {this.state.images.map((i, k) => {
            {
              console.log("album4 images", this.state.images[k]);
            }
            return (
              <Link
                to={`/image/${this.state.images[k].Uid}`}
                onClick={this.leaveHome}
                className={"transparentContainer"}
              >
                <img
                  src={process.env.PUBLIC_URL + this.state.images[k].Path}
                  className={"slider4"}
                />
                <a className={"transparentHover"}>
                  {this.state.images[k].Name}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    ) : null;
  }
}
const mapStateToProps = state => ({
  album: state.album,
  view: state.view
});

export default connect(
  mapStateToProps,
  { saveAlbum }
)(Album4);
