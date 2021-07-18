import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navi">
      <span>
        <Link to="/">Home</Link>
      </span>
      <br />
      {/*link는 Router 안에서 작동된다.*/}
      <span>
        <Link
          to={{
            pathname: "/about",
            state: {
              fromNavigation: true,
            },
          }}
        >
          About
        </Link>
      </span>
    </div>
  );
}

export default Navigation;
