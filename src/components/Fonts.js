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
    return <div>Fonts</div>;
  }
}
const mapStateToProps = state => ({
  style1: state.style1
});

export default connect(mapStateToProps)(Fonts);
