import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import MoviesUI from "../Components/UI/MoviesUI";
import Slider from "react-slick";
import "../../src/Styles/Movies.css";
import Header from "../Components/Header/Header";

function Movies({ topMovies }) {
  var settings = {
    className: "slick",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="movies py-5">
        <Container>
          <div className="movies-hero text-center">
            <h1 className="fw-bold">Movies</h1>
            <p className="mb-0">
              Movies move us like nothing else can, whether they’re scary,
              funny, <br />
              dramatic, romantic or anywhere in-between. So many titles, so much
              to experience.
            </p>
          </div>
        </Container>
      </section>

      <section className="movies-geners">
        <Container>
          <h4 className="mb-4 fw-bold">Action</h4>
          <Slider {...settings}>
            {topMovies.map((movie) => {
              return <MoviesUI key={movie.id} movie={movie} />;
            })}
          </Slider>
        </Container>
      </section>

      <section className="lists py-5">
        <Container>
          <Card className="list p-4 border-0 rounded-0">
            <Row className="d-flex align-items-center">
              <Col lg="6" className="ps-5">
                <p className="lists-des">
                  A new way to personalize <br /> & organize your collection.
                </p>
                <button className="lists-btn px-3 py-1">Learn more</button>
              </Col>
              <Col lg="6">
                <h1 className="text-center mb-0">My Lists</h1>
              </Col>
            </Row>
          </Card>
        </Container>
      </section>

      <section className="movies-geners">
        <Container>
          <h2 className="mb-4 fw-bold">Romance</h2>
          <Slider {...settings}>
            {topMovies.map((movie) => {
              return <MoviesUI key={movie.id} movie={movie} />;
            })}
          </Slider>
        </Container>
      </section>

      <section className="hd py-5">
        <Container>
          <Card className="uhd p-4 rounded-5">
            <Row className="d-flex align-items-center">
              <Col lg="6" sm='5' className="ps-5">
                <p className="lists-des">
                  Browse 4K UHD Movies <br /> & organize your collection.
                </p>
                <button className="lists-btn px-5 py-1">Find a Movie</button>
              </Col>
              <Col lg="6" sm='5'>
                <Card className="hd-card text-center rounded-5 mb-0 p-3">
                  4K UHD
                </Card>
              </Col>
              <p className="text-center mb-0 mt-3 fw-bold">
                4K UHD playback requires a 4K compitable device. For more info
                visit our Help Center.
              </p>
            </Row>
          </Card>
        </Container>
      </section>
    </>
  );
}

export default Movies;
