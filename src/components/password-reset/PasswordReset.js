import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export const PasswordReset = ({ handleOnChange, onReset, email }) => {



    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Reset password</h1>
                    <hr />
                    <Form onSubmit={onReset} autoComplete="off">
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter email" required />
                        </Form.Group>
                        <Button type="submit">Reset password</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!">Login now?</a>
                </Col>
            </Row>
        </Container>
    )
}


PasswordReset.prototypes = {
    handleOnChange: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
}