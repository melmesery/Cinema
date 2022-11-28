import React from "react";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

function MainSliderUI({ item }) {
  const {
    poster_path,
    title,
    name,
    vote_average,
  } = item;

  return (
    <>
      <Link className="nav-link">
        <Card className="poster rounded-0 border-0">
          <div className="card-img">
            <img
              src={`https://image.tmdb.org/t/p/w500` + poster_path}
              alt="movie-poster"
              className="movie-poster w-100"
            />
            <div className="gradient"></div>
          </div>

          <div className="poster-data ps-3 py-3">
            <p className="fw-bold text-danger d-flex align-items-center gap-2 mb-0">
              <span className="m-0">
                <MdVerified />
              </span>{" "}
              {vote_average}
            </p>
            <p className="title text-dark m-0">{title || name}</p>
          </div>
        </Card>
      </Link>
    </>
  );
}

export default MainSliderUI;
