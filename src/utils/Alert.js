import React from 'react';
import { Alert } from 'react-bootstrap';


export const NormalAlert = ({ message, variant }) => {
    return (
        <Alert variant={variant}>
            {message}
        </Alert>
    )
}

