import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Card, Col, ListGroup, ListGroupItem } from "reactstrap";


function SubscribeCards() {
  return (
    <>
      <Col  md="3" xs='8'>
        <Card className="subscribe rounded-5 text-center">
          <div className="pt-3">
            <p className="mb-0 fw-bold">WATCH<sup>+</sup> (No Ads)</p>
            <p className="mb-0">Get 1 month free, then</p>
            <p className="mb-0 mt-3 price fw-bold">$14.99/month</p>
            <button className="px-4 mt-3  rounded-0 w-75">
              <Link>Select Plan</Link>
            </button>
          </div>
          <hr className="text-dark mx-2 rounded-5"/>
          <div>
            <ListGroup className="card-list">
                <ListGroupItem className="card-list-item d-flex align-items-center gap-2">
                    <span> <BsCheck2All /> </span>
                    <p className="mb-0">Get unlimited access to thousands of shows and movies with no ads</p>
                </ListGroupItem>
                <ListGroupItem className="card-list-item d-flex align-items-center gap-2">
                    <span> <BsCheck2All /> </span>
                    <p className="mb-0">Watch on your favorite devices</p>
                </ListGroupItem>
                <ListGroupItem className="card-list-item d-flex align-items-center gap-2">
                    <span> <BsCheck2All /> </span>
                    <p className="mb-0">Switch plans or cancel anytime</p>
                </ListGroupItem>
                <ListGroupItem className="card-list-item d-flex align-items-center gap-2">
                    <span> <BsCheck2All /> </span>
                    <p className="mb-0">Download from thousands of titles to watch offline</p>
                </ListGroupItem>
            </ListGroup>
          </div>
        </Card>
      </Col>

      <Col  md="3" xs='8'>
        <Card className="subscribe rounded-5 text-center">
          <div className="pt-3">
            <p className="mb-0 fw-bold">WATCH<sup>+</sup></p>
            <p className="mb-0">Get 1 month free, then</p>
            <p className="mb-0  mt-3 price fw-bold">$7.99/month</p>
            <button className="px-4 mt-3 rounded-0 w-75">
              <Link>Select Plan</Link>
            </button>
          </div>
          <hr className="text-dark mx-2 rounded-5"/>
          <div>
            <ListGroup className="card-list">
                <ListGroupItem className="card-list-item d-flex align-items-center gap-2">
                    <span> <BsCheck2All /> </span>
                    <p className="mb-0">Get unlimited access to thousands of shows and movies with limited ads</p>
                </ListGroupItem>
                <ListGroupItem className="card-list-item d-flex align-items-center gap-2">
                    <span> <BsCheck2All /> </span>
                    <p className="mb-0">Watch on your favorite devices</p>
                </ListGroupItem>
                <ListGroupItem className="card-list-item d-flex align-items-center gap-2">
                    <span> <BsCheck2All /> </span>
                    <p className="mb-0">Switch plans or cancel anytime</p>
                </ListGroupItem>
            </ListGroup>
          </div>
        </Card>
      </Col>

      <Col md="3" xs='8'>
        <Card className="subscribe rounded-5 text-center">
          <div className="pt-3">
            <p className="mb-0 fw-bold">WATCH<sup>+</sup> + Live TV</p>
            <p className="mb-0">Get 1 month free, then</p>
            <p className="mb-0  mt-3 price  fw-bold">$69.99/month</p>
            <button className="px-4 mt-3  rounded-0 w-75">
              <Link>Select Plan</Link>
            </button>
          </div>
          <hr className="text-dark mx-2 rounded-5"/>
          <div>
            <ListGroup className="card-list">
                <ListGroupItem className="card-list-item d-flex align-items-center gap-2">
                    <span> <BsCheck2All /> </span>
                    <p className="mb-0">Get unlimited access to thousands of shows and movies on WATCH<sup>+</sup> with limited ads</p>
                </ListGroupItem>
                <ListGroupItem className="card-list-item d-flex align-items-center gap-2">
                    <span> <BsCheck2All /> </span>
                    <p className="mb-0">Stream 75+ top Live and On-Demand TV channels on WATCH<sup>+</sup></p>
                </ListGroupItem>
                <ListGroupItem className="card-list-item d-flex align-items-center gap-2">
                    <span> <BsCheck2All /> </span>
                    <p className="mb-0">Unlimited DVR: Store Live TV recordings for up to nine months and fast-forward through your DVR content</p>
                </ListGroupItem>
                <ListGroupItem className="card-list-item d-flex align-items-center gap-2">
                    <span> <BsCheck2All /> </span>
                    <p className="mb-0">Endless entertainment with WATCH<sup>+</sup></p>
                </ListGroupItem>
                <ListGroupItem className="card-list-item d-flex align-items-center gap-2">
                    <span> <BsCheck2All /> </span>
                    <p className="mb-0">Switch plans or cancel anytime</p>
                </ListGroupItem>
            </ListGroup>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default SubscribeCards;
