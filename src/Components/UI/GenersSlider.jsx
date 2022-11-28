import React from "react";
import Slider from "react-slick";
import { Card } from "reactstrap";
import family from "../../assets/Images/Family-genre.jpg";
import chat from "../../assets/Images/chat.jpg";
import comedy from "../../assets/Images/Comedy-genre.jpg";
import crime from "../../assets/Images/Crime-genre.jpg";
import devotional from "../../assets/Images/Devotional-genre.jpg";
import drama from "../../assets/Images/Drama-genre.jpg";
import fantasy from "../../assets/Images/Fantasy-genre.jpg";
import horror from "../../assets/Images/Horror-genre.jpg";
import mythology from "../../assets/Images/Mythology-genre.jpg";
import reality from "../../assets/Images/reality.jpg";
import romantic from "../../assets/Images/romantic.jpg";
import supernatural from "../../assets/Images/Supernatural-genre.jpg";
import suspense from "../../assets/Images/Suspense-genre.jpg";
import thriller from "../../assets/Images/Thriller-genre.jpg";
import { Link } from "react-router-dom";

function GenersSlider() {
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  const geners = [
    {
      id: 1,
      image: family,
    },
    {
      id: 2,
      image: chat,
    },
    {
      id: 3,
      image: comedy,
    },
    {
      id: 4,
      image: crime,
    },
    {
      id: 5,
      image: devotional,
    },
    {
      id: 6,
      image: drama,
    },
    {
      id: 7,
      image: fantasy,
    },
    {
      id: 8,
      image: horror,
    },
    {
      id: 9,
      image: mythology,
    },
    {
      id: 10,
      image: reality,
    },
    {
      id: 11,
      image: romantic,
    },
    {
      id: 12,
      image: supernatural,
    },
    {
      id: 13,
      image: suspense,
    },
    {
      id: 14,
      image: thriller,
    },
  ];

  return (
    <Slider {...settings}>
      {geners.map((gener) => {
        return (
          <div className="mx-2">
            <Link className="nav-link">
              <Card className="slider-item border-0 text-center rounded-0 mx-2">
                <img src={gener.image} alt="" className="w-100" />
              </Card>
            </Link>
          </div>
        );
      })}
    </Slider>
  );
}

export default GenersSlider;
