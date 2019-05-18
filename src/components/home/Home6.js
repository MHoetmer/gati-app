import React from "react";
import ImageScroller from "react-image-scroller";
import "./../../App.css";
import { connect } from "react-redux";
import { BrowserRouter as Link } from "react-router-dom";

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
    fetch(`http://localhost:8000/api/image/1`, {
      mode: "cors",
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        var dataS = this.state.data;
        dataS.push(data.data);
        dataS.push(data.data);
        dataS.push(data.data);
        this.setState({ data: dataS });
      });

    fetch(`http://localhost:8000/api/image/2`, {
      mode: "cors",
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        var dataS = this.state.data;
        dataS.push(data.data);
        dataS.push(data.data);
        dataS.push(data.data);
        this.setState({ data: dataS });
      });
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

  render() {
    let imageScroller = [];

    if (this.state.thumbnails.length > 3) {
      for (var i = 0; i < 3; i++) {
        imageScroller.push(
          <div>
            <img
              src={process.env.PUBLIC_URL + this.state.thumbnails[i].Path}
              alt="First"
            />
            <img src="./photos/georgie/1.jpg" alt="Fifth" />
          </div>
        );
      }
    }

    return this.state.thumbnails.length > 2 ? (
      <div className="App">
        <header className="App-header">
          <ImageScroller>
            <img
              src={process.env.PUBLIC_URL + this.state.thumbnails[0].Path}
              alt="Fifth"
            />

            <img
              src={process.env.PUBLIC_URL + this.state.thumbnails[1].Path}
              alt="Fifth"
            />
            <img
              src={process.env.PUBLIC_URL + this.state.thumbnails[2].Path}
              alt="Fifth"
            />
            <img src="./photos/georgie/1.jpg" alt="Fifth" />
            <img src="./photos/georgie/1.jpg" alt="Fifth" />
            <img src="./photos/georgie/1.jpg" alt="Fifth" />
            <img src="./photos/georgie/1.jpg" alt="Fifth" />
          </ImageScroller>
        </header>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => ({
  style1: state.style,
  style3: state.style3
});

export default connect(mapStateToProps)(Home4);
