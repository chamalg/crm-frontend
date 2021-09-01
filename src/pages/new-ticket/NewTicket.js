import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Jumbotron, Button, Form } from 'react-bootstrap';
import BreadcrumbPage from '../../components/breadcrumb/BreadcrumbPage';
import { BorderSpinner } from '../../utils/Loading';
import { NormalAlert } from '../../utils/Alert';
import { shortText } from '../../utils/Validation';

import './newTicket.css';

export const NewTicket = () => {

    const [data, setData] = useState({
        subject: '',
        date: '',
        details: '',
        subjectRequired: false,
        error: false,
        success: false,
        loading: false
    })

    useEffect(() => {

    }, [data])

    const { subject, subjectRequired, date, details, error, success, loading } = data;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const onSave = async (e) => {
        e.preventDefault();

        const valid = await shortText(data.subject);

        console.log(data)
        console.log(valid)

        setData({ ...data, subjectRequired: valid })

        console.log(data);
    }

    const showLoading = () => (
        loading && (
            <BorderSpinner message="Loading.. Please wait" />
        )
    )

    const showSuccess = () => (
        success && (
            <NormalAlert message="Success" variant="success" />
        )
    )

    return (
        <Container>

            <Row>
                <Col>
                    <BreadcrumbPage page="New Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Jumbotron className="mt-3 add-new-ticket bg-light">
                        <h1 className="text-info text-center mb-2">Add new ticket</h1>
                        <hr />
                        {showLoading()}
                        {showSuccess()}
                        <Form onSubmit={onSave}>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Subject</Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" name="subject" value={subject} onChange={handleOnChange} placeholder="Subject" />
                                    <Form.Text className="text-danger">{subjectRequired && 'Subject is required'}</Form.Text>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Issue Date</Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="date" name="date" value={date} onChange={handleOnChange} placeholder="Date" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Description</Form.Label>
                                <Col sm={9}>
                                    <Form.Control as="textarea" rows="5" name="details" value={details} onChange={handleOnChange} placeholder="Description" />
                                </Col>
                            </Form.Group>
                            <Button type="submit" block varient="info">Save</Button>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        </Container >
    )
}
