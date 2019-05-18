import React from "react";
import MenuBar1 from "./components/menu/MenuBar1";
import MenuBar2 from "./components/menu/MenuBar2";
import MenuBar3 from "./components/menu/MenuBar3";
import MenuBar4 from "./components/menu/MenuBar4";
import MenuBar5 from "./components/menu/MenuBar5";
import "./App.css";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style1 = this.props.style1;
    const style3 = this.props.style3;
    return style1 ? (
      style3 ? (
        <MenuBar4 />
      ) : (
        <MenuBar1 />
      )
    ) : style3 ? (
      <MenuBar3 />
    ) : (
      <MenuBar5 />
    );
  }
}

const mapStateToProps = state => ({
  style1: state.style1,
  style3: state.style3
});

export default connect(mapStateToProps)(App);
