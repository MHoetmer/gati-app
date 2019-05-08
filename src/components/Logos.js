import React from "react";
import { connect } from "react-redux";
import "./../App.css";

class Logos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    const style1 = this.props.style1;
    return (
      <div>
        <header className={"LogoPage"}>
          <div className={"LogoImages"}>
            <img src="/logos/Logo1.png" className={"LogoImg"} />
            <img src="/logos/Logo2.png" className={"LogoImg"} />
          </div>
          <div className={"LogoImages"}>
            <img src="/logos/Logo3.png" className={"LogoImg"} />
            <img src="/logos/Logo4.png" className={"LogoImg"} />
          </div>
          <div className={"LogoImages"}>
            <img src="/logos/Logo5.png" className={"LogoImg"} />
          </div>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  style1: state.style1
});

export default connect(mapStateToProps)(Logos);
