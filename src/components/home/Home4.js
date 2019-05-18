import React from "react";
import ImageScroller from "react-image-scroller";
import "./../../App.css";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import {
  changeStyle1,
  changeStyle3,
  setView,
  setHome
} from "../../actions/actions";

class Home4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      thumbnails: []
    };
  }
  componentDidMount() {
    {
      console.log("home4 styles", this.props.style1, this.props.style3);
    }
    this.fetchThumbnails();
  }

  fetchThumbnails() {
    fetch(`http://localhost:8000/api/thumbnails`, {
      mode: "cors",
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => this.setState({ thumbnails: data.data }));
  }

  goToPage = pageNumber => {
    this.reactPageScroller.goToPage(pageNumber);
  };
  leaveHome = () => {
    {
      console.log("leaveHome", this.props.home);
    }
    this.props.setHome(false);
  };

  render() {
    return this.state.thumbnails.length > 2 ? (
      <div>
        <div className={"sliderVertical"}>
          <Link
            to={`/album/${this.state.thumbnails[0].Album}`}
            onClick={this.leaveHome}
            className={"transparentContainer"}
          >
            <img
              src={process.env.PUBLIC_URL + this.state.thumbnails[0].Path}
              className={"slider4"}
            />
            <a className={"transparentHover"}>
              {this.state.thumbnails[0].Album}
            </a>
          </Link>

          <Link
            to={`/album/${this.state.thumbnails[1].Album}`}
            onClick={this.leaveHome}
            className={"transparentContainer"}
          >
            <img
              src={process.env.PUBLIC_URL + this.state.thumbnails[1].Path}
              className={"slider4"}
            />
            <a className={"transparentHover"}>
              {this.state.thumbnails[1].Album}
            </a>
          </Link>
          <Link
            to={`/album/${this.state.thumbnails[2].Album}`}
            onClick={this.leaveHome}
            className={"transparentContainer"}
          >
            <img
              src={process.env.PUBLIC_URL + this.state.thumbnails[2].Path}
              className={"slider4"}
            />
            <a className={"transparentHover"}>
              {this.state.thumbnails[2].Album}
            </a>
          </Link>
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => ({
  style1: state.style,
  style3: state.style3,
  home: state.home
});

export default connect(
  mapStateToProps,
  { setHome }
)(Home4);
