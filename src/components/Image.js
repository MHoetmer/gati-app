import React from "react";
import { connect } from "react-redux";
import "./../App.css";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      id: props.match.params.id,
      style2: false
    };
  }
  componentWillUpdate(prevProps) {
    if (prevProps.match.params.id != this.props.match.params.id) {
      this.setState({ id: this.props.match.params.id });
      fetch(`http://localhost:8000/api/image/${this.props.match.params.id}`, {
        mode: "cors",
        method: "GET"
      })
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          this.setState({ data: data.data });
        });
    }
  }
  componentWillMount() {
    fetch(`http://localhost:8000/api/image/${this.state.id}`, {
      mode: "cors",
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({ data: data.data });
      });

    fetch(`http://localhost:8000/api/album/japan`, {
      mode: "cors",
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        console.log("Albumdata", data);
      });
  }

  render() {
    const style1 = this.props.style1;
    const style3 = this.props.style3;
    return (
      <div>
        <header className="ImageContainer">
          <a
            className={
              style1 ? "ImageTitle1" : style3 ? "ImageTitle3" : "ImageTitle2"
            }
          >
            {this.state.data.Album}
          </a>

          <img
            src={process.env.PUBLIC_URL + this.state.data.Path}
            className="Image"
            alt="img"
          />

          <a
            className={
              style1 ? "ImageTitle1" : style3 ? "ImageTitle3" : "ImageTitle2"
            }
          >
            {this.state.data.Name}
          </a>

          <a
            className={
              style1
                ? "ImageComment1"
                : style3
                ? "ImageComment3"
                : "ImageComment2"
            }
          >
            {this.state.data.Note}
          </a>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  style1: state.style1,
  style3: state.style3
});

export default connect(mapStateToProps)(Image);
