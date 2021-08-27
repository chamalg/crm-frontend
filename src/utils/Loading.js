import React from 'react';
import { Spinner } from 'react-bootstrap';


export const BorderSpinner = ({ message }) => {
    return (
        <Spinner animation="border" role="status">
            <span className="sr-only">{message}</span>
        </Spinner>
    )
}
export const GrowSpinner = ({ message }) => {
    return (
        <Spinner animation="grow" role="status">
            <span className="sr-only">{message}</span>
        </Spinner>
    )
}
