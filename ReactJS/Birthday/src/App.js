import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List.js";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
