import React from "react";
import axios from "axios"; //axios: fetch위에 작은 layer
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); //await: axios 정보를 불러일으킬 때까지 기다린다. await를 쓰려면 외부 async를 써야한다.
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };
  componentDidMount() {
    this.getMovies();
    /*
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);*/
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
