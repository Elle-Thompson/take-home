import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { ApiService } from "../services/ApiService";
import { Link } from "react-router-dom";
import "../assets/sass/feed.scss";
import MainNav from "../components/MainNav";

function Feed() {
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

  // console.log(apiResults);
  console.log(apiResults[0]);

  return (
    <>
    <MainNav/>
      {isLoading && <>loading</>}
      {apiResults &&
        apiResults.map((result) => (
          <Card>
            <Card.Body>
              <Card.Title>
                <Row key={result.uuid}>
                  <Link to={`/review/${result.uuid}`}>{result.beer.name}</Link>
                </Row>
              </Card.Title>
              <p>Origin: {result.beer.origin}</p>
              Rating: {result.rating}
            </Card.Body>
          </Card>

          //Added card and changed display items from uuid to item name and rating
        ))}
    </>
  );
}

export default Feed;
