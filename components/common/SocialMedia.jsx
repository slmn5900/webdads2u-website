import { Container, Row, Col } from "react-bootstrap";
import "../../style/WebsitePerformance.css";

function SocialMedia() {
  return (
    <div className="social-media-section">
      <Container className="social-media">
        <Row className="align-items-center justify-content-center">
          <Col md={8} className="w">
            <h6>Change starts here!</h6>
            <h3>Take your first step towards RESULT.</h3>
          </Col>
          <Col
            md={3}
            className="text-md-end text-center mt-4 mt-md-0"
          >
            <button
  className="social-btn"
  onClick={() => window.dispatchEvent(new Event("openGlobalPopup"))}
>
  Get a Quotes
</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SocialMedia;
