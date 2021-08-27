import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TicketTable from '../../components/ticket-table/TicketTable';
import dummyTickets from '../../assets/data/dummy-tickets.json';
import BreadcrumbPage from '../../components/breadcrumb/BreadcrumbPage';
import NewTicket from '../new-ticket/NewTicket';
import { TicketListing } from '../ticket-listing/TicketListing';

export default function Dashboard() {
    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbPage page="Dashboard" />
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Button variant="info" style={{ 'fontSize': '2rem', padding: '10px 30px' }}>Add new ticket</Button>
                </Col>
            </Row>

            <Row>
                <Col className="text-center mb-2">
                    <div>Total tickets: 50</div>
                    <div>Pending tickets: 5</div>
                </Col>
            </Row>
            <Row>
                <Col className="mt-2">
                    Recently added tickets
                </Col>
            </Row>

            <Row>
                <Col className="recent-ticket">
                    {/* <TicketTable tickets={dummyTickets} /> */}
                    {/* <NewTicket /> */}
                    <TicketListing/>
                    <NewTicket/>
                </Col>
            </Row>
        </Container>
    )
}
