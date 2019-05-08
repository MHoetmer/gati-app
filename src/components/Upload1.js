import React from "react";
import { connect } from "react-redux";
import "./../App.css";

class Upload1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "choose file"
    };
  }
  componentDidMount() {}

  handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    fetch("http://localhost:8000/api/upload", {
      method: "POST",
      mode: "no-cors",
      body: data
    });
  }

  render() {
    const style1 = this.props.style1;
    const { value } = this.state;
    return (
      <div className={"TextContainer"}>
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Document</title>
        </head>
        <body>
          <form
            onSubmit={this.handleSubmit}
            className={"UploadButton1"}
            enctype="multipart/form-data"
          >
            <a className={"ImageLink1"}>File:</a>
            <input type="file" name="File" className={"UploadInput"} />
            <br />
            <a className={"ImageLink1"} style={{ marginLeft: "-16px" }}>
              Album:
            </a>{" "}
            <input type="text" name="Album" className={"UploadInput"} />
            <br />
            <a className={"ImageLink1"}>Name:</a>{" "}
            <input
              placeholder={"..."}
              type="text"
              name="Name"
              className={"UploadInput"}
            />
            <br />
            <a className={"ImageLink1"}>Note:</a>{" "}
            <input type="text" name="Note" className={"UploadInput"} />
            <button
              className={"UploadButton1"}
              type="submit"
              value="upload"
              onClick={this.handleClick}
            >
              Upload
            </button>
          </form>
        </body>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  style1: state.style1
});

export default connect(mapStateToProps)(Upload1);
