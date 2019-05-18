import React from "react";
import "./../../App.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { saveAlbum } from "../../actions/actions";

class Album extends React.Component {
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
      console.log(this.props.album);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name != this.props.match.params.name) {
      this.fetchAlbum();
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
    if (this.state.images.length > 0) {
      this.state.images.map((k, img) => {
        rendered.push(
          <Grid key={k} item sm={3} className={"HomeColumn"}>
            <Link to={`/image/${k.Uid}`}>
              <img
                src={process.env.PUBLIC_URL + k.Path}
                className={"HomeImg"}
                alt="img"
              />
            </Link>
          </Grid>
        );
      });
    }

    return (
      <header className={"ImageContainer"}>
        <Grid container className={"HomeContainer"}>
          <Grid container className={"HomeRow"}>
            {rendered}
          </Grid>
        </Grid>
      </header>
    );
  }
}
const mapStateToProps = state => ({
  album: state.album
});

export default connect(
  mapStateToProps,
  { saveAlbum }
)(Album);
