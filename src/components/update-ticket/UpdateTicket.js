import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const UpdateTicket = ({ message, handleOnChange, handleOnSubmit }) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Please reply or update the ticket</Form.Text>
            <Form.Control as="textarea" row="5" name="detail" value={message} onChange={handleOnChange} />
            <div className="text-right mt-3 mb-3">
                <Button variant="info" type="submit">Reply</Button>
            </div>
        </Form>
    )
}
