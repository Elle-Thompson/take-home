import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react"
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
  return (
    <Container>
      <h1>Beer Name</h1>
      <h2>Posted At</h2>
      <Row>
        <Col>
          Reviewed By {reviewId}
        </Col>
        <Col>
          Rating
        </Col>
        <Col>
          Score
        </Col>
      </Row>
      <p>
        Article Content
      </p>
      <Button as={Link} to="/feed">Back</Button>
    </Container>
  )
}

export default Article;
