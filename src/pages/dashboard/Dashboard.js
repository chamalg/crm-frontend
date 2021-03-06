import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadcrumbPage from '../../components/breadcrumb/BreadcrumbPage';
import { TicketListing } from '../ticket-listing/TicketListing';
import { Link } from 'react-router-dom';

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
                    <Link to="add-ticket"><Button variant="info" style={{ 'fontSize': '2rem', padding: '10px 30px' }}>Add new ticket</Button></Link>
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
                    <TicketListing />
                </Col>
            </Row>
        </Container>
    )
}
