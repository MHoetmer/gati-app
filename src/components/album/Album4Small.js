import React from "react";
import "./../../App.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { saveAlbum } from "../../actions/actions";
import ImageScroller from "react-image-scroller";
import Image from "../image/Image";

class Album4Small extends React.Component {
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

  pushRow = (start, end) => {
    let row = [];
    for (let j = start; j < end; j++) {
      row.push(
        <Link to={`/image/${this.state.images[j].Uid}`}>
          <img
            src={process.env.PUBLIC_URL + this.state.images[j].Path}
            className={"HomeImage1"}
            alt="img"
          />
        </Link>
      );
    }
    return row;
  };

  render() {
    let rendered = [];
    if (this.state.images.length > 6) {
      var row1 = this.pushRow(0, 6);
      rendered.push(
        <Grid item md={12}>
          {row1}
        </Grid>
      );
    }
    if (this.state.images.length > 14) {
      var row2 = this.pushRow(6, 12);
      rendered.push(
        <Grid item md={12}>
          {row2}
        </Grid>
      );
    }
    if (this.state.images.length > 18) {
      var row2 = this.pushRow(12, 18);
      rendered.push(
        <Grid item md={12}>
          {row2}
        </Grid>
      );
    }

    return (
      <Grid container style={{ textAlign: "center" }}>
        {rendered}
      </Grid>
    );
  }
}
const mapStateToProps = state => ({
  album: state.album,
  view: state.view
});

export default connect(
  mapStateToProps,
  { saveAlbum }
)(Album4Small);
