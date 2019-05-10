import React from "react";
import Grid from "@material-ui/core/Grid";
import "./../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    let images = [];
    for (let i = 1; i < 17; i++) {
      fetch(`http://localhost:8000/api/image/${i}`, {
        mode: "cors",
        method: "GET"
      })
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          images.push(data.data);
        });
    }
    this.setState({ images: images });
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

export default Home1;
