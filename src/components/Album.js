import React from "react";
import "./../App.css";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      album: this.props.match.params.name
    };
  }
  componentDidMount() {
    fetch(`http://localhost:8000/api/album/${this.props.match.params.name}`, {
      mode: "cors",
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({ images: data.data });
      });
  }

  render() {
    let rendered = [];
    if (this.state.images.length > 0) {
      this.state.images.map((k, img) => {
        rendered.push(
          <Grid key={k} item sm={3} className={"HomeColumn"}>
            <Link to={`/image/${img + 1}`}>
              <img
                src={process.env.PUBLIC_URL + this.state.images[img].Path}
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

export default Album;
