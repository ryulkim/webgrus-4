import logo from "./logo.svg";
import "./App.css";
import { FaCat } from "react-icons/fa"; //https://react-icons.github.io/react-icons/icons?name=fa
import Review from "./Review";

function App() {
  return (
    <div>
      <FaCat className="icon" />
      <main>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </div>
  );
}

export default App;
