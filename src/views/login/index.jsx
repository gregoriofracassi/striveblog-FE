import React, { Component } from "react"
import { Container, Form, Row, Col } from "react-bootstrap"

const Login = () => {
  return (
    <>
      <Container className="skip-nav">
        <Row>
          <Col xs={{ offset: 2, span: 8 }}>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Name" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Surname
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Surname" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Email" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
