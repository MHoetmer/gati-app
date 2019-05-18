import React from "react";
import Grid from "@material-ui/core/Grid";
import "./../../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

var itter = 0;

class Home1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    this.fetchResult();
  }

  fetchResult = () => {
    fetch(`http://localhost:8000/api/allimages`, {
      mode: "cors",
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({ images: data.data });
      });
  };

  pushRow = (start, end) => {
    let row = [];
    for (let j = start; j < end; j++) {
      row.push(
        <Link to={`/album/${this.state.images[j].Album}`}>
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
    if (this.state.images.length > 26) {
      for (let rows = 0; rows < 4; rows++) {
        var row1 = this.pushRow(rows * 6, 6 + rows * 6);
        rendered.push(
          <Grid item md={12}>
            {row1}
          </Grid>
        );
      }
    }

    return (
      <Grid container style={{ textAlign: "center" }}>
        {rendered}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  style1: state.style,
  style3: state.style3
});

export default connect(mapStateToProps)(Home1);
