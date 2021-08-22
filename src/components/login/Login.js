import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export const LoginForm = ({ handleOnChange, onLogin, email, password }) => {



    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Login</h1>
                    <hr />
                    <Form onSubmit={onLogin} autoComplete="off">
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={password} onChange={handleOnChange} placeholder="Enter password" required />
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


LoginForm.prototypes = {
    handleOnChange: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}