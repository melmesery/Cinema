import React from "react";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import "../../Styles/MediaUI.css";

function MediaUI({ item }) {
  const { poster_path, vote_average, id } = item;

  return (
    <Col md="2" sm="3" xs="3" className="media m-1 p-1">
      <img
        src={`https://image.tmdb.org/t/p/w200` + poster_path}
        alt=""
        className="w-100 media-img"
      />

      <div className="media-info w-100 pt-2">
        <p className="fw-bold text-danger d-flex align-items-center gap-2">
          <span className="m-0">
            <MdVerified />
          </span>{" "}
          {vote_average}
        </p>
        {/* <p className="name h-25 text-dark">{title || name}</p> */}
        <button className="media-btn">
          <Link to={`/tv-series/${id}`} className="nav-link">
            Watch
          </Link>
        </button>
      </div>
    </Col>
  );
}

export default MediaUI;
