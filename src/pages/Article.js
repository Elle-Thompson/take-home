import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiService } from "../services/ApiService";

function Article() {
  const { reviewId } = useParams();

  const API = new ApiService({});
  const [apiResults, setApiResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.get("reviews")
      .then((json) => {
        setApiResults(json.data);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  console.log(reviewId);

  const reviewInfo = apiResults.map((review) => {
    return (
    <Container>
        <h1> </h1>
        <h2>Posted at:{review.created_at} </h2>
        <Row>
          <Col>
            <Link to="/author:id"> Reviewed By: {review.reviewer.name}  </Link>
          </Col>
          <Col>Beer: {review.beer.name}</Col>
          <Col>Rating: {review.rating}</Col>
          <Col>Score: {review.score}</Col>
        </Row>
        <Col> {review.content}</Col>
        <br />
        <p></p>
        <Button as={Link} to="/feed">
          Back
        </Button>
      </Container>
    )
  });


  // const singleReview = apiResults.filter (review => reviewId)


  // console.log(singleReview)

  return (
    <>
      {reviewInfo}

      {/* <Container>
        <h1> </h1>
        <h2>Posted at:{reviewInfo.reviewer} </h2>
        <Row>
          <Col>
            <Link to="/author:id"> Reviewed By: </Link>
          </Col>
          <Col>Rating:</Col>
          <Col>Score:</Col>
        </Row>
        <br />
        <p></p>
        <Button as={Link} to="/feed">
          Back
        </Button>
      </Container> */}
    </>
  );
}

export default Article;
