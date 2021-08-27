import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadcrumbPage from '../../components/breadcrumb/BreadcrumbPage';
import { SearchForm } from '../../components/search-form/SearchForm';
import TicketTable from '../../components/ticket-table/TicketTable';
import dummyTickets from '../../assets/data/dummy-tickets.json';

export const TicketListing = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [displayTickets, setDisplayTickets] = useState([]);

    const handleOnChange = e => {
        const { value } = e.target;
        setSearchTerm(value);
        searchTickets(value)
        console.log(searchTerm);
    }

    const searchTickets = (str) => {
        const displayTickets = dummyTickets.filter(row => {
            console.log(row)
            row.subject.toLowerCase().includes(str.toLowerCase())
        })
        setDisplayTickets(displayTickets);
    }

    useEffect(() => {
        setDisplayTickets(dummyTickets);
    }, [searchTerm])

    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbPage page="Ticket List" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button varient="info">Add new Ticket</Button>
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
