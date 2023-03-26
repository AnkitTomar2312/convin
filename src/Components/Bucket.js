import React, { useState } from "react";
import Cards from "./Cards";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

export default function Bucket() {
  const [addbucket, setAddBucket] = useState(false);
  const [category, setCategory] = useState("");
  const handelBucket = () => {
    setAddBucket(true);
  };

  const [categoryList, setCategoryList] = useState([]);
  const handelCategory = (event) => {
    setCategory(event.target.value);
  };
  const handelAdd = (event) => {
    event.preventDefault();
    if (category !== "") {
      setCategoryList([...categoryList, category]);
    }
    setCategory("");
    setAddBucket(false);
  };
  const handelDel = (index) => {
    const data = categoryList.filter((element, id) => {
      return id !== index;
    });
    setCategoryList(data);
  };

  return (
    <div>
      <div>
        <Button
          className="add-new-bucket"
          variant="success"
          onClick={handelBucket}
        >
          Add a new Bucket
        </Button>
        <br />
        <br />
        {addbucket && (
          <Container>
            <Row>
              <Form>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Bucket Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={category}
                      onChange={handelCategory}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Button onClick={handelAdd}>Add Bucket</Button>
                </Col>
              </Form>
            </Row>
          </Container>
        )}
        {categoryList.map((item, index) => {
          return (
            <div key={index}>
              <Card>
                <Row>
                  <Col>
                    <h2>{item}</h2>
                  </Col>
                  <Col>
                    <Button variant="danger" onClick={() => handelDel(index)}>
                      Delete this Bucket
                    </Button>
                  </Col>
                </Row>
                {<Cards />}
              </Card>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}
