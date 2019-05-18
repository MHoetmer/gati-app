import React, { Component } from "react";
import Typist from "react-typist";

export default class Text extends Component {
  render() {
    return <Typist className={"Gatiway3"}>{this.props.text}</Typist>;
  }
}
