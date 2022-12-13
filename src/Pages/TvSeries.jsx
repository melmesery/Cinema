import React from "react";
import { Container, Row } from "reactstrap";
import MediaUI from "../Components/UI/MediaUI";
import SubscribeCards from "../Components/UI/SubscribeCards";
import "../Styles/TvSeries.css";

function TvSeries({ newShows, topShows }) {
  return (
    <>
      <section className="py-3 tv-header ">
        <h1 className="py-5">Watch The Most Popular TV Series</h1>
      </section>

      <section className="py-5 tvs">
        <Container>
            <h4 className="tv-title p-2">Now In Cinema</h4>
          <Row className="d-flex justify-content-center">
            {newShows.map((item) => {
              return <MediaUI item={item} />;
            })}
          </Row>
        </Container>
      </section>

      <section className="py-5 tvs">
        <Container>
            <h4 className="tv-title p-2">All Times Top Rated</h4>
          <Row className="d-flex gap-1 justify-content-center">
            {topShows.map((item) => {
              return <MediaUI item={item} />;
            })}
          </Row>
        </Container>
      </section>

      {/* subscribtion section */}
      <section className="subscribing py-5">
        <Container>
          <Row className="justify-content-center gap-3">
            <h2 className="text-center fw-bold">Select Your Plan</h2>
            <p className="text-center">No hidden fees, equipment rentals, or installation appointments.</p>
            <SubscribeCards />
          </Row>
        </Container>
      </section>
    </>
  );
}

export default TvSeries;
