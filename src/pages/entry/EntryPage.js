import React, { useState } from 'react'

import { Jumbotron } from 'react-bootstrap';
import { LoginForm } from '../../components/login/Login';

import './entry.css';


export const Entry = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = data;

    const handleChange = e => {
        const {name, value} = e.target;
        setData({ ...data, [name]: value })
        console.log("---data--", email, password)
    }

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                <LoginForm handleChange={handleChange} />
            </Jumbotron>
        </div>
    )
}