import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadcrumbPage from '../../components/breadcrumb/BreadcrumbPage';
import { SearchForm } from '../../components/search-form/SearchForm';
import { TicketTable } from '../../components/ticket-table/TicketTable';
import dummyTickets from '../../assets/data/dummy-tickets.json';
import { Link } from 'react-router-dom';

export const TicketListing = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [displayTickets, setDisplayTickets] = useState(dummyTickets);

    const handleOnChange = e => {
        const { value } = e.target;
        setSearchTerm(value);
        searchTickets(value)
    }

    const searchTickets = (str) => {
        const filtered = dummyTickets.filter(row =>
            row.subject.toLowerCase().includes(str.toLowerCase())
        );
        setDisplayTickets(filtered);
    }

    useEffect(() => {
    }, [searchTerm, displayTickets])

    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbPage page="Ticket List" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="add-ticket"><Button varient="info">Add new Ticket</Button></Link>
                </Col>
                <Col className="text-right">
                    <SearchForm handleOnChange={handleOnChange} searchTerm={searchTerm} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable tickets={displayTickets} />
                </Col>
            </Row>
        </Container>
    )
}
