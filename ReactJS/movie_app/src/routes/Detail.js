import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    console.log(location.state);
  }
  render() {
    return <span>hello</span>;
  }
}

export default Detail;
