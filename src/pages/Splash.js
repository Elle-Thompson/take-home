import "../assets/sass/splash.scss";
import splashImage from '../assets/images/splash_1.png';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


function Splash() {
  return (
    <Row>
      <Col>
        <Link to="feed">
          <img src={splashImage} alt="Splash Logo" className="mx-auto d-block splash-image"/>
        </Link>
      </Col>
    </Row>
  );
}

export default Splash;
