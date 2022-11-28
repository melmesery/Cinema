import React from "react";
import { Card } from "reactstrap";
import "../../Styles/Movies.css";

function MoviesUI({ movie }) {
  const { title, poster_path } = movie;

  return (
    <div className="movies-ui">
      <Card className="movies-img mx-auto p-2 rounded-0">
        <img
          src={`https://image.tmdb.org/t/p/w200` + poster_path}
          alt="movie-poster"
        />
      </Card>

      <div className="movie-info">
        <p className="name my-1">{title}</p>
      </div>
    </div>
  );
}

export default MoviesUI;
