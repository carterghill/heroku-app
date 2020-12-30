import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './Button.css'

const STYLES = [
    'btn-primary',
    'btn-outline'
]

const SIZES = [
    'btn-medium',
    'btn-large'
]

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
