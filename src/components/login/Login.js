import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const LoginForm = ({ handleChange }) => {


    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Login</h1>
                    <hr />
                    <Form>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={handleChange} placeholder="Enter password" required />
                        </Form.Group>
                        <Button type="submit">Login</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!">Forget password?</a>
                </Col>
            </Row>
        </Container>
    )
}
