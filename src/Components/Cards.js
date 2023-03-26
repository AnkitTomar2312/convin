import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Cards() {
  const [edit, setEdit] = useState({
    title: "",
    link: "",
  });
  const [wantEdit, setWantEdit] = useState(false);
  const [user, setUser] = useState({
    title: "",
    link: "",
    category: "",
  });
  const handelItemDel = (index) => {
    const data = bucketItems.filter((element, id) => {
      return id !== index;
    });
    setBucketItems(data);
  };
  const [add, setAdd] = useState(false);
  const [bucketItems, setBucketItems] = useState([]);

  const handelChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    setBucketItems([...bucketItems, { ...user }]);
    setUser({ title: "", link: "", category: "" });
    setAdd(false);
  };
  const handeladd = () => {
    setAdd(true);
  };
  const handleEdit = () => {
    setWantEdit(true);
  };
  const handelEditChange = (event) => {
    const { name, value } = event.target;
    setEdit((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Button variant="dark" onClick={handeladd}>
        Add a new Cart
      </Button>
      {add && (
        <div>
          <Container>
            <Form onSubmit={handelSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title of Card</Form.Label>
                    <Form.Control
                      name="title"
                      type="text"
                      value={user.title}
                      onChange={handelChange}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Link of Content</Form.Label>
                    <Form.Control
                      name="link"
                      type="text"
                      value={user.link}
                      onChange={handelChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="primary" type="submit">
                    Add Card
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      )}

      <div>
        {bucketItems.map((item, index) => {
          return (
            <div key={index}>
              <Card style={{ width: "20em" }}>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <Button
                          variant="danger"
                          onClick={() => handelItemDel(index)}
                        >
                          Delete this Card
                        </Button>
                      </Col>
                      <Col>
                        <Button onClick={() => handleEdit(index)}>
                          Edit this Card
                        </Button>
                      </Col>
                    </Row>

                    {wantEdit && (
                      <div>
                        <Form
                          onSubmit={(event) => {
                            event.preventDefault();
                            const updatedItems = [...bucketItems];
                            const updatedItem = {
                              ...updatedItems[index],
                              title: edit.title,
                              link: edit.link,
                            };
                            updatedItems[index] = updatedItem;
                            setBucketItems(updatedItems);
                            setWantEdit(false);
                          }}
                        >
                          <Row>
                            <Col>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Edit Title</Form.Label>
                                <Form.Control
                                  name="title"
                                  type="text"
                                  value={edit.title}
                                  onChange={handelEditChange}
                                />
                                <Form.Text className="text-muted">
                                  We'll never share your email with anyone else.
                                </Form.Text>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                              >
                                <Form.Label>Edit Link</Form.Label>
                                <Form.Control
                                  name="link"
                                  type="text"
                                  value={edit.link}
                                  onChange={handelEditChange}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Button variant="success" type="submit">
                                Edit Card
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    )}

                    <Container>
                      <Row>
                        <Col>
                          <Card>
                            <Card.Body>
                              <Card.Title>{item.title}</Card.Title>
                              <Card.Text>{item.link}</Card.Text>
                              <Button variant="primary">Play video</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
