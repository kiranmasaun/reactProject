import React from "react";

const MovieList = ({ MovieList }) => {
  if (MovieList && MovieList.length > 0) {
    const list = MovieList.map((item) => {
      return (
        <div key={item.imdbID} className="col-md-4">
          <img src={item.Poster} alt="Movie Poster" />
          <h6>{item.Title}</h6>
          <p>{item.Year}</p>
        </div>
      );
    });
    return list;
  }
};

export default MovieList;
