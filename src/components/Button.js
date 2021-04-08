import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css'

export const Button = ({
    children,
    buttonSize
}) => {

    return (
        <Link className={'btn btn-primary btn-large'}
        to="contact">
            {children}
        </Link>
    )

}
