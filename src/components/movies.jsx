import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import pagelist from "../utils/pagelist";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./maoviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentGenre: "",
    pageSize: 3,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "allMovies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }
  deleteMovie = (mov) => {
    const movie = this.state.movies.filter((m) => m._id != mov._id);
    this.setState({ movies: movie });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handlesort = (sortColumn) => {
    this.setState({ sortColumn: sortColumn });
  };
  handleGenreSelected = (genre) =>
    this.setState({ currentGenre: genre.name, currentPage: 1 });
  render() {
    if (this.state.movies.length == 0) {
      return <h1>No movie is avaliable</h1>;
    }
    const filtered =
      this.state.currentGenre == "allMovies"
        ? this.state.movies
        : this.state.movies.filter(
            (m) => m.genre.name == this.state.currentGenre
          );
    const sortedMovies = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );
    const currentPageMovies = pagelist(
      sortedMovies,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <main className="container">
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelected={this.handleGenreSelected}
              selectedGenre={this.state.currentGenre}
            />
          </div>
          <div className="col">
            <h1>There are {filtered.length} in this list</h1>
            <MovieTable
              currentPageMovies={currentPageMovies}
              onDelete={this.deleteMovie}
              onSort={this.handlesort}
              sortColumn={this.state.sortColumn}
            />
            <Pagination
              itemCount={filtered.length}
              pageSize={this.state.pageSize}
              onPagechange={this.handlePageChange}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Movies;
