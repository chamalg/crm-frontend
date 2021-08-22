import React from 'react';
import { Table } from 'react-bootstrap';


export default function TicketTable({ tickets }) {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>
                {tickets && tickets.length ? (
                    tickets.map((ticket, i) => (
                        <tr key={i}>
                            <td>{ticket.id}</td>
                            <td>{ticket.status}</td>
                            <td>{ticket.status}</td>
                            <td>{ticket.addedAt}</td>
                        </tr>
                    ))) : (
                    <tr><td colSpan="4" className="text-center">No data found!</td></tr>
                )}


            </tbody>
        </Table>
    )
}

