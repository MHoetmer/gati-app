import React from "react";
import MenuBar1 from "./components/MenuBar1";
import MenuBar2 from "./components/MenuBar2";
import Home from "./components/Home";
import "./App.css";
import { connect } from "react-redux";
import { changeStyle1 } from "./actions/actions";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style1 = this.props.style1;
    return style1 ? <MenuBar1 /> : <MenuBar2 />;
  }
}

const mapStateToProps = state => ({
  style1: state.style1
});

export default connect(
  mapStateToProps,
  { changeStyle1 }
)(App);
