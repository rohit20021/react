import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MovieTable extends Component {
  columns = [
    { path: "title", lable: "Title" ,content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
    { path: "genre.name", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger"
        >
          delete
        </button>
      ),
      lable:"Remove"
    },
  ];
  render() {
    const { currentPageMovies, onDelete, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        onDelete={onDelete}
        onSort={onSort}
        data={currentPageMovies}
        sortColumn={sortColumn}
      />
    );
  }
}
export default MovieTable;
