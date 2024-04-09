import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FcFrame } from "react-icons/fc";

const Inputform = () => {
  return (
    <div className="py-5">
      <Row className="gy-3 mx-5">
        <Col md={6}>
          <Form.Label htmlFor="cc-name">Top Text</Form.Label>
          <Form.Control
            type="text"
            id="cc-name"
            placeholder=""
            required
          />
        </Col>
        <Col md={6}>
          <Form.Label htmlFor="cc-number">Buttom Text</Form.Label>
          <Form.Control
            type="text"
            id=""
            placeholder=""
            required
          />
        </Col>
      </Row>
      <hr className="my-4" />
      <Button className="button mx-5">
        Get a new Meme image
        <span className="mx-1">
          <FcFrame />
        </span>
      </Button>
    </div>
  );
};

export default Inputform;
