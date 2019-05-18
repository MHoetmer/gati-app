import React from "react";
import Grid from "@material-ui/core/Grid";
import "./../../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollableImages from "../experiment/ScrollableHome";
import MyFirstGrid from "./Gridlayout";

class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  render() {
    {
      console.log("scrollablehome from home2");
    }
    return (
      <div>
        <MyFirstGrid />
      </div>
    );
  }
}

export default Home2;
