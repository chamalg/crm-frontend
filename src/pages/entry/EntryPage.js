import React, { useState } from 'react'

import { Jumbotron } from 'react-bootstrap';
import { LoginForm } from '../../components/login/Login';
import { PasswordReset } from '../../components/password-reset/PasswordReset';

import './entry.css';


export const Entry = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = data;

    const handleChange = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || !password) {
            alert("Please provide all required information.")
        }


    }

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                <LoginForm handleOnChange={handleChange} email={email} password={password} onLogin={handleSubmit} />
                <PasswordReset handleOnChange={handleChange} email={email} onReset={handleSubmit} />
            </Jumbotron>
        </div>
    )
}