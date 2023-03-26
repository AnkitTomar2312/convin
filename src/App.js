import Bucket from "./Components/Bucket";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Bucket />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
