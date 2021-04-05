import "./App.css";
import Navbar from "./Components/Navbar";
import { movies } from "./Components/movies";
import MovieList from "./Components/MovieList";
import React, { Component } from "react";
import Scroll from "./Components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      searchfield: "",
      rateCheck: 0,
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event);
  };

  onRateChange = (event) => {
    this.setState({ rateCheck: event.target.value });
  };

  onAddChange = (newMovie) => {
    this.setState({ movies: [...this.state.movies, newMovie] });
  };

  render() {
    const filtredMovies = this.state.movies.filter((movies) => {
      return (
        movies.title
          .toLowerCase()
          .includes(this.state.searchfield.toLocaleLowerCase()) &&
        (this.state.rateCheck != 6
          ? movies.rate >= parseInt(this.state.rateCheck)
          : movies.rate <= parseInt(this.state.rateCheck) + 1)
      );
    });

    return (
      <div className="App">
        <Navbar onSearch={this.onSearchChange} onRate={this.onRateChange} />
        <Scroll>
        <MovieList movies={filtredMovies} addMovie={this.onAddChange} />
        </Scroll>
      </div>
    );
  }
}

export default App;
