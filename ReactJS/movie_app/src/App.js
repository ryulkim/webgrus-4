import React from "react";
import axios from "axios"; //axios: fetch위에 작은 layer

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); //await: axios 정보를 불러일으킬 때까지 기다린다. await를 쓰려면 외부 async를 써야한다.
  };
  componentDidMount() {
    this.getMovies();
    /*
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);*/
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
