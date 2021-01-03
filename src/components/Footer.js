import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './Footer.css'

class Footer extends Component {

    handleClick = () => {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className='footer'>
				<Link onClick={this.handleClick} className='footerLink' to='/home'>Home</Link>
                •
                <Link className='footerLink' to='/about'>About</Link>
                •
                <Link className='footerLink' to='/projects'>Projects</Link>
                •
                <Link className='footerLink' to='/resources'>Resources</Link>
                •
                <Link className='footerLink' to='/contact'>Contact</Link>
            </div>
        )
    }
}

export default Footer
