import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const TicketTable = ({ tickets }) => {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Message</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>
                {tickets && tickets.length ? (
                    tickets.map((ticket, i) => (
                        <tr key={i}>
                            <td>
                                <Link to={`/ticket/${ticket.id}`}>
                                    {ticket.id}
                                </Link>
                            </td>
                            <td>{ticket.subject}</td>
                            <td>{ticket.status}</td>
                            <td>{ticket.msg}</td>
                            <td>{ticket.addedAt}</td>
                        </tr>
                    ))) : (
                    <tr><td colSpan="4" className="text-center">No data found!</td></tr>
                )}


            </tbody>
        </Table >
    )
}

