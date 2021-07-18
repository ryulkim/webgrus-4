import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      {/*link는 Router 안에서 작동된다.*/}
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
