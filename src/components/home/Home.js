import React from "react";

import "./../../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    {
      console.log("home styles", this.props.style1, this.props.style3);
    }

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.data.length > 0
            ? this.state.data.map((key, img) => {
                let index = img;
                return (
                  <div class="HomeRow">
                    <div class={"HomeColumn"}>
                      <Link to={`/image/${index}`}>
                        <img
                          src={
                            process.env.PUBLIC_URL + this.state.data[img].Path
                          }
                          className="HomeImg"
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div class="HomeColumn">
                      <Link to={`/image/${index}`}>
                        <img
                          src={
                            process.env.PUBLIC_URL + this.state.data[img].Path
                          }
                          className="HomeImg"
                          alt="img"
                        />
                      </Link>
                    </div>
                  </div>
                );
              })
            : null}
          <titlef>{this.state.data.Name}</titlef>
          <comment>All pictures will be presented here ..</comment>
        </header>
      </div>
    );
  }
}

export default Home;
