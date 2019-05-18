import React from "react";
import { connect } from "react-redux";
import Album4 from "../album/Album4";
import Image from "../image/Image";
import Album4Small from "../album/Album4Small";
import { Route } from "react-router-dom";

class Album4Controller extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.view == 1 ? (
          <Route path="/image/0" component={Image} />
        ) : (
          <p>test failed view3</p>
        )}
        {this.props.view == 2 ? (
          <Route path="/album/:name" component={Album4} />
        ) : (
          <p>test failedview1</p>
        )}
        {this.props.view == 3 ? (
          <Route path="/album/:name" component={Album4Small} />
        ) : (
          <p>test failedview1</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  view: state.view
});

export default connect(mapStateToProps)(Album4Controller);
