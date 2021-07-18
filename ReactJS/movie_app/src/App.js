import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        {/*link는 Router 안에서 작동된다.*/}
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
      </HashRouter>
      <footer></footer>
    </>
  );
}

export default App;
