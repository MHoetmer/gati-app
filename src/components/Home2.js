import React from "react";
import Grid from "@material-ui/core/Grid";
import "./../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    let images = [];
    for (let i = 1; i < 10; i++) {
      fetch(`http://localhost:8000/api/image/${i}`, {
        mode: "cors",
        method: "GET"
      })
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          console.log("data.data", data.data);
          images.push(data.data);
          console.log("images", images);
        });
    }
    console.log("Images", images);
    this.setState({ images: images });
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

export default Home2;
