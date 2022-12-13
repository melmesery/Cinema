import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import "../../src/Styles/Movies.css";
import GenersSlider from "../Components/UI/GenersSlider";
import MainSlider from "../Components/UI/MainSlider";
import SliderUI from "../Components/UI/SliderUI";
import SubscribeCards from "../Components/UI/SubscribeCards";
import "../Styles/Home.css";

function Home({ topMovies, topShows, newMovies, newShows, trends }) {
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 6,
  //   speed: 500,
  // };

  var settings = {
    className: "slick",
    // dots: true,
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
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* hero Section */}
      <section className="hero">
        <Container className="text-center">
          <Row>
            <Col sm="12">
              <div className="hero-main">
                <h1 className="hero-title text-capitalize">
                  All Your Streaming Services <br /> in One Place
                </h1>

                <div className="email-form d-flex align-items-center justify-content-center gap-4">
                  <button className="hero-btn py-2 rounded-5">
                    <Link className="nav-link hero-link">How It Works</Link>
                  </button>
                  <button className="hero-btn py-2 rounded-5">
                    <Link className="nav-link hero-link">Add Watchlist</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* trending section */}
      <section className="trending py-4">
        <MainSlider trends={trends} />
      </section>

      {/* latest movies section */}
      <section className="slider py-4">
        <Container>
          <h4 className="mb-3">
            <Link className="nav-link slider-link">
              Now Playing Movies{" "}
              <span>
                <AiOutlineDoubleRight />
              </span>{" "}
            </Link>
          </h4>
          <Slider {...settings}>
            {newMovies.map((item) => {
              return <SliderUI key={item.id} item={item} />;
            })}
          </Slider>
        </Container>
      </section>

      {/* latest tv section */}
      <section className="slider py-4">
        <Container>
          <h4 className="mb-3">
            <Link className="nav-link slider-link">
              On The Air Shows{" "}
              <span>
                <AiOutlineDoubleRight />
              </span>{" "}
            </Link>
          </h4>
          <Slider {...settings}>
            {newShows.map((item) => {
              return <SliderUI key={item.id} item={item} />;
            })}
          </Slider>
        </Container>
      </section>

      {/* geners Section */}
      <section className="geners py-4">
        <Container>
          <h4 className="text-dark">Genres</h4>
          <GenersSlider />
        </Container>
      </section>

      {/* top rated movies section */}
      <section className="slider py-4">
        <Container>
          <h4 className="mb-3">
            <Link className="nav-link slider-link">
              Top Rated Movies{" "}
              <span>
                <AiOutlineDoubleRight />
              </span>{" "}
            </Link>
          </h4>
          <Slider {...settings}>
            {topMovies.map((item) => {
              return <SliderUI key={item.id} item={item} />;
            })}
          </Slider>
        </Container>
      </section>

      {/* top rated tv section */}
      <section className="slider py-4">
        <Container>
          <h4 className="mb-3">
            <Link className="nav-link slider-link">
              Top Rated TV Shows{" "}
              <span>
                <AiOutlineDoubleRight />
              </span>{" "}
            </Link>
          </h4>
          <Slider {...settings}>
            {topShows.map((item) => {
              return <SliderUI key={item.id} item={item} />;
            })}
          </Slider>
        </Container>
      </section>

      {/* subscribtion section */}
      <section className="subscribing py-5">
        <Container>
          <Row className="justify-content-center">
            <h2 className="text-center mb-3 fw-bold">Select Your Plan</h2>
            <p className="text-center mb-5">
              No hidden fees, equipment rentals, or installation appointments.
            </p>
            <SubscribeCards />
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
