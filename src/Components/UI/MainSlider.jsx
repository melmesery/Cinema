import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import MainSliderUI from "./SliderUIPlus";

function MainSlider({ trends }) {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Container>
      <h4>Trending</h4>
      <Slider {...settings}>
        {trends.map((item) => {
          return <MainSliderUI key={item.id} item={item} />;
        })}
      </Slider>
    </Container>
  );
}

export default MainSlider;
