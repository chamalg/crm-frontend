import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadcrumbPage from '../../components/breadcrumb/BreadcrumbPage';
import dummyTickets from '../../assets/data/dummy-tickets.json';
import { MessageHistory } from '../../components/message-history/MessageHistory';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket';
import { useParams } from 'react-router-dom';

export const TicketInfo = ({ match }) => {
    const [message, setMessage] = useState('');
    const [ticket, setTicket] = useState('');

    const { id } = useParams();

    const handleOnChange = e => {
        setMessage(e.target.value);
    }
    const handleOnSubmit = e => {
        e.preventDefault();
    }

    useEffect(() => {
        for (let i = 0; i < dummyTickets.length; i++) {
            if (dummyTickets[i].id == id) {
                setTicket(dummyTickets[i]);
                continue;
            }
        }
    }, [message, id])

    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbPage page="TicketInfo" />
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    <div className="subject">Subject : {ticket.subject}</div>
                    <div className="date">Created : {ticket.addedAt}</div>
                    <div className="status">Status : {ticket.status}</div>
                </Col>
                <Col className="text-right">
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    {ticket.history && (
                        <MessageHistory msg={ticket.history} />
                    )}
                </Col>
            </Row>
            <hr />
            <Row className="mt-4">
                <Col>
                    <UpdateTicket message={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
                </Col>
            </Row>
        </Container>
    )
}
