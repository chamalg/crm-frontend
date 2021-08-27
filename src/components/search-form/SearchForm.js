import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

export const SearchForm = ({handleOnChange, searchTerm}) => {
    return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label column ms={3}>Search: </Form.Label>
                <Col ms={9}>
                    <Form.Control name="SearchTerm" onChange={handleOnChange} value={searchTerm} placeholder="Search..." />
                </Col>
            </Form.Group>
        </Form>
    )
}
