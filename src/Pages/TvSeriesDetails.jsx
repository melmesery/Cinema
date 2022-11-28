import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { TV_Details, API_KEY } from "../API";

function TvSeriesDetails() {
  const [TV, setTV] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${TV_Details}/${id}?${API_KEY}`)
      .then((res) => {
        setTV(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <section className="py-5">
      <Container className="py-5">
        <Row>
         <Col lg='4'>
          <img src={`https://image.tmdb.org/t/p/w200` + TV.poster_path} alt="" className="w-75 mx-auto"/>
         </Col>
         <Col lg='8'>
          <h3>{TV.name}</h3>
          <p>{TV.vote_average}</p>
          <p>{TV.origin_country}</p>
          <p>{TV.number_of_seasons}</p>
          <p>{TV.number_of_episodes}</p>
          <div className="d-flex algn-items-center gap-3">
            <button>Watch</button>
            <button>Add To Whichlist</button>
          </div>
          <p>{TV.overview}</p>
         </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TvSeriesDetails;
