import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react"
import { ApiService } from "../services/ApiService";


function Article() {
  const { reviewId } = useParams();

  const API = new ApiService({});
  const [apiResults, setApiResults] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.get("reviews")
      .then((json) => {
        setApiResults(json.data);
      })
      .catch((err) => console.error(err))
      // .finally(() => {
      //   setIsLoading(false);
      // });
  }, []);

  console.log(reviewId);


  const reviewData = apiResults.map((names) => {
    console.log(names)
return [
<Container>
      <h1> {names.beer.name} </h1>
      <h2>Posted at: {names.created_at}</h2>
      <Row>
        <Col>
          Reviewed By: {names.reviewer.name}
        </Col>
        <Col>
          Rating: {names.rating}
        </Col>
        <Col>
          Score: {names.score}
        </Col>
      </Row>
      <br/>
      <p>  
      {names.content}
      </p>
      <Button as={Link} to="/feed">Back</Button>
    </Container> 
]
}
)
  
  return (
    <>
    <h2>Reviews</h2>
   {reviewData}
    
  </>
  ) }


export default Article;
