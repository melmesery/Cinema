import React from "react";
import { Card } from "reactstrap";
import "../../Styles/Slider.css";

function SliderUI({ item }) {
  const { poster_path } = item;

  return (
    // <div className="slider-ui mx-2">
    //   <Card className="slider-img mx-auto rounded-0 ">
    //     <img
    //       src={`https://image.tmdb.org/t/p/w200` + poster_path}
    //       alt="movie-poster"
    //     />
    //   </Card>
    // </div>
    <div className="mx-2">
      <Card className="border-0 text-center mx-2">
        <img src={`https://image.tmdb.org/t/p/w200` + poster_path} alt="" className="w-100" />
      </Card>
    </div>
  );
}

export default SliderUI;
