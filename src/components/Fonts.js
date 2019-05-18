import React from "react";
import { connect } from "react-redux";
import "./../App.css";

class Fonts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    const style1 = this.props.style1;
    return (
      <div className={"TextContainer"}>
        <a style={{ fontFamily: "Fedra Mono" }}>Fedra Mono</a>
        <a style={{ fontFamily: "Antique Olive" }}>Antique Olive</a>
        <br />
        <a style={{ fontFamily: "Tiempos Headline" }}>Tiempos Headline</a>
        <a style={{ fontFamily: "Gotham" }}>Gotham</a>
        <br />
        <a style={{ fontFamily: "Clearface Std" }}>Clearface Std</a>
        <a style={{ fontFamily: "Apercu" }}>Apercu</a>
        <br />
        <a style={{ fontFamily: "Beatrice Display" }}>Beatrice Display</a>
        <a style={{ fontFamily: "Sharp sans" }}>Sharp sans</a>
        <a style={{ fontFamily: "Frauen" }}>Frauen</a>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  style1: state.style1
});

export default connect(mapStateToProps)(Fonts);
